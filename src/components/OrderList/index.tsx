import React from "react";
import { Img, Button, Text, Heading } from "../../components";
import Service from "service/service";

interface Cart {
  id: string;
  foodName: string;
  price: number;
  quantity: number;
  userEmail: string;
}
interface Food {
  id: string;
  foodName: string;
  foodType: string;
  foodImg: string;
  description: string;
  originalPrice: number;
  categories: string[];
}

interface IOnlineList {
  food: Food[];
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  increaseQuatity: (foodId: string) => void;
  decreaseQuatity: (foodId: string) => void;
  quantityOfItem: (foodName: string) => number;
}

export default function OrderList({
  cart,
  food,
  setCart,
  increaseQuatity,
  decreaseQuatity,
  quantityOfItem,
}: IOnlineList) {
  const findFoodItem = (foodName: string) => {
    const foodItem = food.find((item) => item.foodName === foodName);
    return foodItem ? foodItem.id : undefined;
  };

  const deleteCart = async (cartId: string) => {
    try {
      await Service.deleteFromCart(cartId);
      setCart((prevCart) => prevCart.filter((item) => item.id !== cartId));
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price+= (item.price) * item.quantity
    })
    return price;
  }

  return (
    <div className="flex flex-col items-center justify-start w-[31%] md:w-full">
      <div className="flex flex-col items-center justify-center w-full gap-[53px] py-[45px] md:py-5 bg-white-A700 shadow-xs rounded-[20px]">
        <div className="flex flex-col items-center justify-start w-full gap-[46px]">
          <Heading size="lg" as="h3">
            Order list
          </Heading>
          <div className="h-px w-full bg-blue_gray-100" />
        </div>
        <div className="flex flex-col w-[83%] gap-16 md:gap-10">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start w-full gap-[31px]"
            >
              <div className="flex flex-row justify-between items-start w-full">
                <Heading as="h4" className="!text-black-900">
                  {item.foodName}
                </Heading>
                <div
                  className="flex flex-col items-center justify-start h-[24px] w-[24px] mt-1 hover:scale-95 transition-all duration-300"
                  onClick={() => deleteCart(item.id)}
                >
                  <Img
                    src="images/img_group_7758.svg"
                    alt="image"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="flex flex-row justify-center w-[42%]">
                  <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                    <div
                      className="flex flex-col items-enter justify-center h-[33px] w-[33px] p-2.5 bg-white-A700 shadow-md rounded-[16px] hover:bg-red-100 transition-all duration-300"
                      onClick={() =>
                        decreaseQuatity(findFoodItem(item.foodName))
                      }
                    >
                      <Img
                        src="images/img_vector_25.svg"
                        alt="image"
                        className="h-px"
                      />
                    </div>
                    <Text as="p" className="!text-gray-900 !text-[16.62px]">
                      {item.quantity}
                    </Text>
                    <div
                      className="flex flex-col items-center justify-center h-[33px] w-[33px] bg-white-A700 shadow-sm rounded-[16px] hover:bg-green-100 transition-all duration-300"
                      onClick={() =>
                        increaseQuatity(findFoodItem(item.foodName))
                      }
                    >
                      <Img
                        src="images/img_group_7721.svg"
                        alt="image_one"
                        className=" flex h-[10px] w-[10px]"
                      />
                    </div>
                  </div>
                </div>
                <Text size="xl" as="p" className="!text-gray-900">
                  ${(item.quantity * item.price).toFixed(2)}
                </Text>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-center w-full">
          <div className="h-[168px] w-full sm:w-full relative">
            <Img
              src="images/img_line.svg"
              alt="line_one"
              className="justify-center h-[168px] left-0 bottom-0 right-0 top-0 m-auto absolute"
            />
            <div className="flex flex-row justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto absolute">
              <div className="flex flex-col items-start justify-start w-full gap-5">
                <Heading as="h4" className="!text-black-900">
                  Voucher Code
                </Heading>
                <div className="flex flex-row justify-start gap-[22px]">
                  <Button
                    color="gray_50_01"
                    size="4xl"
                    shape="round"
                    className="sm:px-5 min-w-[201px] !rounded-[15px]"
                  >
                    FREETOEAT
                  </Button>
                  <Button
                    color="blue_400"
                    shape="round"
                    className="w-[60px] !rounded-[15px] cursor-no-drop"
                  >
                    <Img src="images/img_group_170.svg" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[26px]">
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Subtotal
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              ${(total()* 0.9).toFixed(2)}
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Tax fee
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
            ${(total() * 0.1).toFixed(2)}
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Voucher
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
              $5.0
            </Text>
          </div>
          <div className="flex flex-row justify-between w-full">
            <Heading as="h4" className="mb-px !text-black-900">
              Total
            </Heading>
            <Text size="xl" as="p" className="!text-gray-900">
            ${total().toFixed(2)}
            </Text>
          </div>
        </div>
        <Button
          size="2xl"
          shape="round"
          className="mb-1 sm:px-5 font-semibold min-w-[283px] !rounded-[15px] sm:min-w-full"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
}
