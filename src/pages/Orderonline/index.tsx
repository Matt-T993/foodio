import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Text, Heading, RatingBar } from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import OnlineMenu from "components/OnlineMenu";
import OrderList from "components/OrderList";
import FoodCategories from "components/FoodCategories";
import Login from "modals/Login";

export default function OrderonlinePage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <>
      <Helmet>
        <title>foodio - Order Online </title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[139px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-center justify-start w-full gap-[103px] md:px-5 max-w-[1112px]">
          <MainNavbar openLoginModal={openLoginModal} />

          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[69px]">
              <Heading size="4xl" as="h1" className="!font-opensans">
                Menu
              </Heading>
              <div className="flex flex-col items-start justify-start w-full gap-[59px]">
                <FoodCategories />
                <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[46px] md:gap-5">
                  <OnlineMenu />
                  <OrderList />
                </div>

                <div className="flex flex-row sm:flex-col justify-start items-center w-[22%] md:w-full ml-[242px] gap-2.5 md:ml-5 sm:gap-5">
                  <Img
                    src="images/img_arrow_left.svg"
                    alt="arrowleft_one"
                    className="h-[15px] w-[15px]"
                  />
                  <div className="flex flex-row justify-between w-[71%] sm:w-full">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Button
                        color="gray_900"
                        size="sm"
                        className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                      >
                        1
                      </Button>
                    </div>
                    <div className="flex flex-row w-[48%] gap-2.5">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                        <Button
                          color="gray_200"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                        >
                          2
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[35px] w-[44%]">
                        <Button
                          color="gray_200"
                          size="sm"
                          className="tracking-[-0.50px] font-inter font-semibold min-w-[35px] rounded sm:min-w-full"
                        >
                          3
                        </Button>
                      </div>
                    </div>
                    <Button
                      color="gray_200"
                      size="xs"
                      className="w-[35px] rounded"
                    >
                      <Img src="images/img_bx_bx_dots_horizontal_rounded.svg" />
                    </Button>
                  </div>
                  <Img
                    src="images/img_akar_icons_chevron_left.svg"
                    alt="akaricons_one"
                    className="h-[15px] w-[15px]"
                  />
                </div>
              </div>
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
    </>
  );
}
