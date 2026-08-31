"use client";

import {
  ArrowRightRegular,
  BalanceRegular,
  HexagonsRegular,
  RightRegular,
  ToolRegular,
} from "@mingcute/react/core-regular";
import Button from "@/components/ui/button/Button";
import ResponsiveCols from "@/components/ui/responsive/ResponsiveCols";
import Banner from "@/components/ui/banner/Banner";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
} from "@/components/ui/card/Card";
import CardWrapper from "@/components/ui/card/CardWrapper";
import { motion } from "motion/react";
import Logo from "@/components/brand/Logo";
import AnimatedCenteredCol from "@/components/ui/animated/AnimatedCenteredCol";
import Link from "next/link";
import CenteredCol from "@/components/ui/responsive/CenteredCol";
import FlyText from "./components/ui/animated/FlyText";
import { flyUp } from "./components/animation/animationValues";

export default function Home() {
  return (
    <main className="contents">
      <Banner>
        <p className="trim-both font-header text-sm font-bold text-red-400">
          Judges:
        </p>
        <Button size="compact" className="text-red-50" as={Link} href="/">
          <p>Try demo accounts and view documents here</p>
          <ArrowRightRegular className="inline" size={16} />
        </Button>
      </Banner>
      <ResponsiveCols as="section" className="relative">
        <CenteredCol className="h-[calc(100dvh-5.5rem)]">
          <div className="mb-8 max-w-xl md:max-w-dvw">
            <h1 className="font-header mb-2 text-center text-6xl tracking-tight md:text-7xl lg:text-8xl">
              <FlyText>
                Enlist,
                <>
                  Lea<span className="tracking-wide">rn</span>,
                </>
                Deploy
              </FlyText>
            </h1>
            <motion.p
              {...flyUp(1)}
              className="text-center text-balance text-taupe-300"
            >
              <Logo withText /> is a learning platform built to bridge the gap
              between young innovators and AI.
            </motion.p>
          </div>
          <motion.div {...flyUp(1.25)} className="mb-1 flex gap-x-2">
            <Button variant="primary" as={Link} href="/">
              <p>Start today</p>
              <RightRegular />
            </Button>
            <Button variant="secondary" as={Link} href="/">
              Log in
            </Button>
          </motion.div>
        </CenteredCol>
      </ResponsiveCols>
      <ResponsiveCols as="section" className="relative max-h-screen">
        <AnimatedCenteredCol as={motion.div} className="relative py-16">
          <div className="mb-8 max-w-xl">
            <h1 className="font-header mb-2 text-center text-5xl tracking-tight">
              Courses built for <span className="text-red-400">you.</span>
            </h1>
            <div className="text-center text-balance text-taupe-300">
              Made by real people for real world use.
            </div>
          </div>
          <CardWrapper className="grid-col-taupe-800 *:border-none">
            <Card subgrid>
              <CardIcon>
                <HexagonsRegular />
              </CardIcon>
              <CardHeader>Fundamentals</CardHeader>
              <CardDescription>
                Learn the basics of generative AI&apos;s functionality
              </CardDescription>
              <CardContent>
                <ul className="ml-4 list-disc leading-relaxed">
                  <li>What is &quot;AI?&quot;</li>
                  <li>How does it work?</li>
                  <li>Why does it matter?</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  <p>Learn More</p>
                  <RightRegular />
                </Button>
              </CardFooter>
            </Card>
            <Card subgrid>
              <CardIcon>
                <ToolRegular />
              </CardIcon>
              <CardHeader>Applications</CardHeader>
              <CardDescription>
                Find useful tools and techniques that leverage AI&apos;s
                strengths
              </CardDescription>
              <CardContent>
                <ul className="ml-4 list-disc leading-relaxed">
                  <li>When should I use it?</li>
                  <li>What is it strongest at?</li>
                  <li>How can I use its strengths?</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  <p>Learn More</p>
                  <RightRegular />
                </Button>
              </CardFooter>
            </Card>
            <Card subgrid>
              <CardIcon>
                <BalanceRegular />
              </CardIcon>
              <CardHeader>Ethics</CardHeader>
              <CardDescription>
                Understand how to make better decisions with AI
              </CardDescription>
              <CardContent>
                <ul className="ml-4 list-disc leading-relaxed">
                  <li>When can I not use it?</li>
                  <li>What are its limitations?</li>
                  <li>What makes it dangerous?</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="secondary" className="w-full">
                  <p>Learn More</p>
                  <RightRegular />
                </Button>
              </CardFooter>
            </Card>
          </CardWrapper>
        </AnimatedCenteredCol>
      </ResponsiveCols>
      <div className="h-screen" />
    </main>
  );
}
