import React from "react";
import { Heading, Button } from "../../components";

export default function RSVP() {
  return (
    <div className="flex flex-row justify-center w-full px-14 py-[93px] md:p-5 bg-red-100 max-w-[1112px] rounded-[24px]">
      <div className="flex flex-col items-center justify-start w-[71%] mt-[7px] gap-10 mx-[109px] md:mx-5">
        <Heading size="3xl" as="h2" className="!font-opensans text-center">
          Hungry? We are open now..
        </Heading>
        <div className="flex flex-row sm:flex-col justify-start w-[70%] md:w-full gap-6 sm:gap-5">
          <Button
            size="5xl"
            shape="round"
            className="sm:px-5 font-semibold min-w-[232px] hover:bg-white-A700 hover:text-red-400 transition-all duration-300 "
          >
            Order now
          </Button>
          <Button
            color="white_A700_7f"
            size="5xl"
            shape="round"
            className="sm:px-5 font-semibold min-w-[232px]  hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
          >
            Reservation
          </Button>
        </div>
      </div>
    </div>
  );
}
