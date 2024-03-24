import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ReservationPage() {
  return (
    <>
      <Helmet>
        <title>foodie</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[91px] md:px-5 max-w-[1112px]">
          <header className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="h-[51px]"
            />
            <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
              <Text
                size="s"
                as="p"
                className="mt-px sm:mt-0 !text-gray-900_a2 !font-opensans opacity-0.8"
              >
                Home
              </Text>
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
              <div className="flex flex-col items-start justify-start w-[16%] sm:w-full gap-[3px]">
                <Text size="s" as="p" className="!text-red-400 !font-opensans">
                  Reservation
                </Text>
                <div className="h-px w-[53%] bg-red-400" />
              </div>
              <a href="#" className="mt-px sm:mt-0">
                <Text
                  size="s"
                  as="p"
                  className="!text-gray-900_cc !font-opensans"
                >
                  Contact us
                </Text>
              </a>
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
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <Img
                src="images/img_rectangle_150.png"
                alt="image"
                className="w-[50%] md:w-full md:h-[657px] object-cover rounded-[20px]"
              />
              <div className="flex flex-col items-start justify-start w-[43%] md:w-full gap-11">
                <Heading size="4xl" as="h1" className="!font-opensans">
                  Book a table
                </Heading>
                <div className="flex flex-col items-center justify-start sm:w-full gap-10">
                  <SelectBox
                    shape="round"
                    name="date"
                    placeholder="Date"
                    options={dropDownOptions}
                    className="w-full border-gray-400 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    name="time"
                    placeholder="Time"
                    options={dropDownOptions}
                    className="w-full border-gray-400 border border-solid"
                  />
                  <SelectBox
                    shape="round"
                    name="partysize"
                    placeholder="Party size"
                    options={dropDownOptions}
                    className="w-full border-gray-400 border border-solid"
                  />
                </div>
                <Button
                  size="8xl"
                  className="w-full sm:px-5 font-semibold rounded-[20px]"
                >
                  Book now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
