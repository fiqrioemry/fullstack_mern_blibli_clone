import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { MdOutlineMenu } from "react-icons/md";
import links from "./data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMobile = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <MdOutlineMenu className="text-2xl" />
      </SheetTrigger>

      <SheetContent className="flex flex-col border-none">
        <div className="py-12 flex justify-center">
          <h1 className="text-2xl">
            Accent<span>Lorem</span>
          </h1>
        </div>
        <nav className="flex flex-col gap-y-8 items-center justify-center">
          {links.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className={`${
                  pathname === item.path ? "text-primary border-primary" : ""
                } text-lg hover:text-primary transition-all duration-300  py-2 `}
              >
                <SheetClose>{item.name}</SheetClose>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavMobile;
