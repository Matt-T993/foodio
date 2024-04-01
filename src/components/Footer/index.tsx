import React from "react";
import { Text, Heading, Button, Img } from "..";
import { Link } from "react-router-dom";

interface Props {
  className?: string;
}

export default function Footer({ ...props }: Props) {
  const linkStyle =
    "!font-opensans hover:!text-red-400 transition-all duration-300";
  return (
    <footer
      {...props}
      className="flex justify-center items-center w-full px-14 py-[70px] md:p-5 bg-gray-900_01"
    >
      <div className="flex flex-row justify-center w-full px-14 py-[70px] md:p-5 bg-gray-900_01">
        <div className="flex flex-col items-center justify-center w-full mb-0.5 gap-[61px] mx-[93px] md:mx-5 max-w-[1113px]">
          <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
            <div className="flex flex-row justify-center w-[32%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full gap-[42px]">
                <Img
                  src="images/img_logo_red_400.svg"
                  alt="logo_three"
                  className="h-[51px]"
                />
                <Text as="p">
                  Viverra gravida morbi egestas facilisis tortor netus non duis
                  tempor.{" "}
                </Text>
                <div className="flex flex-row justify-between w-[69%] md:w-full ml-[3px] md:ml-0">
                  <Button color="gray_300" shape="circle" className="w-[60px]">
                    <Img src="images/img_group_53.png" />
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    shape="circle"
                    className="w-[60px]"
                  >
                    <Img src="images/img_instagram.png" />
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    shape="circle"
                    className="w-[60px]"
                  >
                    <Img src="images/img_group_51.png" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[12%] md:w-full mt-[9px] gap-[31px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Page
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[23px]">
                <Link to="/" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Home
                  </Text>
                </Link>
                <Link to="menu" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Menu
                  </Text>
                </Link>
                <Link to="order-online" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Order Online
                  </Text>
                </Link>
                <Link to="catering" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Catering
                  </Text>
                </Link>
                <Link to="reservation" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Reservation
                  </Text>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[14%] md:w-full mt-[5px] gap-[35px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Information
              </Heading>
              <div className="flex flex-col items-start justify-start gap-6">
                <Link to="about-us" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    About us
                  </Text>
                </Link>
                <Link to="testimonial" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Testimonial
                  </Text>
                </Link>
                <Link to="event" className="group">
                  <Text as="p" className={`${linkStyle}`}>
                    Event
                  </Text>
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[26%] md:w-full mt-[5px] gap-[31px] md:mt-0">
              <Heading as="h4" className="!text-red-400">
                Get in touch
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                <Text as="p" className="!leading-[153%]">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </Text>
                <Text as="p">abc@example.com</Text>
                <Text as="p">+123 4567 8901</Text>
              </div>
            </div>
          </div>
          <Text as="p" className="flex !text-gray-300">
            <span className="text-gray-300">Copyright </span>
            <span className="text-gray-300">©</span>
            <span className="text-gray-300">2022</span>
          </Text>
        </div>
      </div>
    </footer>
  );
}
