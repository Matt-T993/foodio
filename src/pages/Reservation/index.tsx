import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img } from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import Booking from "components/Booking";
import Login from "modals/Login";
import EnterDetailsReservation from "modals/EnterDetailsReservation";

export default function ReservationPage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  const [isRSVPModalOpen, setRSVPModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openRSVPModal = () => setRSVPModalOpen(true);

  // Handler to close the modal
  const closeRSVPModal = () => setRSVPModalOpen(false);

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);

  return (
    <>
      <Helmet>
        <title>foodie - Reservation</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[91px] md:px-5 max-w-[1112px]">
          <MainNavbar openLoginModal={openLoginModal} />

          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
              <Img
                src="images/img_rectangle_150.png"
                alt="image"
                className="w-[50%] md:w-full md:h-[657px] object-cover rounded-[20px] sm:object-contain"
              />
              <Booking openModal={openRSVPModal} />
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
      <Login
        isOpen={isLoginModalOpen}
        closeLoginModal={closeLoginModal}
        openLoginModal={openLoginModal}
      />
      <EnterDetailsReservation
        isOpen={isRSVPModalOpen}
        closeModal={closeRSVPModal}
      />
    </>
  );
}
