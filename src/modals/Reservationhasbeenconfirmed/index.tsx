import React from "react";
import { Img, Text, Button, Heading } from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function Reservationhasbeenconfirmed({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1112px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full py-[33px] sm:py-5 bg-white-A700 rounded-[16px]">
            <div className="h-[705px] w-full mb-[30px] relative">
              <div className="flex flex-col items-center justify-start w-full top-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-col items-end justify-start w-full">
                  <div className="flex flex-row justify-end w-full z-[1]">
                    <div className="flex flex-col items-end justify-start w-full">
                      <div className="flex flex-row justify-between items-center w-[55%] md:w-full mr-[58px] md:mr-5">
                        <Heading size="xl" as="h1" className="!font-opensans text-center">
                          Reservation
                        </Heading>
                        <Img src="images/img_group_7736.svg" alt="image" className="h-[24px] w-[24px]" />
                      </div>
                      <div className="flex flex-row justify-end w-full mt-[45px]">
                        <div className="h-[232px] w-full relative">
                          <Img
                            src="images/img_frame_3.png"
                            alt="image_one"
                            className="justify-center h-[232px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-col items-start justify-start w-[60%] left-[6%] top-[15%] m-auto absolute">
                            <Heading size="2xl" as="h2" className="!text-white-A700">
                              Reservation has been confirmed
                            </Heading>
                            <div className="flex flex-row sm:flex-col justify-start mt-[21px] gap-4 sm:gap-5">
                              <Img
                                src="images/img_icon_confirm.svg"
                                alt="iconconfirm_one"
                                className="h-[30px] w-[30px] mb-px"
                              />
                              <Text as="p" className="!text-white-A700">
                                The confirmation result has been sent to your email
                              </Text>
                            </div>
                            <div className="flex flex-row justify-start mt-2.5 gap-4">
                              <Img
                                src="images/img_icon_booking_id.svg"
                                alt="iconbookingid"
                                className="h-[30px] w-[30px] mb-0.5"
                              />
                              <Text as="p" className="!text-white-A700">
                                Booking ID : #123456
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between items-start w-[62%] md:w-full mt-[107px] mr-8 sm:gap-10 sm:mr-5">
                        <div className="flex flex-col items-start justify-start w-[48%] sm:w-full gap-[26px]">
                          <Heading as="h3">Reservation detail</Heading>
                          <div className="flex flex-row justify-start items-center gap-5">
                            <Img src="images/img_icon_calender.svg" alt="iconcalender" className="h-[34px] w-[34px]" />
                            <Text as="p" className="!text-gray-800_01">
                              Saturday, 28 february 2022
                            </Text>
                          </div>
                          <div className="h-[28px] w-[28px] ml-0.5 md:ml-0 relative">
                            <div className="justify-center h-[28px] w-[28px] left-0 bottom-0 right-0 top-0 m-auto border-gray-900 border-2 border-solid absolute rounded-[50%]" />
                            <Img
                              src="images/img_vector_21.svg"
                              alt="vectortwentyone"
                              className="h-[12px] right-[35%] top-[20%] m-auto absolute"
                            />
                          </div>
                        </div>
                        <Button
                          color="light_blue_A700"
                          size="7xl"
                          rightIcon={<Img src="images/img_icon_modify.svg" alt="Icon Modify" />}
                          className="mt-[15px] gap-[25px] sm:mt-0 sm:px-5 min-w-[246px] rounded-[20px]"
                        >
                          Modify
                        </Button>
                      </div>
                    </div>
                  </div>
                  <Button
                    color="red_A700"
                    size="7xl"
                    rightIcon={<Img src="images/img_icon_cancel.svg" alt="Icon cancel" />}
                    className="mt-[-38px] mr-8 gap-5 sm:mr-5 sm:px-5 min-w-[246px] rounded-[20px] sm:min-w-full"
                  >
                    Cancel
                  </Button>
                </div>
                <div className="flex flex-row justify-start items-center w-[30%] md:w-full mt-[-19px] gap-5">
                  <Img src="images/img_icon_people.svg" alt="iconpeople_one" className="h-[34px] w-[34px]" />
                  <Text as="p" className="!text-gray-800_01">
                    2 people (Standar seating)
                  </Text>
                </div>
              </div>
              <Text as="p" className="bottom-[16%] left-[41%] m-auto !text-gray-800_01 absolute">
                04:30 pm
              </Text>
              <div className="flex flex-col items-center justify-start h-[330px] w-[330px] bottom-0 left-[3%] m-auto absolute">
                <div className="flex flex-col items-center justify-start h-[330px] w-[330px] p-8 sm:p-5 bg-deep_orange-200 rounded-[50%]">
                  <div className="flex flex-col items-center justify-start h-[265px] w-[265px] p-[27px] sm:p-5 bg-deep_orange-200 rounded-[132px]">
                    <Img
                      src="images/img_unsplash.png"
                      alt="unsplash_one"
                      className="h-[210px] w-[210px] md:h-auto rounded-[50%]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
