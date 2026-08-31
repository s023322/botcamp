"use client";

import Logo from "@/components/ui/brand/Logo";
import Button from "@/components/ui/button/Button";
import CenteredCol from "@/components/ui/dynamic/CenteredCol";
import ResponsiveCols from "@/components/ui/dynamic/ResponsiveCols";
import Link from "next/link";

const Navbar = () => {
  return (
    <ResponsiveCols
      as="header"
      className="sticky top-0 z-10 border-b border-b-taupe-800 bg-taupe-950"
    >
      <CenteredCol as="nav" className="flex-row gap-x-2 py-2">
        <Logo withText className="ml-1.5 text-2xl" />
        <div className="flex-1" />
        <div className="hidden sm:contents">
          <Button variant="ghost" as={Link} href="/">
            Dashboard
          </Button>
          <Button variant="ghost" as={Link} href="/">
            Courses
          </Button>
          <Button variant="ghost" as={Link} href="/">
            About
          </Button>
          <div className="mr-2.5 self-stretch border-r border-r-taupe-800" />
          <Button variant="secondary" as={Link} href="/">
            Log in
          </Button>
        </div>
        <Button variant="primary" as={Link} href="/">
          Sign up
        </Button>
      </CenteredCol>
    </ResponsiveCols>
  );
};

export default Navbar;
