import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading, RatingBar, Text } from "../../components";
import Footer from "../../components/Footer";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";
import MainNavbar from "components/MainNavbar";
import PopularMenu from "components/PopularMenu";
import Login from "modals/Login";
import Navbar from "components/Navbar";

export default function MenuPage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);
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
          <MainNavbar openLoginModal={openLoginModal} />
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[70px]">
              <PopularMenu />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
      <Login isOpen={isLoginModalOpen} closeLoginModal={closeLoginModal} />
    </>
  );
}
