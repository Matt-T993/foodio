import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import OnlineMenu from "components/OnlineMenu";
import OrderList from "components/OrderList";
import FoodCategories from "components/FoodCategories";
import Login from "modals/Login";
import Service from "service/service";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";

interface Food {
  id: string;
  foodName: string;
  foodType: string;
  foodImg: string;
  description: string;
  originalPrice: number;
  categories: string[];
}

interface Cart {
  id: string;
  foodName: string;
  price: number;
  quantity: number;
  userEmail: string;
}

export default function OrderonlinePage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [foods, setFoods] = useState<Food[]>([]);
  const [displayFoods, setDisplayFoods] = useState<Food[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const user = useSelector((state: RootState) => state.auth.user);


  useEffect(() => {
    getFoodsList();
    getCartByUserEmail(user.email);
  }, [user.email]);

  const getFoodsList = async () => {
    try {
      const data = await Service.fetchAllFoods();
      setFoods(data);
      setDisplayFoods(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const filterByFoodType = (foodType: string) => {
    if (foodType === "All") {
      setDisplayFoods(foods);
    } else {
      const filtered = foods.filter((food) => food.foodType === foodType);
      setDisplayFoods(filtered);
    }
  };

  const getCartByUserEmail = async (userEmail: string) => {
    try {
      const data = await Service.fetchCartByUserEmail(userEmail);
      setCart(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  const handleAddToCart = async (foodId: string, newQuatity: number) => {
    if (!user || !user.email) {
      console.error("User is not logged in");
      return;
    }

    try {
      await Service.addToCart(user.email, foodId, newQuatity);
      console.log("Item added to cart successfully");
      getCartByUserEmail(user.email);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const increaseQuatity = (foodId: string) => {
    handleAddToCart(foodId, 1);
  };

  const decreaseQuatity = (foodId: string) => {
    handleAddToCart(foodId, -1);
  };
  const quantityOfItem = (foodName: string) => {
    const cartItem = cart.find((item) => item.foodName === foodName);
    return cartItem ? cartItem.quantity : 0;
  };

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <>
      <Helmet>
        <title>foodio - Order Online</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[103px] md:px-5 max-w-[1112px]">
          <MainNavbar openLoginModal={openLoginModal} />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[69px]">
              <Heading size="4xl" as="h1" className="!font-opensans">
                Menu
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <FoodCategories foodType={filterByFoodType} />
                <div className="flex flex-row md:flex-col justify-start  w-full gap-[46px] md:gap-5">
                  <OnlineMenu
                    displayFoods={displayFoods}
                    increaseQuatity={increaseQuatity}
                    decreaseQuatity={decreaseQuatity}
                    quantityOfItem={quantityOfItem}
                  />
                  <OrderList
                    cart={cart}
                    setCart={setCart}
                    increaseQuatity={increaseQuatity}
                    decreaseQuatity={decreaseQuatity}
                    quantityOfItem={quantityOfItem}
                    food={foods}
                  />
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
      <Login
        isOpen={isLoginModalOpen}
        closeLoginModal={closeLoginModal}
        openLoginModal={openLoginModal}
      />
    </>
  );
}
