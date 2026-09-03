"use client";

import {
  Book2AIRegular,
  Book5Regular,
  Home3Regular,
  InformationRegular,
  MenuRegular,
  User3Regular,
} from "@mingcute/react/core-regular";
import Dropdown from "../forms/dropdown";
import Button from "../actions/button";
import Link from "next/link";
import { UserData } from "@/lib/supabase/types";
import Logo from "../branding/logo";

const MobileMenu = ({ user }: { user?: UserData }) => {
  return (
    <Dropdown.Trigger
      closeButton
      align="left"
      sizeVariant="iconNormal"
      closeClassName="left-[calc(min(80dvw,24rem)-3rem)] top-4"
      start={{ x: -384, top: -12 }}
      end={{ x: 0 }}
    >
      <MenuRegular />
      <Dropdown.Menu className="fixed top-0 left-0 h-dvh w-[80dvw] max-w-sm gap-y-3 rounded-none px-4 pb-12 shadow-[4rem_0_8rem_8rem] shadow-nt-05/50 *:justify-start">
        <div className="flex h-24 items-center pr-1 pl-2.5">
          <Logo className="text-[4rem] sm:hidden" />
          <div className="flex-1" />
        </div>
        <Button
          variant="ghost"
          className="gap-x-1.5 py-1 text-lg"
          as={Link}
          href="/"
        >
          <Home3Regular className="-translate-y-px" />
          <p>Home</p>
        </Button>
        <Button
          variant="ghost"
          className="gap-x-1.5 py-1 text-lg"
          as={Link}
          href="/courses"
        >
          <Book2AIRegular className="-translate-y-px" />
          <p>Courses</p>
        </Button>
        <Button
          variant="ghost"
          className="gap-x-1.5 py-1 text-lg"
          as={Link}
          href="/resources"
        >
          <Book5Regular className="-translate-y-px" />
          <p>Resources</p>
        </Button>
        <Button
          variant="ghost"
          className="gap-x-1.5 py-1 text-lg"
          as={Link}
          href="/about"
        >
          <InformationRegular className="-translate-y-px" />
          <p>About</p>
        </Button>
        <div className="flex-1" />
        {!user && (
          <Button
            variant="secondary"
            className="gap-x-1.5 py-1 text-lg"
            as={Link}
            href="/log-in"
          >
            <User3Regular />
            <p>Log in</p>
          </Button>
        )}
      </Dropdown.Menu>
    </Dropdown.Trigger>
  );
};

export default MobileMenu;
