"use client";

import Logo from "@/components/ui/branding/logo";
import Button from "@/components/ui/actions/button";
import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import Link from "next/link";
import { UserData } from "@/lib/supabase/types";

const Navbar = ({ user }: { user: UserData | null }) => {
  return (
    <ResponsiveWrapper as="header" className="sticky top-0 z-10 h-12 bg-nt-05">
      <CenteredWrapper as="nav" className="flex-row gap-x-2 py-2">
        <div className="-mb-1.5">
          <Logo withText className="text-2xl" />
        </div>
        <div className="flex-1" />
        <div className="hidden sm:contents">
          <Button variant="ghost" as={Link} href="/dashboard">
            Dashboard
          </Button>
          <Button variant="ghost" as={Link} href="/">
            Courses
          </Button>
          <Button variant="ghost" as={Link} href="/">
            About
          </Button>
          <div className="mr-2.5 self-stretch border-r border-r-nt-20" />
          {!user && (
            <Button variant="secondary" as={Link} href="/log-in">
              Log in
            </Button>
          )}
        </div>
        <Button
          variant="primary"
          as={Link}
          href={user ? "/account" : "/sign-up"}
        >
          {user ? user.username || "New user" : "Sign up"}
        </Button>
      </CenteredWrapper>
    </ResponsiveWrapper>
  );
};

export default Navbar;
