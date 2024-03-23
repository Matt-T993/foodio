import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img, RatingBar } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function HomepagePage() {
  return (
    <>
      <Helmet>
        <title>foodie</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[129px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[70px] p-[50px] md:p-5 bg-gradient">
            <header className="flex flex-row md:flex-col justify-between items-center w-[83%] md:gap-10">
              <Img
                src="images/img_logo.svg"
                alt="logo_one"
                className="h-[51px]"
              />
              <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
                <div className="flex flex-col items-center justify-start w-[9%] sm:w-full gap-[3px]">
                  <Text
                    size="s"
                    as="p"
                    className="!text-red-400 !font-opensans"
                  >
                    Home
                  </Text>
                  <div className="h-px w-full bg-red-400" />
                </div>
                <Text
                  size="s"
                  as="p"
                  className="mt-px sm:mt-0 !text-gray-900_cc !font-opensans"
                >
                  Menu
                </Text>
                <Text
                  size="s"
                  as="p"
                  className="!text-gray-900_cc !font-opensans"
                >
                  About us
                </Text>
                <Text
                  size="s"
                  as="p"
                  className="!text-gray-900_cc !font-opensans"
                >
                  Order online
                </Text>
                <Text
                  size="s"
                  as="p"
                  className="mt-px sm:mt-0 !text-gray-900_cc !font-opensans"
                >
                  Reservation
                </Text>
                <div className="flex flex-row justify-center">
                  <a href="#">
                    <Text
                      size="s"
                      as="p"
                      className="!text-gray-900_cc !font-opensans"
                    >
                      Contact us
                    </Text>
                  </a>
                </div>
              </div>
              <div className="flex flex-row justify-start gap-[25px]">
                <Button
                  color="white_A700"
                  size="lg"
                  shape="circle"
                  className="w-[50px]"
                >
                  <Img src="images/img_group_103.svg" />
                </Button>
                <Button
                  size="md"
                  shape="round"
                  className="sm:px-5 font-semibold min-w-[112px]"
                >
                  Log in
                </Button>
              </div>
            </header>
            <div className="flex flex-row md:flex-col justify-between items-center w-full mb-5 md:gap-10 max-w-[1240px]">
              <div className="flex flex-row justify-center w-[47%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Heading
                    size="4xl"
                    as="h1"
                    className="flex !text-gray-900_02 !font-opensans"
                  >
                    <span className="text-gray-900_02">
                      <>
                        Best Restaurant
                        <br />
                        In{" "}
                      </>
                    </span>
                    <span className="text-red-400">Town.</span>
                  </Heading>
                  <Text as="p" className="w-[91%] mt-[15px] !text-gray-800">
                    We provide best food in town, we provide home delivery and
                    dine in services.
                  </Text>
                  <div className="flex flex-row sm:flex-col justify-start mt-9 gap-6 sm:gap-5">
                    <Button
                      size="5xl"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[232px]"
                    >
                      Order now
                    </Button>
                    <Button
                      color="red_400_19"
                      size="5xl"
                      shape="round"
                      className="sm:px-5 font-semibold min-w-[232px]"
                    >
                      Reservation
                    </Button>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_illustration.png"
                alt="illustration"
                className="w-[48%] md:w-full md:h-[502px] object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row md:flex-col justify-center items-start w-full gap-[13px] p-3.5 bg-green-50">
            <div className="h-[646px] w-[48%] md:w-full ml-[149px] md:ml-5 relative">
              <div className="flex flex-col items-end justify-start w-[89%] bottom-0 left-0 m-auto absolute">
                <div className="flex flex-row sm:flex-col justify-end items-center w-full sm:gap-5">
                  <Img
                    src="images/img_kisspng_leaf_pe.png"
                    alt="kisspngleafpe"
                    className="w-[32%] md:h-auto sm:w-full z-[1] object-cover"
                  />
                  <Img
                    src="images/img_kindpng_3443995.png"
                    alt="kindpng3443995"
                    className="w-[96%] md:h-auto sm:w-full ml-[-160px] sm:ml-0 object-cover"
                  />
                </div>
                <Img
                  src="images/img_kisspng_leaf_pe_117x110.png"
                  alt="kisspngleafpe"
                  className="w-[19%] md:h-auto sm:w-full mt-[-74px] mr-[217px] md:mr-5 object-cover"
                />
              </div>
              <Img
                src="images/img_kisspng_leaf_pe_158x154.png"
                alt="kisspngleafpe"
                className="h-[158px] w-[24%] sm:w-full right-0 top-0 m-auto object-cover absolute"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[31%] md:w-full mt-[91px] mr-[149px] gap-[35px] md:mt-0 md:mr-5">
              <div className="flex flex-col items-start justify-start w-full gap-4">
                <Heading
                  size="3xl"
                  as="h2"
                  className="flex w-[80%] !text-red-400 !font-tinos !leading-[110%]"
                >
                  <span className="text-gray-900_02 font-opensans">
                    <>
                      Our Most <br />
                      Popular{" "}
                    </>
                  </span>
                  <span className="text-red-400 font-opensans">Dish.</span>
                </Heading>
                <Text as="p" className="!text-gray-800_01">
                  This dish is full of flavor and nutrition! Quinoa is a
                  complete protein, providing all the essential amino acids your
                  body needs, and is also a good source of fiber.
                </Text>
              </div>
              <Button
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold min-w-[232px] sm:min-w-full"
              >
                Order now
              </Button>
            </div>
          </div>
        </div>
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
                              <Heading
                                size="lg"
                                as="h2"
                                className="text-center"
                              >
                                Spaghetti
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                              <Heading
                                size="lg"
                                as="h4"
                                className="text-center"
                              >
                                Gnocchi
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                              <Heading
                                size="lg"
                                as="h6"
                                className="text-center"
                              >
                                Rovioli
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Penne Alla Vodak
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Risoto
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                              <Heading
                                size="lg"
                                as="h3"
                                className="text-center"
                              >
                                Splitza Signature
                              </Heading>
                              <Text
                                size="xs"
                                as="p"
                                className="!text-gray-800_02 text-center"
                              >
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Egestas consequat mi eget
                                auctor aliquam, diam.{" "}
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
                  <Button
                    color="gray_200"
                    size="xs"
                    className="w-[35px] rounded"
                  >
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
        <div className="flex flex-row justify-center w-full md:px-5 max-w-[1112px]">
          <div className="flex flex-col items-center justify-start w-full">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              Our Popular Chef
            </Heading>
            <div className="flex flex-row md:flex-col w-full mt-[53px] gap-10">
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-gray-900_04 rounded-[50px]">
                    <Img
                      src="images/img_image_1.png"
                      alt="imageone_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h3">Betran Komar</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Head chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full pt-2 bg-gradient1 rounded-[50px]">
                      <Img
                        src="images/img_image_3.png"
                        alt="imagethree_one"
                        className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                      />
                    </div>
                  </div>
                </div>
                <Heading as="h4">Ferry Sauwi</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Chef
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[31%] md:w-full gap-[43px]">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full bg-lime-900 rounded-[50px]">
                    <Img
                      src="images/img_image_2.png"
                      alt="imagetwo_one"
                      className="w-full md:h-auto sm:w-full object-cover rounded-[50px]"
                    />
                  </div>
                </div>
                <Heading as="h5">Iswan Dracho</Heading>
                <Text size="lg" as="p" className="!text-gray-500_01">
                  Chef
                </Text>
              </div>
            </div>
            <Button
              size="5xl"
              shape="round"
              className="mt-[89px] sm:px-5 font-semibold min-w-[235px] sm:min-w-full"
            >
              View all
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-[43px]">
          <div className="flex flex-row justify-center w-full md:px-5 max-w-[648px]">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              What Our Customers Say
            </Heading>
          </div>
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-center items-center w-full md:gap-5">
              <div className="flex flex-col items-center justify-start h-[60px] w-[60px] z-[1]">
                <Button
                  color="white_A700"
                  shape="circle"
                  className="w-[60px] shadow-xs"
                >
                  <Img src="images/img_group_30.svg" />
                </Button>
              </div>
              <div className="flex flex-row md:flex-col justify-center items-center w-[97%] md:w-full ml-[-30px] md:gap-5 md:ml-0">
                <div className="flex flex-row justify-center w-[97%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-4 p-[50px] md:p-5 bg-white-A700 rounded-[16px]">
                    <div className="flex flex-row justify-center w-[97%] md:w-full">
                      <div className="flex flex-row justify-center w-full">
                        <div className="h-[198px] w-full relative">
                          <Img
                            src="images/img_group_7730.svg"
                            alt="image"
                            className="justify-center h-[198px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                          />
                          <Text
                            as="p"
                            className="w-[87%] bottom-[16%] right-0 left-0 m-auto !text-gray-800_01 text-center absolute"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Facilisis ultricies at eleifend proin. Congue
                            nibh nulla malesuada ultricies nec quam{" "}
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[43%] md:w-full gap-2">
                      <Img
                        src="images/img_ellipse_28.png"
                        alt="circleimage"
                        className="h-[80px] w-[80px] md:h-auto rounded-[50%]"
                      />
                      <div className="flex flex-col items-center justify-start w-[67%] gap-2">
                        <Heading size="s" as="h2" className="text-center">
                          Starla Virgoun
                        </Heading>
                        <Text
                          size="s"
                          as="p"
                          className="!text-gray-800_01 text-center"
                        >
                          Financial advisor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[60px] w-[60px] ml-[-30px] md:ml-0">
                  <Button
                    color="white_A700"
                    shape="circle"
                    className="w-[60px] shadow-sm"
                  >
                    <Img src="images/img_group_32.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center w-full px-14 py-[93px] md:p-5 bg-red-100 max-w-[1112px] rounded-[24px]">
          <div className="flex flex-col items-center justify-start w-[71%] mt-[7px] gap-10 mx-[109px] md:mx-5">
            <Heading size="3xl" as="h2" className="!font-opensans text-center">
              Hungry? We are open now..
            </Heading>
            <div className="flex flex-row sm:flex-col justify-start w-[70%] md:w-full gap-6 sm:gap-5">
              <Button
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold min-w-[232px]"
              >
                Order now
              </Button>
              <Button
                color="white_A700_7f"
                size="5xl"
                shape="round"
                className="sm:px-5 font-semibold min-w-[232px]"
              >
                Reservation
              </Button>
            </div>
          </div>
        </div>
        <footer className="flex justify-center items-center w-full px-14 py-[70px] md:p-5 bg-gray-900_01">
          <div className="flex flex-row justify-center w-full mb-0.5 mx-auto max-w-[1113px]">
            <div className="flex flex-col items-center justify-center w-full gap-[61px]">
              <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                <div className="flex flex-row justify-center w-[32%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full gap-[42px]">
                    <Img
                      src="images/img_logo_red_400.svg"
                      alt="logo_three"
                      className="h-[51px]"
                    />
                    <Text as="p">
                      Viverra gravida morbi egestas facilisis tortor netus non
                      duis tempor.{" "}
                    </Text>
                    <div className="flex flex-row justify-between w-[69%] md:w-full ml-[3px] md:ml-0">
                      <Button
                        color="gray_300"
                        shape="circle"
                        className="w-[60px]"
                      >
                        <Img src="images/img_group_53.png" />
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        shape="circle"
                        className="w-[60px]"
                      >
                        <Img src="images/img_instagram.png" />
                      </Button>
                      <Button
                        color="blue_gray_100_02"
                        shape="circle"
                        className="w-[60px]"
                      >
                        <Img src="images/img_group_51.png" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[12%] md:w-full mt-[9px] gap-[31px] md:mt-0">
                  <Heading as="h4" className="!text-red-400">
                    Page
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                    <Text as="p">Home</Text>
                    <Text as="p">Menu</Text>
                    <Text as="p">Order online</Text>
                    <Text as="p">Catering</Text>
                    <Text as="p">Reservation</Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[14%] md:w-full mt-[5px] gap-[35px] md:mt-0">
                  <Heading as="h4" className="!text-red-400">
                    Information
                  </Heading>
                  <div className="flex flex-col items-start justify-start gap-6">
                    <Text as="p">About us</Text>
                    <Text as="p">Testimonial</Text>
                    <Text as="p">Event</Text>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[26%] md:w-full mt-[5px] gap-[31px] md:mt-0">
                  <Heading as="h4" className="!text-red-400">
                    Get in touch
                  </Heading>
                  <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                    <Text as="p" className="!leading-[153%]">
                      2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                    </Text>
                    <a
                      href="mailto:abc@example.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* <Text size="xl" as="p" className="text-xl">
                        abc@example.com
                      </Text> */}
                    </a>
                    <Text as="p">+123 4567 8901</Text>
                  </div>
                </div>
              </div>
              <Text as="p" className="flex !text-gray-300">
                <span className="text-gray-300">Copyright </span>
                <span className="text-gray-300">©</span>
                <span className="text-gray-300">2022</span>
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
