import React from "react";
import { Button } from "../../components";

export default function FoodCategories() {
  return (
    <div className="flex flex-row md:flex-col justify-start w-full gap-7 md:gap-5">
      <div className="flex flex-row justify-start w-[18%] md:w-full">
        <Button
          color="gray_400_01"
          size="5xl"
          shape="round"
          className="w-full sm:px-5"
        >
          All Categories
        </Button>
      </div>
      <div className="flex flex-row justify-start w-[21%] md:w-full">
        <Button
          size="5xl"
          shape="round"
          className="w-full sm:px-5 font-semibold"
        >
          Pasta
        </Button>
      </div>
      <div className="flex flex-row md:flex-col w-[57%] md:w-full gap-7">
        <div className="flex flex-row justify-center w-[31%] md:w-full">
          <Button
            color="gray_400_01"
            size="5xl"
            shape="round"
            className="w-full sm:px-5"
          >
            Pizza
          </Button>
        </div>
        <div className="flex flex-row justify-center w-[31%] md:w-full">
          <Button
            color="gray_400_01"
            size="5xl"
            shape="round"
            className="w-full sm:px-5"
          >
            Dessert
          </Button>
        </div>
        <div className="flex flex-row justify-center w-[31%] md:w-full">
          <Button
            color="gray_400_01"
            size="5xl"
            shape="round"
            className="w-full sm:px-5"
          >
            Drink
          </Button>
        </div>
      </div>
    </div>
  );
}
