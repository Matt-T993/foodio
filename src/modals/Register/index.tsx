import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setError, setLoading, setUser } from "../../redux/authSlice";
import { auth, db } from "../../firebase/init";
import { default as ModalProvider } from "react-modal";
import { CloseSVG } from "assets/images";
import { Button, Img, Text } from "components";

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
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginModal = () => {
    closeRegisterModal();
    openLoginModal();
  };

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      dispatch(setError("Invalid email format."));
      return;
    }
    if (password.length < 6) {
      dispatch(setError("Password must be at least 6 characters long."));
      return;
    }
    dispatch(setLoading(true));
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered:", userCredential.user);
      const user = userCredential.user;
      dispatch(setUser({ email: user.email }));
      const userID: string = auth.currentUser.uid
      await setDoc(doc(db, "users", userID), {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      closeRegisterModal();
      resetForm();
      console.log("User additional details added to Firestore");
    } catch (error) {
      console.error(
        "Error in user registration or adding details to Firestore:",
        error.message
      );
      dispatch(setError(error.message));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="w-full md:w-[70%] sm:w-[90%] max-w-[1112px] h-[70%] bg-white-A700 rounded border-2"
    >
      <div className="px relative flex flex-row justify-between md:justify-center md:flex-col w-full h-full ">
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
              <form onSubmit={registerUser}>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border-2 py-2 mb-4 pl-3 z-10"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    placeholder="Last Name"
                    type="text"
                    className="border-2 py-2 mb-4 pl-3"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <input
                    placeholder="Email"
                    type="email"
                    className="border-2 py-2 mb-4 pl-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    placeholder="Password"
                    type="password"
                    className="border-2 py-2 mb-4 pl-3"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="sm:px-5 rounded font-semibold w-full mb-4 hover:bg-white-A700 hover:text-red-400 transition-all duration-300"
                  >
                    Register
                  </Button>
                </div>
                <div className="flex flex-row items-center justify-evenly mt-12">
                  <Text size="s" as="p">
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
