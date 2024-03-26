import React from "react";
import { Text, Button, Img } from "../../components";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Helper class for common styles on links
  const linkStyle =
    "!font-opensans hover:!text-red-400 transition-all duration-300";

  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-[83%] md:gap-10">
      <Link to="/" className="group">
        <Img src="images/img_logo.svg" alt="logo_one" className="h-[51px]" />
      </Link>
      <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10">
        <Link to="/" className="group">
          <Text size="s" as="p" className={`!text-red-400 ${linkStyle}`}>
            Home
          </Text>
          <div className="h-px w-full bg-transparent bg-red-400 " />
        </Link>

        <Link to="menu" className="group">
          <Text
            size="s"
            as="p"
            className={`mt-px sm:mt-0  !text-gray-900_cc ${linkStyle}`}
          >
            Menu
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>
        <Link to="about" className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            About us
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </Link>
        {/* Assuming these are meant to be wrapped in a Link or a tag for actual navigation */}
        <div className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            Order online
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </div>
        <div className="group">
          <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
            Reservation
          </Text>
          <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
        </div>
        <div className="flex flex-row justify-center group">
          <a href="#" className="group">
            <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
              Contact us
            </Text>
            <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
          </a>
        </div>
      </div>
      <div className="flex flex-row justify-start gap-[25px]">
        <Button
          color="white_A700"
          size="lg"
          shape="circle"
          className="w-[50px] hover:bg-red-400 transition-colors duration-300"
        >
          <Img src="images/img_group_103.svg" />
        </Button>
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
