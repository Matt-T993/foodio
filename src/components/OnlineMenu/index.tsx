import React, { useEffect, useState } from "react";
import { Img,Text, Heading, RatingBar } from "../../components";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import Service from "service/service";

interface Food {
  id: string;
  foodName: string;
  foodType: string;
  foodImg: string;
  description: string;
  originalPrice: number;
  categories: string[];
}

interface IOnlineMenu {
  displayFoods: Food[];
}
const initialFoodItems = 9;
// const nextRow = 9;

export default function OnlineMenu({displayFoods}:IOnlineMenu) {
  const [curr, setCurr] = useState(0);
  const [next, setNext] = useState(initialFoodItems);
  const [cart, setCart] = useState([])
  const user = useSelector((state: RootState) => state.auth.user);

  // const nextFoods = () => {
  //   setCurr(curr + nextRow);
  //   setNext(next + nextRow);
  // };
 
  // const prevFoods = () => {
  //   setCurr(curr - nextRow);
  //   setNext(next - nextRow);
  // };

  const getCartByUserEmail = async (userEmail: string) => {
    try {
      const data = await Service.fetchCartByUserEmail(userEmail);
      setCart(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }

  }


  useEffect(() => {
      getCartByUserEmail(user.email);
    },[user.email]);

  const handleAddToCart = async (foodId: string, newQuatity: number) => {
    if (!user || !user.email) {
      console.error("User is not logged in");
      return;
    }

    try {
      await Service.addToCart(user.email, foodId, newQuatity );
      console.log("Item added to cart successfully");
      getCartByUserEmail(user.email);
    } catch (error) {
      console.error("Error adding item to cart:", error);
    }
  };

  const increaseQuatity = (foodId: string) => {
    handleAddToCart(foodId, 1 )
  }

  const decreaseQuatity = (foodId: string) => {
    handleAddToCart(foodId, -1)

  }
  const quantityOfItem = (foodName: string) => {
    const cartItem = cart.find((item) => item.foodName === foodName);
    return cartItem ? cartItem.quantity : 0;
  };



  return (
    <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-12 md:items-center">
      <div className="flex flex-col items-start justify-start gap-2.5">
        <Heading size="lg" as="h2">
          PASTA
        </Heading>
        <div className="h-[2px] w-full bg-red-400" />
      </div>
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="justify-center w-full gap-[30px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
          {displayFoods?.slice(curr, next)?.map((food) => (
            <div key={food.id} className="flex flex-col items-center justify-start w-full p-5 bg-white-A700 rounded-[45px]">
              <div className="flex flex-row justify-center items-center h-[173px] w-[173px]">
                <Img
                  src={`images/menuImg/${food.foodImg}`}
                  alt="spaghetti_one"
                  className="h-[173px] w-[173px] md:h-auto rounded-[50%] object-contain"
                />
              </div>
              <Heading size="s" as="h3" className="mt-[21px] text-center">
                {food.foodName}
              </Heading>
              <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={15}
                className="flex justify-between mt-1 rounded-[1px]"
              />
              <Text
                size="xs"
                as="p"
                className="w-[94%] mt-[11px] !text-gray-800_01 text-center"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
                consequat
              </Text>
              <Heading size="xs" as="h4" className="mt-[22px]">
                ${food.originalPrice.toFixed(2)}
              </Heading>
              <div className="flex flex-row justify-center w-[66%] md:w-full mt-2.5">
                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start h-[33px] w-[33px]">
                    <div className="flex flex-col items-enter justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px] hover:bg-red-100 transition-all duration-300"
                       onClick={() => decreaseQuatity(food.id)}>
                      <Img
                        src="images/img_vector_25.svg"
                        alt="image"
                        className="h-px"
                      />
                    </div>
                  </div>
                  <Text as="p" className="!text-gray-900 !text-[16.62px]">
                    {quantityOfItem(food.foodName)}
                  </Text>
                  <div className="flex flex-col items-center justify-center h-[33px] w-[33px] bg-white-A700 shadow-sm rounded-[16px] hover:bg-green-100 transition-all duration-300"
                     onClick={() => increaseQuatity(food.id)}>
                    <Img
                      src="images/img_group_7721.svg"
                      alt="image_one"
                      className=" flex h-[10px] w-[10px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
}
