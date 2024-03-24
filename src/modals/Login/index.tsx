import React from "react";
import {
  Text,
  Heading,
  Button,
  TextArea,
  SelectBox,
  Img,
  Input,
} from "../../components";
import { default as ModalProvider } from "react-modal";

interface Props {
  className?: string;
  isOpen: boolean;
}

export default function Login({ isOpen, ...props }: Props) {
  return (
    <ModalProvider
      {...props}
      appElement={document.getElementById("root")}
      isOpen={isOpen}
      className="min-w-[1112px]"
    >
      <div className="flex flex-row justify-center w-full">
        <div className="flex flex-row justify-center w-full p-10 sm:p-5 bg-white-A700 rounded-[16px]">
          <div className="flex flex-col items-center justify-start w-[97%] mb-5 gap-3.5 mx-5"></div>
        </div>
      </div>
    </ModalProvider>
  );
}
