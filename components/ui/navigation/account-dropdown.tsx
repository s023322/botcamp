"use client";

import {
  ArrowToRightRegular,
  Settings5Regular,
  User3Regular,
} from "@mingcute/react/core-regular";
import Button from "../actions/button";
import Dropdown from "../forms/dropdown";
import Link from "next/link";

const AccountDropdown = ({ username }: { username: string }) => {
  return (
    <Dropdown.Trigger variant="link">
      {username}
      <Dropdown.Menu className="*:justify-start *:rounded-none">
        <div className="flex flex-col gap-y-1 px-3 pt-2 pb-4">
          <div className="flex items-center justify-between">
            <p className="font-bold">Level 12</p>
            <p className="text-nt-70">248 XP</p>
          </div>
          <div className="relative h-1 self-stretch overflow-hidden rounded-full bg-nt-20">
            <div className="absolute inset-0 origin-left scale-x-70 bg-se-70" />
          </div>
        </div>
        <Button as={Link} href="/account">
          <User3Regular />
          <p>Profile</p>
        </Button>
        <Button as={Link} href="/account">
          <Settings5Regular />
          <p>Manage account</p>
        </Button>
        <Button as={Link} className="text-pr-70" href="/account">
          <ArrowToRightRegular />
          <p>Log out</p>
        </Button>
      </Dropdown.Menu>
    </Dropdown.Trigger>
  );
};

export default AccountDropdown;
