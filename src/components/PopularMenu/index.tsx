import React, { useState, useEffect } from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabList, Tab, Tabs } from "react-tabs";
import Service from "service/service";
import { Link } from "react-router-dom";

const initialFoodItems = 6;
const nextRow = 6;

interface Food {
  id: string;
  foodName: string;
  foodImg: string;
  description: string;
  originalPrice: number;
  categories: string[];
}

export default function PopularMenu() {
  const [foods, setFoods] = useState<Food[]>([]);
  const [displayFoods, setDisplayFoods] = useState<Food[]>([]);
  const [curr, setCurr] = useState(0);
  const [next, setNext] = useState(initialFoodItems);

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
  const filterRecipes = async (category: string) => {
    if (category === "All") {
      setDisplayFoods(foods);
    } else {
      const filtered = foods.filter((food) =>
        food.categories.includes(category)
      );
      setDisplayFoods(filtered);
    }
  };

  const nextFoods = () => {
    setCurr(curr + nextRow);
    setNext(next + nextRow);
  };

  const prevFoods = () => {
    setCurr(curr - nextRow);
    setNext(next - nextRow);
  };
  useEffect(() => {
    getFoodsList();
  }, []);
  return (
    <>
      <Heading size="3xl" as="h2" className="!font-opensans text-center">
        Our Popular Menu
      </Heading>
      <Tabs
        className="flex flex-col items-center w-full gap-[50px]"
        selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
        selectedTabPanelClassName="relative tab-panel--selected"
      >
        <TabList className="flex flex-row justify-between w-full ">
          <Tab
            onClick={() => filterRecipes("All")}
            className="text-gray-900 text-lg font-semibold ml-2 sm:text-sm px-1 "
          >
            All category
          </Tab>
          <Tab
            onClick={() => filterRecipes("dinner")}
            className="text-gray-900 text-lg font-normal sm:text-sm px-1"
          >
            Dinner
          </Tab>
          <Tab
            onClick={() => filterRecipes("lunch")}
            className="text-gray-900 text-lg font-normal sm:text-sm px-1 "
          >
            Lunch
          </Tab>
          <Tab
            onClick={() => filterRecipes("dessert")}
            className="text-gray-900 text-lg font-normal sm:text-sm px-1"
          >
            Dessert
          </Tab>
          <Tab
            onClick={() => filterRecipes("drinks")}
            className="text-gray-900 text-lg font-normal mr-2 sm:mr-5 sm:text-sm px-1 "
          >
            Drinks
          </Tab>
        </TabList>
        <div className="flex flex-wrap">
          {displayFoods?.slice(curr, next)?.map((food) => (
            <div className="w-1/3 md:w-1/2 sm:w-full p-4" key={food.id}>
              <div className="flex flex-col items-center justify-start w-full bg-white-A700 rounded-[40px] p-[30px] sm:p-5 gap-[34px]">
                <Img
                  src={`images/menuImg/${food.foodImg}`}
                  alt={food.foodName}
                  className="w-[270px] h-[270px] object-contain mt-1.5"
                />
                <div className="flex flex-col items-center justify-start w-full mb-1.5">
                  <Heading size="md" as="h2" className="text-center">
                    {food.foodName}
                  </Heading>
                  <Text
                    size="xs"
                    as="p"
                    className="!text-gray-800_02 text-center"
                  >
                    {food.description}
                  </Text>
                  <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f54748"
                    activeColor="#f54748"
                    size={24}
                    className="mt-[13px] rounded-[1px]"
                  />
                  <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px] md:flex-col">
                    <Heading as="h3">${food.originalPrice.toFixed(2)}</Heading>
                    <Link to="/orderonline">
                    <Button
                      size="xl"
                      className="sm:px-5 font-semibold min-w-[158px] rounded-lg hover:bg-red-700 transition-all duration-300"
                    >
                      Order now
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      </Tabs>
    </>
  );
}
