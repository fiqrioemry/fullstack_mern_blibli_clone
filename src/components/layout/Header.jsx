import React from "react";
import NavMobile from "./NavMobile";
import NavDesktop from "./NavDesktop";
import { FaMoon } from "react-icons/fa";
import { Switch, Label } from "../ui/switch";
import { useSelector } from "react-redux";
import Link from "next/link";
import { Input } from "../ui/input";

import { DropdownMenu } from "../ui/dropdown-menu";
import Cart from "../others/Cart";
import { Button } from "../ui/button";
import InputArea from "../others/InputArea";

const Header = () => {
  return (
    <header className="py-4 border-b">
      {/* top content */}
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <div>
          {/* 1. navbar logo */}
          <Link href="/" className="flex items-center justify-between">
            <div className="flex items-center justify-center w-[90px] h-[20px]">
              <img src="/assets/navbar_logo.png" alt="" />
            </div>
            <span className="text-2xl text-accent font-bold">ShopiPY</span>
          </Link>
        </div>

        <div className="flex items-center justify-between gap-x-4 w-full">
          {/* search input*/}
          <div className="w-[80%] md:w-[65%]">
            <InputArea />
          </div>

          {/* cart  */}
          <div className="hidden md:flex">
            <Cart />
          </div>

          {/* sign up and login */}
          <div className="hidden md:flex justify-between items-center gap-x-4">
            <Button variant="secondary">Login</Button>
            <Button className="rounded-full py-2 px-6 bg-accent ">
              Signup
            </Button>
          </div>
        </div>
      </div>

      {/* bottom content */}
      <div></div>
    </header>
  );
};

export default Header;
