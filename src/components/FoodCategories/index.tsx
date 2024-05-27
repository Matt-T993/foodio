import React, { useState } from "react";
import { Button } from "../../components";

interface IFoodCategories {
  foodType: (type: string) => void;
}

export default function FoodCategories({ foodType }: IFoodCategories) {
  const [activeButton, setActiveButton] = useState("All");

  const buttonClasses = (buttonName: string) =>
    `w-full sm:px-5 ${
      activeButton === buttonName ? "bg-red-600 text-white" : ""
    }`;



  const handleClick = (type: string) => {
    setActiveButton(type);
    foodType(type);
  };
  return (
    <div className="flex flex-row md:flex-col justify-start w-full gap-7 md:gap-5">
      <div className="flex flex-row justify-start w-[18%] md:w-full">
        <Button
          color="gray_400_01"
          size="5xl"
          shape="round"
          className={buttonClasses("All")}
          onClick={() => handleClick("All")}
        >
          All Categories
        </Button>
      </div>
      <div className="flex flex-row justify-start w-[21%] md:w-full">
        <Button
          color="gray_400_01"
          size="5xl"
          shape="round"
          className={buttonClasses("Pasta")}
          onClick={() => handleClick("Pasta")}
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
            className={buttonClasses("Pizza")}
            onClick={() => handleClick("Pizza")}
          >
            Pizza
          </Button>
        </div>
        <div className="flex flex-row justify-center w-[31%] md:w-full">
          <Button
            color="gray_400_01"
            size="5xl"
            shape="round"
            className={buttonClasses("Dessert")}
            onClick={() => handleClick("Dessert")}
          >
            Dessert
          </Button>
        </div>
        <div className="flex flex-row justify-center w-[31%] md:w-full">
          <Button
            color="gray_400_01"
            size="5xl"
            shape="round"
            className={buttonClasses("Drinks")}
            onClick={() => handleClick("Drinks")}
          >
            Drink
          </Button>
        </div>
      </div>
    </div>
  );
}
