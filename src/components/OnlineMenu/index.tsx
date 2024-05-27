import React, { useState } from "react";
import { Img, Text, Heading, RatingBar, Button } from "../../components";

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
  increaseQuatity: (foodId: string) => void;
  decreaseQuatity: (foodId: string) => void;
  quantityOfItem: (foodName: string) => number;
  activeFoodType: string;
}

const initialFoodItems = 9;
const nextRow = 9;

export default function OnlineMenu({
  displayFoods,
  increaseQuatity,
  decreaseQuatity,
  quantityOfItem,
  activeFoodType
}: IOnlineMenu) {
  const [curr, setCurr] = useState(0);
  const [next, setNext] = useState(initialFoodItems);


  const nextFoods = () => {
    setCurr(curr + nextRow);
    setNext(next + nextRow);
  };

  const prevFoods = () => {
    setCurr(curr - nextRow);
    setNext(next - nextRow);
  };
  return (
    <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-12 md:items-center">
      <div className="flex flex-col items-start justify-start gap-2.5">
        <Heading size="lg" as="h2">
          {activeFoodType}
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
      <div className="flex flex-row justify-center w-full items-center     ">
                  <div className="flex flex-row gap-10">
                    <Button
                      onClick={prevFoods}
                      disabled={curr <= 0}
                      color="blue_gray_100_02"
                      size="sm"
                      className={`tracking-[-0.50px] font-inter font-semibold min-w-[80px] rounded transition-all duration-300 
             ${
               curr <= 0
                 ? "bg-gray-400 cursor-not-allowed"
                 : "bg-blue-500 hover:bg-blue-700 cursor-pointer"
             }`}
                    >
                      Prev
                    </Button>
                    <Button
                      onClick={nextFoods}
                      disabled={next >= displayFoods.length}
                      color="blue_gray_100_02"
                      size="sm"
                      className={`tracking-[-0.50px] font-inter font-semibold min-w-[80px] rounded transition-all duration-300 
             ${
               next >= displayFoods.length
                 ? "bg-gray-400 cursor-not-allowed"
                 : " bg-blue-500 hover:bg-blue-700 cursor-pointer"
             }`}
                    >
                      Next
                    </Button>
                  </div>
                </div>
    </div>
  );
}
