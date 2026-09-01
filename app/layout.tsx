import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/globals.css";
import LenisProvider from "@/components/providers/LenisProvider";
import ResponsiveWrapper from "@/components/ui/responsive/ResponsiveWrapper";
import Navbar from "@/components/ui/navbar/Navbar";

const draftingMono = localFont({
  src: [
    {
      path: "./fonts/DraftingMono/DraftingMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-SemiBoldItalic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/DraftingMono/DraftingMono-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-drafting-mono",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: [
    "ui-monospace",
    "SFMono-Regular",
    "Menlo",
    "Monaco",
    "Consolas",
    "Liberation Mono",
    "Courier New",
    "monospace",
  ],
});
const diamondGrotesk = localFont({
  src: "./fonts/DiamondGrotesk/DiamondGrotesk-VF.ttf",
  variable: "--font-diamond-grotesk",
  display: "swap",
  adjustFontFallback: "Arial",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});
const zarathustra = localFont({
  src: "./fonts/Zarathustra/zarathustra-v01.otf",
  variable: "--font-zarathustra",
  display: "swap",
  adjustFontFallback: "Times New Roman",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});

export const metadata: Metadata = {
  title: "botcamp",
  description: "Your AI learning platform",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${draftingMono.variable} ${diamondGrotesk.variable} ${zarathustra.variable} h-full antialiased`}
    >
      <body className="font-body relative min-h-full w-full bg-neutral-950">
        <div className="pointer-events-none fixed inset-0 z-11 inset-shadow-[0_0_0.25rem_0.125rem] inset-shadow-neutral-950" />
        <LenisProvider>
          <ResponsiveWrapper>
            <Navbar />
            {children}
          </ResponsiveWrapper>
        </LenisProvider>
      </body>
    </html>
  );
}
