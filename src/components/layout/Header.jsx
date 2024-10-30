import React from "react";
import { Button } from "../ui/button";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div>Your Logo</div>
        <div className="flex items-center justify-between gap-x-2">
          {/* nav desktop */}
          <div className="md:flex hidden space-x-2">
            <NavDesktop />
          </div>
          <div className="flex">
            <Button></Button>
          </div>

          {/* nav mobile */}
          <div className="flex md:hidden">
            <NavMobile />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
