import {
  BalanceRegular,
  HexagonsRegular,
  ToolRegular,
} from "@mingcute/react/core-regular";

export const courses = [
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
