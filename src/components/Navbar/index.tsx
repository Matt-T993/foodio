import React from "react";
import { Text, Button, Img } from "../../components";

export default function Navbar() {
  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-[83%] md:gap-10">
      <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
      <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
        <div className="flex flex-col items-center justify-start w-[9%] sm:w-full gap-[3px]">
          <Text size="s" as="p" className="!text-red-400 !font-opensans">
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
        <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
          About us
        </Text>
        <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
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
            <Text size="s" as="p" className="!text-gray-900_cc !font-opensans">
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
  );
}
