import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import RootWrapper from "@/components/ui/layout/root-wrapper";
import Navbar from "@/components/ui/navigation/navbar";

const diamondGrotesk = localFont({
  src: "./fonts/diamond-grotesk-variable.ttf",
  variable: "--font-diamond-grotesk",
  display: "swap",
  adjustFontFallback: "Arial",
});

const zarathustra = localFont({
  src: "./fonts/zarathustra.otf",
  variable: "--font-zarathustra",
  display: "swap",
  adjustFontFallback: "Times New Roman",
});

export const metadata: Metadata = {
  title: "botcamp",
  description: "Your AI learning platform",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <html
      lang="en"
      className={`${diamondGrotesk.variable} ${zarathustra.variable} h-full antialiased`}
    >
      <body className="relative min-h-full w-full bg-nt-05 font-body">
        <div className="pointer-events-none fixed inset-0 z-11 inset-shadow-[0_0_0.25rem_0.125rem] inset-shadow-nt-05" />
        <LenisProvider>
          <RootWrapper>
            <Navbar />
            {children}
          </RootWrapper>
        </LenisProvider>
      </body>
    </html>
  );
};

export default RootLayout;
