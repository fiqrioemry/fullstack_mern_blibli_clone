import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { MdClose, MdShoppingBag, MdShoppingCart } from "react-icons/md";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

const Cart = () => {
  const [active, setActive] = useState("");

  const handleChange = (value) => {
    setActive(value);
  };
  return (
    <DropdownMenu className="">
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <div className="absolute h-5 w-5 flex items-center justify-center text-primary -right-[7px] -top-[10px] text-sm rounded-full bg-red-500">
            1
          </div>
          <MdShoppingBag className="text-3xl text-secondary/70 cursor-pointer" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[400px]">
        <Tabs defaultValue="cart">
          <DropdownMenuLabel>
            <div className="flex items-center justify-between ">
              <TabsList className="space-x-8 w-full">
                <TabsTrigger
                  value="cart"
                  onClick={() => handleChange("cart")}
                  className={`${
                    active === "cart" ? "border-b-2 border-accent" : ""
                  } py-2`}
                >
                  Keranjang
                </TabsTrigger>
                <TabsTrigger
                  value="favorite"
                  onClick={() => handleChange("favorite")}
                  className={`${
                    active === "favorite" ? "border-b-2 border-accent" : ""
                  } py-2`}
                >
                  Favorite
                </TabsTrigger>
              </TabsList>
              <DropdownMenuCheckboxItem>
                <MdClose className="text-xl" />
              </DropdownMenuCheckboxItem>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator className="border-b   border-black/30" />
          <TabsContent className="h-[300px]" value="cart">
            <div className="h-full  flex items-center justify-center">
              Your cart is Empty
            </div>
          </TabsContent>
          <TabsContent className="h-[300px]" value="favorite">
            <div className="h-full  flex items-center justify-center">
              You Dont Have Any Favorites
            </div>
          </TabsContent>
        </Tabs>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Cart;
