import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import MainNavbar from "components/MainNavbar";
import PopularMenu from "components/PopularMenu";

export default function MenuPage() {
  return (
    <>
      <Helmet>
        <title>foodie - Menu</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[92px] md:px-5 max-w-[1112px]">
          <MainNavbar />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[70px]">
              <PopularMenu />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
