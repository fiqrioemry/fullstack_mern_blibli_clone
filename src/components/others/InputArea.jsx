"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const InputArea = () => {
  return (
    <section>
      <div className="border rounded-md flex items-center justify-between">
        <Input className="w-full" />
      </div>
    </section>
  );
};

export default InputArea;
