import React, { useState, useEffect } from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import Service from "service/service";

const initialFoodItems = 6
const nextRow = 6

export default function PopularMenu() {
  const[foods, setFoods] = useState([])
  const [next, setNext] = useState(initialFoodItems)

  const handleMoreFoodItems = () => {
    setNext(next + nextRow)
  }
  const getFoodsList = async () => {
    try {
      const data = await Service.fetchAllFoods()
      setFoods(data)
      console.log(data)
    } catch (err) {
      console.error(err);
    };
  }
  useEffect(() => {
    getFoodsList()
  },[])
  return (
    <>
      <Heading size="3xl" as="h2" className="!font-opensans text-center">
        Our Popular Menu
      </Heading>
      <Tabs
        className="flex flex-col items-center  w-full gap-[50px]"
        selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
        selectedTabPanelClassName="relative tab-panel--selected"
      >
        <TabList className="flex flex-row justify-between w-full ">
          <Tab className="text-gray-900 text-lg font-semibold ml-2 sm:text-sm px-1 ">
            All category
          </Tab>
          <Tab className="text-gray-900 text-lg font-normal sm:text-sm px-1">
            Dinner
          </Tab>
          <Tab className="text-gray-900 text-lg font-normal sm:text-sm px-1 ">
            Lunch
          </Tab>
          <Tab className="text-gray-900 text-lg font-normal sm:text-sm px-1">
            Dessert
          </Tab>
          <Tab className="text-gray-900 text-lg font-normal mr-2 sm:mr-5 sm:text-sm px-1 ">
            Drink
          </Tab>
        </TabList>

        <div className="flex flex-col items-center justify-start w-full gap-12">
        {foods?.slice(0, next)?.map((food) => (
   
              <div key={food.id} className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-[35px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <div className="flex flex-col items-center justify-center w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src={`images/menuImg/${food.foodImg}`}
                        alt="pngitem41084"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                          <Heading size="lg" as="h2" className="text-center">
                            {food.foodName}
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            {food.description}
                          </Text>
                        </div>
                        <RatingBar
                          value={5}
                          isEditable={true}
                          color="#f54748"
                          activeColor="#f54748"
                          size={24}
                          className="flex justify-between mt-[13px] rounded-[1px]"
                        />
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px] md:flex-col">
                          <Heading as="h3">${food.originalPrice}</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      
          ))}
          
          
          <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-2.5">
            <Img
              src="images/img_arrow_left.svg"
              alt="arrowleft_one"
              className="h-[15px] w-[15px]"
            />
            <div className="flex flex-row justify-between w-[71%]">
              <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                <Button
                  color="gray_900"
                  size="sm"
                  className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                >
                  1
                </Button>
              </div>
              <div className="flex flex-row w-[48%] gap-2.5">
                <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                  <Button
                    color="gray_200"
                    size="sm"
                    className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                  >
                    2
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                  <Button
                    color="gray_200"
                    size="sm"
                    className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                  >
                    3
                  </Button>
                </div>
              </div>
              <Button color="gray_200" size="xs" className="w-[35px] rounded">
                <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
              </Button>
            </div>
            <Img
              src="images/img_akar_icons_chevron_left.svg"
              alt="akaricons_one"
              className="h-[15px] w-[15px]"
            />
          </div>
        </div>
      </Tabs>
    </>
  );
}
