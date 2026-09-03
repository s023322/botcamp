import CenteredWrapper from "@/components/ui/layout/centered-wrapper";
import ResponsiveWrapper from "@/components/ui/layout/responsive-wrapper";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const Account = async () => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/log-in");

  const { data } = await supabase
    .from("users")
    .select()
    .eq("user_id", user.id)
    .maybeSingle();

  const userData = {
    userId: data.user_id,
    username: data.username,
    createdAt: data.created_at,
    xp: data.xp,
    isUserOnboarded: data.is_user_onboarded,
  };

  return (
    <main className="contents">
      <ResponsiveWrapper>
        <CenteredWrapper className="items-stretch py-8">
          <h1 className="mb-4 text-center font-header text-5xl">
            Hey, <span className="text-pr-50">{userData.username}</span>!
          </h1>
        </CenteredWrapper>
      </ResponsiveWrapper>
    </main>
  );
};

export default Account;
