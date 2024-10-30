import React from "react";
import links from "./data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavDesktop = () => {
  const pathname = usePathname();
  return (
    <nav>
      {links.map((item, index) => {
        return (
          <Link
            src={item.path}
            key={index}
            className={`${
              pathname === item.path ? "text-accent" : ""
            } text-lg text-primary`}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavDesktop;
