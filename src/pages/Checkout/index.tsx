import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Radio,
  Text,
  TextArea,
  Input,
  Img,
  Heading,
} from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import Login from "modals/Login";

export default function CheckoutPage() {
  // State to manage modal visibility
  const [isLoginModalOpen, setLoginModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openLoginModal = () => setLoginModalOpen(true);

  // Handler to close the modal
  const closeLoginModal = () => setLoginModalOpen(false);
  return (
    <>
      <Helmet>
        <title>foodio</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-start justify-start w-full gap-[100px] md:px-5 max-w-[1112px]">
          <MainNavbar openLoginModal={openLoginModal} />

          <div className="flex flex-row md:flex-col justify-between items-start w-[87%] md:w-full md:gap-10">
            <Button
              color="gray_900"
              size="lg"
              shape="circle"
              className="w-[50px]"
            >
              <Img src="images/img_back.svg" />
            </Button>
            <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full p-[45px] md:p-5 bg-white-A700 shadow-lg rounded-[16px]">
                <div className="flex flex-col items-center justify-start w-full gap-[29px]">
                  <Heading
                    size="xl"
                    as="h1"
                    className="!font-opensans text-center"
                  >
                    Checkout
                  </Heading>
                  <div className="flex flex-col items-center justify-start h-[721px] w-[722px] md:w-full gap-[30px]">
                    <div className="flex flex-col  justify-between w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-900">
                        Shipping address
                      </Text>
                      <div className="flex flex-row md:flex-col justify-start gap-4 md:gap-5">
                        <input
                          type="text"
                          placeholder="8502 Preston Rd. Inglewood, Maine 98380"
                          className="w-[75%] md:w-full !text-gray-900 rounded-md"
                        />
                        <Button
                          color="indigo_300"
                          size="xl"
                          className="sm:px-5 min-w-[166px] rounded-lg"
                        >
                          View Order
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="md" as="p" className="!text-gray-900">
                        Order data
                      </Text>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-6">
                          <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                            <input
                              type="text"
                              placeholder="First name"
                              className="w-[49%] sm:w-full rounded-md"
                            />
                            <input
                              type="text"
                              name="lastName"
                              placeholder="Last name"
                              className="w-[49%] sm:w-full rounded-md"
                            />
                          </div>
                          <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                            <input
                              type="text"
                              name="phoneNumber"
                              placeholder="Phone number"
                              // prefix={
                              //   <Img
                              //     src="images/img_group_94dropdown.svg"
                              //     alt="Group 94:Dropdown "
                              //   />
                              // }
                              className="w-[49%] sm:w-full gap-4 rounded-md"
                            />
                            <input
                              type="email"
                              name="email"
                              placeholder="Email address"
                              className="w-[49%] sm:w-full rounded-md"
                            />
                          </div>
                          <textarea
                            placeholder="Message"
                            className="w-full sm:pb-5 sm:pr-5 text-gray-500 rounded-md"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <div className="flex flex-row justify-start">
                        <Text size="md" as="p" className="!text-gray-900">
                          Payment method
                        </Text>
                      </div>
                      <div className="flex flex-col w-full gap-6">
                        <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                          <Radio
                            value="cashondelivery"
                            name="cashon"
                            label="Cash On Delivery"
                            className="flex w-[49%] pt-3.5 pb-2.5 pl-2 pr-[35px] gap-2 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                          />
                          <Radio
                            value="bcavirtualaccount"
                            name="bcavirtual"
                            label="BCA Virtual Account"
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                          />
                        </div>
                        <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                          <Radio
                            value="creditcard1"
                            name="creditcard"
                            label="Credit Card"
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                          />
                          <Radio
                            value="transferbank1"
                            name="transferbank"
                            label="Transfer Bank"
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                    <Button
                      size="4xl"
                      className="w-full sm:px-5 font-medium rounded-[12px]"
                    >
                      Order now
                    </Button>
                  </div>
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
