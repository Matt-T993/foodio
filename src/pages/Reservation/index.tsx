import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import Booking from "components/Booking";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function ReservationPage() {
  return (
    <>
      <Helmet>
        <title>foodie - Reservation</title>
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
                className="w-[50%] md:w-full md:h-[657px] object-cover rounded-[20px] sm:object-contain"
              />
              <Booking />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
