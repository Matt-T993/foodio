import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Heading, Img, Text } from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";

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
          <MainNavbar />
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
