"use client";

import {
  ArrowRightRegular,
  BalanceRegular,
  HexagonsRegular,
  RightRegular,
  ToolRegular,
} from "@mingcute/react/core-regular";
import Button from "@/components/ui/actions/button";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import Banner from "@/components/ui/display/banner";
import Card from "@/components/ui/display/card";
import { motion } from "motion/react";
import Logo from "@/components/ui/branding/logo";
import Link from "next/link";
import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import AnimationPresets from "@/lib/animation-presets";

const Home = () => {
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
        <p className="font-header text-sm text-pr-50">Judges:</p>
        <Button sizeVariant="compact" className="text-nt-95" as={Link} href="/">
          <p>Try demo accounts and view documents here</p>
          <ArrowRightRegular className="inline" size={16} />
        </Button>
      </Banner>
      <ResponsiveWrapper as="section" className="relative">
        <CenteredWrapper className="h-[calc(100dvh-5.5rem)]">
          <Logo
            {...AnimationPresets.flyUp(AnimationPresets.animationStagger * 3)}
            className="mb-1 text-2xl"
          />
          <div className="mb-8 max-w-xl md:max-w-dvw">
            <h1 className="mb-2 text-center font-header text-6xl tracking-tight *:inline-block md:text-7xl lg:text-8xl">
              <motion.span {...AnimationPresets.flyUp(0)}>Enlist,</motion.span>{" "}
              <motion.span
                {...AnimationPresets.flyUp(AnimationPresets.animationStagger)}
              >
                Lea<span className="tracking-wide">rn</span>,
              </motion.span>{" "}
              <motion.span
                {...AnimationPresets.flyUp(
                  AnimationPresets.animationStagger * 2,
                )}
              >
                Deploy
              </motion.span>
            </h1>
            <motion.p
              {...AnimationPresets.flyUp(AnimationPresets.animationStagger * 4)}
              className="text-center text-balance text-nt-70"
            >
              Botcamp is a learning platform built to bridge the gap between
              young innovators and AI.
            </motion.p>
          </div>
          <motion.div
            {...AnimationPresets.flyUp(AnimationPresets.animationStagger * 5)}
            className="mb-1 flex gap-x-2"
          >
            <Button variant="primary" as={Link} href="/sign-up">
              <p>Start today</p>
              <RightRegular />
            </Button>
            <Button variant="secondary" as={Link} href="/log-in">
              Log in
            </Button>
          </motion.div>
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
      <div className="h-screen" />
    </main>
  );
};

export default Home;
