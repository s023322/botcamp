"use client";

import { RightRegular } from "@mingcute/react/core-regular";
import Button from "@/components/ui/actions/button";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import Link from "next/link";
import CenteredWrapper from "@/components/ui/layout/centered-wrapper";

const Home = () => {
  return (
    <main className="contents">
      <ResponsiveWrapper as="section" className="relative">
        <CenteredWrapper className="h-screen-centered fly-up">
          <h1 className="mb-4 text-center font-header text-6xl tracking-tight">
            Page not found
          </h1>
          <div className="flex gap-x-2">
            <Button variant="secondary" as={Link} href="/">
              <p>Go home</p>
              <RightRegular />
            </Button>
          </div>
          <div className="h-16" />
        </CenteredWrapper>
      </ResponsiveWrapper>
    </main>
  );
};

export default Home;
