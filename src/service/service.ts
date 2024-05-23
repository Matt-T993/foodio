import { db } from "../firebase/init";
import { addDoc, collection, doc, getDoc, getDocs, query, where, updateDoc, deleteDoc, setDoc } from 'firebase/firestore';

const foodsCollectionRef = collection(db, "foods");
const cartsCollectionRef = collection(db, "carts");

const transformData = (docs) => docs.map(doc => ({
    id: doc.id,
    ...doc.data()
}));

const Service = {
    // retrieves all the food
    fetchAllFoods: async () => {
        try {
            const data = await getDocs(foodsCollectionRef);
            const foods = transformData(data.docs);
            return foods;
        } catch (err) {
            console.error(err);
        }
    },
    // gets the user cart
    fetchCartByUserEmail: async (userEmail: string) => {
        try {
            const cartQuery = query(cartsCollectionRef, where("userEmail", "==", userEmail));
            const cartSnapshot = await getDocs(cartQuery);
            const cartItems = transformData(cartSnapshot.docs);
            return cartItems;
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    },
    // add and update the user's cart 
    addToCart: async (userEmail: string, foodId: string, num: number) => {
        try {
            const foodDocRef = doc(db, "foods", foodId);
            const foodDoc = await getDoc(foodDocRef);
    
            if (!foodDoc.exists()) {
                throw new Error('Food item does not exist');
            }
            const foodData = foodDoc.data();
    
            const cartQuery = query(cartsCollectionRef, where("userEmail", "==", userEmail), where("foodName", "==", foodData.foodName));
            const cartSnapshot = await getDocs(cartQuery);
    
            if (!cartSnapshot.empty) {
                const cartItemDoc = cartSnapshot.docs[0];
                const cartItemRef = doc(db, "carts", cartItemDoc.id);
                const newQuantity = cartItemDoc.data().quantity + num;
                
                if (newQuantity > 0) {
                    await updateDoc(cartItemRef, { quantity: newQuantity });
                    console.log('Cart item quantity updated successfully');
                } else {
                    await deleteDoc(cartItemRef);
                    console.log('Cart item deleted successfully');
                }
            } else {
                if (num > 0) {
                    const newCartItem = {
                        userEmail,
                        foodName: foodData.foodName,
                        price: foodData.originalPrice,
                        quantity: num,
                    };
                    await addDoc(cartsCollectionRef, newCartItem);
                    console.log('New cart item added successfully');
                } else {
                    console.log('Quantity is zero or negative, no action taken');
                }
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    },
    // delete user's cart
    deleteFromCart: async (orderId: string) => {
        try {
            const cartItemRef = doc(db, "carts", orderId);
            await deleteDoc(cartItemRef);

            console.log('Cart item deleted successfully');
        } catch (error) {
            console.error('Error deleting cart item:', error);
        }
    }
};

export default Service;
