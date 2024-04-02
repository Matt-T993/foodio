import React from "react";
import { Text, Img, Button } from "../../components";
import { Link } from "react-router-dom";

export default function MainNavbar() {
  const linkStyle =
    "!font-opensans hover:!text-red-400 transition-all duration-300";

  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
      <Link to="/" className="group">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
      </Link>
      <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
        <Link to="/" className="group">
          <Text size="s" as="p" className={`text-gray-900_cc ${linkStyle}`}>
            Home
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>

        <Link to="/menu" className="group">
          <Text size="s" as="p" className={`mt-px sm:mt-0   ${linkStyle}`}>
            Menu
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>
        <Link to="/aboutus" className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            About us
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
          {/* <div className="h-px w-full bg-transparent bg-red-400 " /> */}
        </Link>

        <Link to="/orderonline" className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            Order online
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>
        <Link to="/reservation" className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            Reservation
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>
        <div className="flex flex-row justify-center group">
          <Link to="/contact" className="group">
            <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
              Contact us
            </Text>
            <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-[25px]">
        <Link to="/checkout">
          <Button
            color="white_A700"
            size="lg"
            shape="circle"
            className="w-[50px]"
          >
            <Img src="images/img_group_103.svg" />
          </Button>
        </Link>

        <Button
          size="md"
          shape="round"
          className="sm:px-5 font-semibold min-w-[112px] hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
        >
          Log in
        </Button>
      </div>
    </header>
  );
}
