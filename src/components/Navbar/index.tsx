import React, { useState } from "react";
import { Text, Button, Img } from "../../components";
import { Link } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import LoginUserDropDown from "components/LoginUserDropDown";

interface MainNavbarProps {
  openLoginModal: () => void;
}

export default function Navbar({ openLoginModal }: MainNavbarProps) {
  const user = useSelector((state: RootState) => state.auth.user);
  const linkStyle =
    "!font-opensans hover:!text-red-400 transition-all duration-300";

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="flex flex-row md:flex-col justify-between items-center w-[83%] md:gap-10 ">
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

        <div className="flex flex-row sm:flex-col justify-between items-start w-[52%] md:w-full sm:gap-10 md:mb-8">
          <Link to="/" className="group">
            <Text size="s" as="p" className={`!text-red-400 ${linkStyle}`}>
              Home
            </Text>
            <div className="h-px w-full bg-transparent bg-red-400 " />
          </Link>

          <Link to="/menu" className="group">
            <Text
              size="s"
              as="p"
              className={`mt-px sm:mt-0  !text-gray-900_cc ${linkStyle}`}
            >
              Menu
            </Text>
            <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
          </Link>
          <Link to="/aboutus" className="group">
            <Text size="s" as="p" className={`!text-gray-900_cc ${linkStyle}`}>
              About us
            </Text>
            <div className="h-px w-full bg-transparent group-hover:bg-red-400 transition-all duration-300"></div>
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
              <Text
                size="s"
                as="p"
                className={`!text-gray-900_cc ${linkStyle}`}
              >
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
          {user.email ? (
            <LoginUserDropDown />
          ) : (
            <Button
              size="md"
              shape="round"
              className="sm:px-5 font-semibold min-w-[112px] hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
              onClick={openLoginModal}
            >
              Log in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
