"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navbar = ({ className }: { className?: string }) => {
const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl px-4 md:px-0 mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <Link href={"/"} >
          <MenuItem setActive={setActive} active={active} item="Home">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="">Home page</HoveredLink>
            </div>
          </MenuItem>
        </Link>
        <Link href="#projects">
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#projects">My projects</HoveredLink>
            </div>
          </MenuItem>
        </Link>

        <Link href="#contact">
          <MenuItem setActive={setActive} active={active} item="Contact me">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="#contact">Contact me</HoveredLink>
            </div>
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};
export default Navbar;
