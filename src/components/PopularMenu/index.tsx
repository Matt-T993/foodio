import React from "react";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function PopularMenu() {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-[70px] md:px-5 max-w-[1112px]">
      <Heading size="3xl" as="h2" className="!font-opensans text-center">
        Our Popular Menu
      </Heading>
      <Tabs
        className="flex flex-col items-center justify-start w-full gap-[50px]"
        selectedTabClassName="!text-white-A700 bg-red-400 rounded-[16px]"
        selectedTabPanelClassName="relative tab-panel--selected"
      >
        <TabList className="flex flex-row justify-between w-full gap-[146px] p-[19px] md:gap-10">
          <Tab className="mt-1 ml-[35px] sm:ml-5 text-white-A700 text-xl font-semibold">
            All catagory
          </Tab>
          <Tab className="text-gray-900 text-xl font-normal">Dinner</Tab>
          <Tab className="text-gray-900 text-xl font-normal">Lunch</Tab>
          <Tab className="text-gray-900 text-xl font-normal">Dessert</Tab>
          <Tab className="mr-[51px] md:mr-5 text-gray-900 text-xl font-normal">
            Drink
          </Tab>
        </TabList>
        <div className="flex flex-col items-center justify-start w-full gap-12">
          {[...Array(5)].map((_, index) => (
            <TabPanel
              key={`tab-panel${index}`}
              className="items-center w-full absolute"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="justify-center w-full gap-[35px] grid-cols-3 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                    <div className="flex flex-col items-center justify-center w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngitem_41084.png"
                        alt="pngitem41084"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                          <Heading size="lg" as="h2" className="text-center">
                            Spaghetti
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h3">$12.05</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngitem_1447549.png"
                        alt="pngitem1447549"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <Heading size="lg" as="h4" className="text-center">
                            Gnocchi
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h5">$12.05</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngegg.png"
                        alt="pngegg_one"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <Heading size="lg" as="h6" className="text-center">
                            Rovioli
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h4">$12.05</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-[31px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngwing.png"
                        alt="pngwing_one"
                        className="w-[95%] md:h-auto sm:w-full mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-3.5">
                          <Heading size="lg" as="h3" className="text-center">
                            Penne Alla Vodak
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h4">$12.05</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-[30px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngitem_5290903.png"
                        alt="pngitem5290903"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                          <Heading size="lg" as="h3" className="text-center">
                            Risoto
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h4">$12.05</Heading>
                          <Button
                            size="xl"
                            className="sm:px-5 font-semibold min-w-[158px] rounded-lg"
                          >
                            Order now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full gap-[34px] p-[30px] sm:p-5 bg-white-A700 rounded-[40px]">
                      <Img
                        src="images/img_pngwing_270x270.png"
                        alt="pngwing_one"
                        className="w-[270px] md:h-auto mt-1.5 object-cover"
                      />
                      <div className="flex flex-col items-center justify-start w-full mb-1.5">
                        <div className="flex flex-col items-center justify-start w-full gap-[11px]">
                          <Heading size="lg" as="h3" className="text-center">
                            Splitza Signature
                          </Heading>
                          <Text
                            size="xs"
                            as="p"
                            className="!text-gray-800_02 text-center"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Egestas consequat mi eget auctor aliquam,
                            diam.{" "}
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
                        <div className="flex flex-row justify-between items-center w-[95%] md:w-full mt-[30px]">
                          <Heading as="h4">$12.05</Heading>
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
            </TabPanel>
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
    </div>
  );
}
