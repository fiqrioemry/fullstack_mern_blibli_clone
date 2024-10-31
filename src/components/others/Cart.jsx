import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";

import { MdShoppingBag } from "react-icons/md";

const Cart = () => {
  const [active, setActive] = useState("cart");
  const handleActive = (value) => {
    setActive(value);
  };
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="flex items-center">
            <MdShoppingBag className="text-3xl text-secondary/70 cursor-pointer" />
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className=" md:w-[400px] lg:w-[500px] h-[400px]">
              <Tabs defaultValue="cart">
                <div className="flex items-center justify-between border px-8 ">
                  <TabsList className="space-x-8 w-full">
                    <TabsTrigger
                      value="cart"
                      onClick={() => handleActive("cart")}
                      className={`${
                        active === "cart" ? "border-b-2 border-accent" : ""
                      } py-2`}
                    >
                      Keranjang
                    </TabsTrigger>
                    <TabsTrigger
                      value="favorite"
                      onClick={() => setActive("favorite")}
                      className={`${
                        active === "favorite" ? "border-b-2 border-accent" : ""
                      } py-2`}
                    >
                      favorite
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* <DropdownMenuSeparator className="border-b   border-black/30" /> */}
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
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Cart;
