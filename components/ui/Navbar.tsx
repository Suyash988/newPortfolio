"use client";
import React from "react";
import { FloatingNav } from "./FloatingNavbar";
import { FaHome } from "react-icons/fa";
import { FaComment, FaFolder, FaMessage } from "react-icons/fa6";
// import { IconHome, IconMessage, IconUser, Icon } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <FaFolder className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Testimonials",
      link: "#testimonials",
      icon: <FaComment className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <FaMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

