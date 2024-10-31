"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { FaMoon, FaSun } from "react-icons/fa";
import { handleDarkMode } from "@/lib/features/action/interfaceAction";

const Switch = React.forwardRef(({ className, ...props }, ref) => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.interface.darkMode);

  const handlePaginate = () => {
    dispatch(handleDarkMode());
  };
  return (
    <SwitchPrimitives.Root
      onClick={handlePaginate}
      className={cn(
        "peer inline-flex h-8 w-[60px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=unchecked]:bg-gray-200 dark:focus-visible:ring-gray-300 dark:focus-visible:ring-offset-gray-950 dark:data-[state=checked]:bg-gray-50 dark:data-[state=unchecked]:bg-gray-800",
        className
      )}
      {...props}
      ref={ref}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-none shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-7 data-[state=unchecked]:translate-x-0 "
        )}
      >
        {darkMode ? (
          <FaSun className="text-2xl text-yellow-300" />
        ) : (
          <FaMoon className="text-2xl" />
        )}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
