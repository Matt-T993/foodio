import React, { useState } from "react";
import {
  Text,
  Heading,
  Button,
  TextArea,
  SelectBox,
  Img,
  Input,
} from "../../components";
import { default as ModalProvider } from "react-modal";
import { CloseSVG } from "assets/images";
import Reservationhasbeenconfirmed from "modals/Reservationhasbeenconfirmed";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
interface Props {
  className?: string;
  isOpen: boolean;
  closeModal: () => void;
}

export default function EnterDetailsReservation({
  isOpen,
  closeModal,
  ...props
}: Props) {
  const [isconfirmRSVPModal, setConfirmRSVPModal] = useState<boolean>(false);

  // Handler to open the modal
  const openConfirmRSVPModal = () => {
    setConfirmRSVPModal(true);
  };

  // Handler to close the modal
  const closeConfirmRSVPModal = () => setConfirmRSVPModal(false);
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className=" relative w-full md:w-[70%] sm:w-[90%] max-w-[1112px] h-[85%] bg-white-A700 rounded border-2"
    >
      <Heading
        size="xl"
        as="h1"
        className="mt-[15px] !font-opensans text-center"
      >
        Reservation
      </Heading>
      <div className=" mt-4 flex flex-row justify-center w-[95%] mx-auto">
        <Text
          as="p"
          className="flex justify-center items-center w-full h-[64px] px-[35px] py-[17px] sm:px-5 !text-black-900 bg-light_blue-A100 rounded-[20px]"
        >
          <p className="text-gray-800_01">
            Due to limited availability, we can hold this table for you for{" "}
            <span className="text-gray-900 font-semibold">5:00 minutes</span>
          </p>
        </Text>
      </div>

      <div className=" relative flex flex-row justify-between md:justify-center  md:flex-col w-full h-full ">
        <div className="w-[50%] flex flex-col md:w-full px-6 mt-3 md:mt-0">
          <div className="flex flex-col items-start justify-start w-[100%] md:w-full gap-[20px]">
            <Heading as="h2" className="!text-black-900">
              Enter Details
            </Heading>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-full sm:w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-full sm:w-full"
            />
            <input
              type="number"
              name="phoneNumber"
              placeholder="Phone number"
              className="w-full sm:w-full gap-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full sm:w-full"
            />
            <SelectBox
              size="xs"
              indicator={
                <Img src="images/img_rectangle_21.svg" alt="Rectangle 21" />
              }
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
            <Button
              onClick={openConfirmRSVPModal}
              size="2xl"
              className="w-full sm:px-5 rounded-lg"
            >
              Confirm reservation
            </Button>
          </div>
        </div>
        <div className="w-[50%] mt-3 flex flex-col md:w-full md:hidden">
          <div className="flex flex-col w-[80%] mx-auto bg-blue_gray-100_01 rounded-xl px-3 gap-[20px] py-6">
            <Heading as="h2" className="!text-black-900 text-center">
              Reservation Detail
            </Heading>

            <div className="ml-4 flex flex-row justify items-center w-full">
              <Img
                src="images/img_icon_calender.svg"
                alt="iconcalender"
                className="h-[34px] w-[34px] mr-8 "
              />
              <Text as="p" className="!text-gray-800_01">
                Saturday, 28 february 2022
              </Text>
            </div>
            <div className="ml-4 flex flex-row justify items-center w-full">
              <Img
                src="images/img_icon_time.svg"
                alt="icontime_one"
                className="h-[34px] w-[34px] mr-8 mb-px"
              />
              <Text as="p" className="!text-gray-800_01">
                04:30 pm
              </Text>
            </div>
            <div className="ml-4 flex flex-row justify items-center w-full">
              <Img
                src="images/img_icon_people.svg"
                alt="iconpeople_one"
                className="h-[34px] w-[34px] mr-8"
              />
              <Text as="p" className="!text-gray-800_01">
                2 people (Standar seating)
              </Text>
            </div>
          </div>
        </div>
      </div>
      <CloseSVG
        className="absolute right-3 top-6 cursor-pointer"
        onClick={closeModal}
      />
      <Reservationhasbeenconfirmed
        isOpen={isconfirmRSVPModal}
        closeConfirmModal={closeConfirmRSVPModal}
      />
    </ModalProvider>
  );
}
