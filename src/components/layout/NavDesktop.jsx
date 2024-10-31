import React from "react";
import links from "./data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavDesktop = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((item, index) => {
        return (
          <Link
            href={item.path}
            key={index}
            className={`${
              pathname === item.path
                ? "text-primary border-b-[3px] border-primary"
                : ""
            } text-lg hover:text-primary  py-2 `}
          >
            {item.name}
          </Link>
        );
      })}
    </>
  );
};

export default NavDesktop;
