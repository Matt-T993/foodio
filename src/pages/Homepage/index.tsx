import React, { useState } from "react";
import { Helmet } from "react-helmet";

import Navbar from "components/Navbar";
import Header from "components/Header";
import PopularDish from "components/PopularDish";
import PopularMenu from "components/PopularMenu";
import PopularChef from "components/PopularChef";
import Testimonial from "components/Testimonial";
import RSVP from "components/RSVP";
import Footer from "components/Footer";
import Login from "modals/Login";
import MainNavbar from "components/MainNavbar";
import Reservationhasbeenconfirmed from "modals/Reservationhasbeenconfirmed";

export default function HomepagePage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <>
      <Helmet>
        <title>foodie</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[129px] bg-gray-50">
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-col items-center justify-start w-full gap-[70px] p-[50px] md:p-5 bg-gradient">
            <Navbar openLoginModal={openLoginModal} />
            <Header />
          </div>
        </div>

        <PopularDish />
        <div className="flex flex-col items-center justify-start w-full gap-[70px] md:px-5 max-w-[1112px]">
          <PopularMenu />
        </div>
        <PopularChef />
        <Testimonial />
        <RSVP />
        <Footer />
      </div>
      <Login
        isOpen={isLoginModalOpen}
        closeLoginModal={closeLoginModal}
        openLoginModal={openLoginModal}
      />
    </>
  );
}
