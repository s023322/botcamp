"use client";

import {
  ArrowRightRegular,
  BalanceRegular,
  HexagonsRegular,
  RightRegular,
  ToolRegular,
} from "@mingcute/react/core-regular";
import Button from "@/components/ui/button/Button";
import ResponsiveCols from "@/components/ui/dynamic/ResponsiveCols";
import Banner from "@/components/ui/banner/Banner";
import Card from "@/components/ui/card/Card";
import CardWrapper from "@/components/ui/card/CardWrapper";
import { motion } from "motion/react";
import Logo from "@/components/ui/brand/Logo";
import Link from "next/link";
import CenteredCol from "@/components/ui/dynamic/CenteredCol";
import FlyText from "@/components/ui/animated/FlyText";
import { flyUp } from "@/components/presets/animationPresets";

export default function Home() {
  const courseCards = [
    {
      icon: <HexagonsRegular />,
      title: "Fundamentals",
      description: "Learn the basics of generative AI's functionality",
      concepts: ['What is "AI?"', "How does it work", "Why does it matter"],
    },
    {
      icon: <ToolRegular />,
      title: "Applications",
      description:
        "Find useful tools and techniques that leverage AI's strengths",
      concepts: [
        "When should I use it?",
        "What is it strongest at?",
        "How can I use its strengths?",
      ],
    },
    {
      icon: <BalanceRegular />,
      title: "Ethics",
      description: "Understand how to make better decisions with AI",
      concepts: [
        "When can I not use it?",
        "What are its limitations?",
        "What makes it dangerous?",
      ],
    },
  ];

  return (
    <main className="contents">
      <Banner>
        <p className="trim-both font-header text-primary-400 text-sm font-bold">
          Judges:
        </p>
        <Button size="compact" className="text-neutral-50" as={Link} href="/">
          <p>Try demo accounts and view documents here</p>
          <ArrowRightRegular className="inline" size={16} />
        </Button>
      </Banner>
      <ResponsiveCols as="section" className="relative">
        <CenteredCol className="h-[calc(100dvh-5.5rem)]">
          <Logo {...flyUp(1)} className="mb-1 text-2xl" />
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
              {...flyUp(1.25)}
              className="text-center text-balance text-neutral-300"
            >
              Botcamp is a learning platform built to bridge the gap between
              young innovators and AI.
            </motion.p>
          </div>
          <motion.div {...flyUp(1.5)} className="mb-1 flex gap-x-2">
            <Button variant="primary" as={Link} href="/">
              <p>Start today</p>
              <RightRegular />
            </Button>
            <Button variant="secondary" as={Link} href="/">
              Log in
            </Button>
          </motion.div>
          <div className="h-16" />
        </CenteredCol>
      </ResponsiveCols>
      <ResponsiveCols as="section" className="bg-neutral-900/50">
        <CenteredCol as={motion.div} className="relative py-16" animated>
          <div className="mb-8 max-w-xl">
            <h1 className="font-header mb-2 text-center text-5xl tracking-tight">
              Courses built for <span className="text-primary-400">you.</span>
            </h1>
            <div className="text-center text-balance text-neutral-300">
              Made by real people for real world use.
            </div>
          </div>
          <CardWrapper className="grid-col-neutral-800 *:border-none">
            {courseCards.map((courseCard) => (
              <Card.Root key={courseCard.title} subgrid>
                <Card.Icon>{courseCard.icon}</Card.Icon>
                <Card.Header>{courseCard.title}</Card.Header>
                <Card.Description>{courseCard.description}</Card.Description>
                <Card.Content>
                  <ul className="ml-4 list-disc leading-relaxed">
                    {courseCard.concepts.map((concept) => (
                      <li key={concept}>{concept}</li>
                    ))}
                  </ul>
                </Card.Content>
                <Card.Footer>
                  <Button variant="secondary" className="w-full">
                    <p>Learn More</p>
                    <RightRegular />
                  </Button>
                </Card.Footer>
              </Card.Root>
            ))}
          </CardWrapper>
        </CenteredCol>
      </ResponsiveCols>
      <div className="h-screen" />
    </main>
  );
}
