import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/app/globals.css";
import LenisProvider from "@/components/providers/lenis-provider";
import Navbar from "@/components/ui/navigation/navbar";
import { createClient } from "@/lib/supabase/server";
import { UserData } from "@/lib/supabase/types";

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
  title: "Botcamp",
  description: "Your AI learning platform",
};

const RootLayout = async ({ children }: LayoutProps<"/">) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  let userData: UserData | null = null;
  if (user) {
    const { data } = await supabase
      .from("users")
      .select()
      .eq("user_id", user.id)
      .maybeSingle();

    userData = {
      userId: data.user_id,
      username: data.username,
      createdAt: data.created_at,
      xp: data.xp,
      isUserOnboarded: data.is_user_onboarded,
    };
  }

  return (
    <html
      lang="en"
      className={`${diamondGrotesk.variable} ${zarathustra.variable} h-full antialiased`}
    >
      <body className="relative min-h-full w-full bg-nt-05 font-body">
        <div className="pointer-events-none fixed inset-0 z-11 inset-shadow-[0_0_0.25rem_0.125rem] inset-shadow-nt-05" />
        <LenisProvider>
          <div className="relative grid w-full flex-1 grid-flow-row auto-rows-min grid-cols-responsive flex-col items-stretch grid-row-nt-20">
            <Navbar user={userData} />
            {children}
          </div>
        </LenisProvider>
      </body>
    </html>
  );
};

export default RootLayout;
