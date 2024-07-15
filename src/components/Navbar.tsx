"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 gap-5 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}> 
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home">
         
          </MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="     Courses    ">
          <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/courses">All Courses</HoveredLink>
          <HoveredLink href="/courses/fitness-fundamentals">Fitness Fundamentals</HoveredLink>
          <HoveredLink href="/courses/basketball-skills-development">Basketball Skills</HoveredLink>
          <HoveredLink href="/courses/soccer-techniques">Soccer Techniques</HoveredLink>
          <HoveredLink href="/courses/swimming-mastery">Swimming Mastery</HoveredLink>
          </div>
        </MenuItem>
        <Link href={"/contact-us"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="    Contact Us    "
          ></MenuItem>
        </Link>
        <Link href={"/shop"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="    Shop"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
