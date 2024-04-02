import React from "react";
import { Button, SelectBox, Heading } from "../../components";

export default function Booking() {
  const dropDownOptions = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  return (
    <div className="flex flex-col items-start justify-start w-[43%] md:w-full gap-11">
      <Heading size="4xl" as="h1" className="!font-opensans">
        Book a table
      </Heading>
      <div className="flex flex-col items-center justify-start w-full gap-10">
        <SelectBox
          shape="round"
          name="date"
          placeholder="Date"
          options={dropDownOptions}
          className="w-full border-gray-400 border border-solid"
        />
        <SelectBox
          shape="round"
          name="time"
          placeholder="Time"
          options={dropDownOptions}
          className="w-full border-gray-400 border border-solid"
        />
        <SelectBox
          shape="round"
          name="partysize"
          placeholder="Party size"
          options={dropDownOptions}
          className="w-full border-gray-400 border border-solid"
        />
      </div>
      <Button
        size="8xl"
        className="w-full sm:px-5 font-semibold rounded-[20px]"
      >
        Book now
      </Button>
    </div>
  );
}
