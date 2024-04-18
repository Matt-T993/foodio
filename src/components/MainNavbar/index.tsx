import React, { useState } from "react";
import { Text, Img, Button } from "../../components";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface MainNavbarProps {
  openLoginModal: () => void;
}

export default function MainNavbar({ openLoginModal }: MainNavbarProps) {
  const [open, setOpen] = useState<boolean>(false);
  const linkStyle =
    "!font-opensans hover:!text-red-400 transition-all duration-300";

  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
      <div
        onClick={() => setOpen(!open)}
        className="absolute right-8 top-6 cursor-pointer hidden w-7 h-7 sm:block "
      >
        {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
      </div>
      <div
        className={`flex flex-row md:flex-col justify-between items-center w-full sm:gap-10
        ${open ? " sm:block" : " sm:hidden"}`}
      >
        <Link to="/" className="group">
          <Img
            src="images/img_logo.svg"
            alt="logo_one"
            className="h-[51px] md:mb-8"
          />
        </Link>

        <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-[90%]  sm:gap-10 md:mb-8">
          {[
            ["/", "Home"],
            ["/menu", "Menu"],
            ["/aboutus", "About us"],
            ["/orderonline", "Order online"],
            ["/reservation", "Reservation"],
            ["/contact", "Contact us"],
          ].map(([path, label]) => (
            <Link to={path} className="group" key={path}>
              <div className="inline-block">
                <Text
                  size="s"
                  as="p"
                  className={`text-gray-900_cc ${linkStyle}`}
                >
                  {label}
                </Text>
                <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-row justify-center gap-[25px] ml-4">
          <Link to="/checkout">
            <Button
              color="white_A700"
              size="lg"
              shape="circle"
              className="w-[50px]"
            >
              <Img src="images/img_group_103.svg" alt="Checkout" />
            </Button>
          </Link>

          <Button
            size="md"
            shape="round"
            className="sm:px-5 font-semibold min-w-[112px] hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
            onClick={openLoginModal}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
