import React from "react";
import { Text, Heading, Button, TextArea, SelectBox, Img, Input } from "../../components";
import { default as ModalProvider } from "react-modal";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
  isOpen: boolean;
}

export default function EnterDetailsReservation({ isOpen, ...props }: Props) {
  return (
    <ModalProvider {...props} appElement={document.getElementById("root")} isOpen={isOpen} className="min-w-[1112px]">
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full p-10 sm:p-5 bg-white-A700 rounded-[16px]">
          <div className="flex flex-col items-center justify-start w-[97%] mb-5 gap-3.5 mx-5">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-col items-end justify-start w-full gap-[27px]">
                <div className="flex flex-row justify-between items-start w-[61%] md:w-full">
                  <Heading size="xl" as="h1" className="mt-[15px] !font-opensans text-center">
                    Reservation
                  </Heading>
                  <Img src="images/img_group_7736.svg" alt="image" className="h-[20px] w-[20px]" />
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[47px]">
                  <div className="flex flex-row justify-center w-full">
                    <Text
                      as="p"
                      className="flex justify-center items-center w-full h-[64px] px-[35px] py-[17px] sm:px-5 !text-black-900 bg-light_blue-A100 rounded-[20px]"
                    >
                      <span className="text-gray-800_01">
                        Due to limited availability, we can hold this table for you for
                      </span>
                      <span className="text-black-900"></span>
                      <span className="text-gray-900 font-semibold">5:00 minutes</span>
                    </Text>
                  </div>
                  <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                    <div className="flex flex-col items-start justify-start w-[48%] md:w-full gap-[22px]">
                      <Heading as="h2" className="!text-black-900">
                        Data order
                      </Heading>
                      <Input
                        size="sm"
                        shape="round"
                        type="text"
                        name="firstName"
                        placeholder="First name"
                        className="w-full sm:w-full"
                      />
                      <Input
                        size="sm"
                        shape="round"
                        type="text"
                        name="lastName"
                        placeholder="Last name"
                        className="w-full sm:w-full"
                      />
                      <Input
                        size="sm"
                        shape="round"
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone number"
                        prefix={<Img src="images/img_group_94dropdown.svg" alt="Group 94:Dropdown " />}
                        className="w-full sm:w-full gap-4"
                      />
                      <Input
                        size="sm"
                        shape="round"
                        type="email"
                        name="email"
                        placeholder="Email address"
                        className="w-full sm:w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start justify-start w-[44%] md:w-full gap-6 p-[34px] sm:p-5 bg-blue_gray-100_01 rounded-[20px]">
                      <div className="flex flex-col items-start justify-start w-[94%] md:w-full gap-8">
                        <div className="flex flex-row justify-start ml-[5px] md:ml-0">
                          <Heading as="h3">Reservation detail</Heading>
                        </div>
                        <div className="flex flex-row justify-between items-center w-full">
                          <Img src="images/img_icon_calender.svg" alt="iconcalender" className="h-[34px] w-[34px]" />
                          <Text as="p" className="!text-gray-800_01">
                            Saturday, 28 february 2022
                          </Text>
                        </div>
                        <div className="flex flex-row justify-start w-[49%] md:w-full">
                          <div className="flex flex-row justify-between items-center w-full">
                            <Img
                              src="images/img_icon_time.svg"
                              alt="icontime_one"
                              className="h-[34px] w-[34px] mb-px"
                            />
                            <Text as="p" className="!text-gray-800_01">
                              04:30 pm
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-between items-center w-[95%] md:w-full">
                        <Img src="images/img_icon_people.svg" alt="iconpeople_one" className="h-[34px] w-[34px]" />
                        <Text as="p" className="!text-gray-800_01">
                          2 people (Standar seating)
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-between items-start w-[99%] md:w-full md:gap-10">
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full mt-[9px] gap-6 md:mt-0">
                <SelectBox
                  size="xs"
                  indicator={<Img src="images/img_rectangle_21.svg" alt="Rectangle 21" />}
                  name="selectan"
                  placeholder="Select an occasion"
                  options={dropDownOptions}
                  className="w-full gap-px border-gray-400 border border-solid rounded-lg"
                />
                <TextArea
                  size="sm"
                  shape="round"
                  name="groupseventynin"
                  placeholder="Add a special request"
                  className="w-full sm:pb-5 sm:pr-5 text-gray-500"
                />
                <Button size="2xl" className="w-full sm:px-5 rounded-lg">
                  Confirm reservation
                </Button>
              </div>
              <div className="flex flex-col items-start justify-start w-[42%] md:w-full gap-10">
                <Heading as="h4" className="!text-black-900">
                  Restaurant informations
                </Heading>
                <Text as="p" className="!text-gray-800_01">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}
