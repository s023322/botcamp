"use client";

import { ArrowRightRegular, PlayRegular } from "@mingcute/react/core-regular";
import Button from "@/components/ui/button/Button";
import ResponsiveCols from "@/components/ui/responsive/ResponsiveCols";
import CenteredCol from "@/components/ui/responsive/CenteredCol";
import Banner from "@/components/ui/banner/Banner";
import {
  BalanceFilled,
  Hexagons2Filled,
  ToolFilled,
} from "@mingcute/react/core-filled";

export default function Home() {
  return (
    <>
      <Banner>
        <p className="trim-both font-header text-sm font-bold text-red-400">
          Judges:
        </p>
        <p className="trim-both text-sm">
          <Button size="compact" className="text-red-50" as="Link" href="/">
            Try demo accounts and view documents here{" "}
            <ArrowRightRegular className="inline" size={16} />
          </Button>
        </p>
      </Banner>
      <ResponsiveCols
        as="section"
        className="relative max-h-screen bg-zinc-900/50"
      >
        <CenteredCol className="py-32">
          <div className="mb-8 max-w-xl">
            <h1 className="font-header mb-2 text-center text-6xl tracking-tight">
              Enlist, Lea<span className="tracking-wide">rn</span>, Deploy.
            </h1>
            <p className="text-center text-balance text-zinc-200">
              Botcamp is a learning platform built to bridge the gap between
              young innovators and AI.
            </p>
          </div>
          <div className="mb-1 flex gap-x-2">
            <Button variant="primary" as="Link" href="/">
              <PlayRegular />
              Start today
            </Button>
            <Button variant="secondary" as="Link" href="/">
              Log in
            </Button>
          </div>
          <p className="text-xs text-zinc-300">Completely free!</p>
        </CenteredCol>
      </ResponsiveCols>
      <ResponsiveCols as="section" className="relative max-h-screen">
        <CenteredCol className="relative px-0 py-8">
          <div className="mb-8 max-w-xl">
            <h1 className="font-header mb-2 text-center text-4xl tracking-tight">
              Courses built for you.
            </h1>
            <p className="text-zinc-200">
              Botcamp courses are built by real people for the real world.
            </p>
          </div>
          <div className="grid w-full grid-cols-3 grid-rows-[auto_auto_auto] place-items-stretch -space-x-px gap-y-4 *:border *:border-zinc-900 *:p-8">
            <div className="relative row-span-4 ml-[-0.5px] grid grid-rows-subgrid bg-linear-0 via-transparent via-50% hover:z-1 hover:border-red-950 hover:to-red-950/50 hover:backdrop-blur-lg">
              <p className="text-2xl leading-6 font-bold">Fundamentals</p>
              <p className="text-zinc-200">
                {"Learn the basics of generative AI's functionality"}
              </p>
              <ul className="my-4 ml-4 list-disc text-lg leading-8">
                <li>{'What is "AI?"'}</li>
                <li>How does it work?</li>
                <li>Why does it matter?</li>
              </ul>
              <div className="text-zinc-700">
                <Hexagons2Filled />
              </div>
            </div>
            <div className="relative row-span-4 grid grid-rows-subgrid bg-linear-0 via-transparent via-50% hover:z-1 hover:border-red-950 hover:to-red-950/50 hover:backdrop-blur-lg">
              <p className="text-2xl leading-6 font-bold">Applications</p>
              <p className="text-zinc-200">
                {
                  "Find useful tools and techniques that leverage AI's strengths"
                }
              </p>
              <ul className="my-4 ml-4 list-disc text-lg leading-8">
                <li>When should I use it?</li>
                <li>What is it strongest at?</li>
                <li>How can I use its strengths?</li>
              </ul>
              <div className="text-zinc-700">
                <ToolFilled />
              </div>
            </div>
            <div className="relative row-span-4 mr-[-0.5px] grid grid-rows-subgrid bg-linear-0 via-transparent via-50% hover:z-1 hover:border-red-950 hover:to-red-950/50 hover:backdrop-blur-lg">
              <p className="text-2xl leading-6 font-bold">Ethics</p>
              <p className="text-zinc-200">
                {"Understand how to make better decisions with AI"}
              </p>
              <ul className="my-4 ml-4 list-disc text-lg leading-8">
                <li>When can I not use it?</li>
                <li>What are its limitations?</li>
                <li>What makes it dangerous?</li>
              </ul>
              <div className="text-zinc-700">
                <BalanceFilled />
              </div>
            </div>
          </div>
        </CenteredCol>
      </ResponsiveCols>
    </>
  );
}
