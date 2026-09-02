import { createClient } from "@/lib/supabase/server";
import WelcomeFlow from "./components/welcome-flow";
import { redirect } from "next/navigation";

const Welcome = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("users")
    .select("username, last_lesson_id")
    .eq("user_id", user.id)
    .single();

  if (!profile) redirect("/login");

  const initialStep =
    profile.username && profile.last_lesson_id ? 2 : profile.username ? 1 : 0;

  return <WelcomeFlow initialStep={initialStep} />;
};

export default Welcome;
