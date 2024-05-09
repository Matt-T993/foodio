
import { db } from "../firebase/init"
import { collection, getDocs } from 'firebase/firestore'

const foodsCollectionRef = collection(db, "foods")

const transformData = docs => docs.map(doc => ({
    id: doc.id,
    ...doc.data()
}));

const Service  = {
    fetchAllFoods: async () => {
        try {
            const data = await getDocs(foodsCollectionRef)
            const foods = transformData(data.docs);
            return foods
        } catch (err) {
            console.error(err)

        }
    }

}

export default Service;