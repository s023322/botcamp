"use client";

import { ArrowRightRegular, RightRegular } from "@mingcute/react/core-regular";
import Button from "@/components/ui/actions/button";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import Banner from "@/components/ui/display/banner";
import Card from "@/components/ui/display/card";
import Logo from "@/components/ui/branding/logo";
import Link from "next/link";
import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import { courses } from "@/data/courses";
import { motion } from "motion/react";

const Home = () => {
  return (
    <main className="contents">
      <Banner>
        <p className="font-header text-base text-pr-50">Judges:</p>
        <Button
          sizeVariant="compact"
          className="whitespace-normal text-nt-95 max-sm:h-fit"
          as={Link}
          href="/"
        >
          <p className="text-center max-sm:text-balance">
            Try demo accounts and view documents here
            <ArrowRightRegular
              className="-mt-0.5 -mr-1.5 ml-1 inline-block"
              size={16}
            />
          </p>
        </Button>
      </Banner>
      <ResponsiveWrapper as="section" className="relative">
        <CenteredWrapper className="mb-2 h-screen-centered">
          <Logo className="fly-up text-2xl delay-750" />
          <div className="mb-8 max-w-xl md:max-w-dvw">
            <h1 className="mb-2 text-center font-header text-6xl tracking-tight *:inline-block md:text-7xl lg:text-8xl">
              <span className="fly-up">Enlist,</span>{" "}
              <span className="fly-up delay-250">
                Lea<span className="tracking-wide">rn</span>,
              </span>{" "}
              <span className="fly-up delay-500">Deploy</span>
            </h1>
            <p className="fly-up text-center text-balance text-nt-70 delay-1000">
              Botcamp is a learning platform built to bridge the gap between
              young innovators and AI.
            </p>
          </div>
          <div className="mb-1 flex fly-up gap-x-2 delay-1250">
            <Button variant="primary" as={Link} href="/sign-up">
              <p>Start today</p>
              <RightRegular />
            </Button>
            <Button variant="secondary" as={Link} href="/log-in">
              Log in
            </Button>
          </div>
          <div className="h-16" />
        </CenteredWrapper>
      </ResponsiveWrapper>
      <ResponsiveWrapper as="section" className="bg-nt-10/25">
        <CenteredWrapper as={motion.div} className="relative py-16" animated>
          <div className="mb-8 max-w-xl">
            <h1 className="mb-2 text-center font-header text-5xl tracking-tight">
              Courses built for <span className="text-pr-50">you.</span>
            </h1>
            <div className="text-center text-balance text-nt-70">
              Made by real people for real world use.
            </div>
          </div>
          <div className="grid -space-x-px place-self-stretch grid-col-nt-20 *:border-none lg:grid-cols-3">
            {courses.map((course) => (
              <Card.Root key={course.title} className="bg-transparent" subgrid>
                <Card.Icon>{course.icon}</Card.Icon>
                <Card.Header>{course.title}</Card.Header>
                <Card.Description>{course.description}</Card.Description>
                <Card.Content>
                  <ul className="ml-4 list-disc leading-relaxed">
                    {course.concepts.map((concept) => (
                      <li key={concept}>{concept}</li>
                    ))}
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="link">
                    <p>Learn More</p>
                    <RightRegular />
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))}
          </div>
        </CenteredWrapper>
      </ResponsiveWrapper>
    </main>
  );
};

export default Home;
