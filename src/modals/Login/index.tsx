import { CloseSVG } from "assets/images";
import { Button, Img, Text } from "components";
import Register from "modals/Register";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { default as ModalProvider } from "react-modal";
import { setError, setLoading, setUser } from "../../redux/authSlice";
import { auth } from "../../firebase/init";
import { useDispatch } from "react-redux";

interface Props {
  className?: string;
  isOpen: boolean;
  closeLoginModal: () => void;
  openLoginModal: () => void;
}

export default function Login({
  isOpen,
  closeLoginModal,
  openLoginModal,
  ...props
}: Props) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isResgisterModalOpen, setRegisterModalOpen] = useState<boolean>(false);

  // Handler to open the modal
  const openRegisterModal = () => {
    setRegisterModalOpen(true);
    closeLoginModal();
  };
  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  // Handler to close the modal
  const closeRegisterModal = () => setRegisterModalOpen(false);

  const loginUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setLoading(true));
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      dispatch(setUser({ email: user.email }));
      closeLoginModal();
    } catch (error) {
      console.error("Failed to login:", error);
      dispatch(setError("Failed to login. Please check your credentials."));
    } finally {
      dispatch(setLoading(false));
      resetForm();
    }
  };

  return (
    <>
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
                  Please login to your account
                </Text>
                <form onSubmit={loginUser}>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="border-2 py-2 mb-4 pl-3"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      type="password"
                      placeholder="Password"
                      className="border-2 py-2 mb-4 pl-3"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="sm:px-5 rounded font-semibold w-full mb-4  hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
                    >
                      Log In
                    </Button>
                    <Text size="s" as="p" className="text-center mb-2">
                      Forgot Password?
                    </Text>
                  </div>
                  <div className="flex flex-row items-center justify-evenly mt-10 ">
                    <Text size="s" as="p" className="">
                      Don't have an account?
                    </Text>
                    <Button
                      size="sm"
                      className="sm:px-5 font-semibold rounded hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
                      onClick={openRegisterModal}
                    >
                      Register
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
            onClick={closeLoginModal}
          />
        </div>
      </ModalProvider>
      <Register
        isOpen={isResgisterModalOpen}
        closeRegisterModal={closeRegisterModal}
        openLoginModal={openLoginModal}
      />
    </>
  );
}
