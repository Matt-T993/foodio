import { CloseSVG } from "assets/images";
import { Button, Heading, Img, Text } from "components";
import React from "react";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
  closeRegisterModal: () => void;
  openLoginModal: () => void;
}

export default function Register({
  isOpen,
  closeRegisterModal,
  openLoginModal,
  ...props
}: Props) {
  const loginModal = () => {
    closeRegisterModal();
    openLoginModal();
  };
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="w-full md:w-[70%] sm:w-[90%] max-w-[1112px] h-[70%] bg-white-A700 rounded border-2"
    >
      <div className=" px relative flex flex-row justify-between md:justify-center  md:flex-col w-full h-full ">
        <div className="w-[50%] flex flex-col md:w-full px-6 mt-6 md:mt-0">
          <div className="flex flex-col h-full justify-evenly">
            <Img
              src="images/img_logo.svg"
              alt="logo_one"
              className="h-[80px] md:mb-8"
            />
            <div className="mx-auto w-[85%]">
              <Text size="s" as="p" className="mb-6">
                Please enter your details
              </Text>
              <form className="">
                <div>
                  <input
                    placeholder="Full Name"
                    className="border-2 py-2 mb-4 pl-3"
                  />
                  <input
                    placeholder="Email"
                    className="border-2 py-2 mb-4 pl-3"
                  />

                  <input
                    placeholder="Password"
                    className="border-2 py-2 mb-4 pl-3"
                  />

                  <Button
                    size="lg"
                    className="sm:px-5 rounded font-semibold w-full mb-4  hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
                  >
                    Register
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-evenly mt-12 ">
                  <Text size="s" as="p" className="">
                    Already have an account?
                  </Text>
                  <Button
                    size="sm"
                    className="sm:px-5 font-semibold rounded hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
                    onClick={loginModal}
                  >
                    Log In
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col md:w-full items-center justify-center bg-red-400_19 md:hidden">
          <Img
            src="images/img_illustration.png"
            alt="illustration"
            className="w-full max-w-xl object-cover"
          />
        </div>
        <CloseSVG
          className="absolute right-3 top-3 cursor-pointer"
          onClick={closeRegisterModal}
        />
      </div>
    </ModalProvider>
  );
}
