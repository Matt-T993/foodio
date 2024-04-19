import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  TextArea,
  Input,
  GoogleMap,
  Text,
  Heading,
  Img,
} from "../../components";
import Footer from "../../components/Footer";
import MainNavbar from "components/MainNavbar";
import Login from "modals/Login";

export default function ContactPage() {
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
        <div className="flex flex-col items-center justify-start w-full gap-[102px] md:px-5 max-w-[1112px]">
          <MainNavbar openLoginModal={openLoginModal} />

          <div className="flex flex-col items-center justify-start w-full gap-[50px]">
            <div className="flex flex-col items-center justify-start w-[88%] md:w-full gap-4">
              <Heading
                size="4xl"
                as="h1"
                className="!font-opensans text-center"
              >
                Contact us
              </Heading>
              <Text
                size="xl"
                as="p"
                className="!text-gray-800_01 text-center !font-normal"
              >
                We love hearing from our customers. Feel free to share your
                experience or ask any questions you may have.
              </Text>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-10 md:gap-5">
              <GoogleMap
                showMarker={false}
                className="h-[550px] w-[50%] md:w-full "
              />
              <div className="flex flex-col items-center justify-start w-[49%] md:w-full gap-9">
                <div className="flex flex-col items-center justify-start w-full gap-6">
                  <Input
                    shape="round"
                    type="text"
                    name="firstName"
                    placeholder="First name"
                    className="w-full sm:w-full"
                  />
                  <Input
                    shape="round"
                    type="text"
                    name="lastName"
                    placeholder="Last name"
                    className="w-full sm:w-full"
                  />
                  <Input
                    shape="round"
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className="w-full sm:w-full"
                  />
                  <Input
                    shape="round"
                    name="subject"
                    placeholder="Subject"
                    className="w-full sm:w-full"
                  />
                  <TextArea
                    shape="round"
                    name="message"
                    placeholder="Message"
                    className="w-full sm:p-5 text-gray-500"
                  />
                </div>
                <Button size="6xl" className="w-full sm:px-5 rounded-[12px]">
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full" />
      </div>
    </>
  );
}
