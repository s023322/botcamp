"use server";

import { createClient } from "@/lib/supabase/server";
import { usernamePattern } from "@/lib/username-validation";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export type SupabaseState = {
  error?: string;
  message?: string;
  success?: boolean;
} | null;

// Changing usernames

export const checkUsernameAvailability = async (
  username: string,
): Promise<{ error?: string; valid?: boolean }> => {
  const filteredUsername = (username as string)?.trim();

  const unavailableMessage = { error: "Username is unavailable" };

  if (!filteredUsername || !usernamePattern.test(filteredUsername))
    return unavailableMessage;

  const supabase = await createClient();

  const { data } = await supabase
    .from("users")
    .select("*")
    .eq("username", filteredUsername)
    .maybeSingle();
  if (data) return unavailableMessage;

  return { valid: true };
};

export const changeUsername = async (
  prevState: SupabaseState,
  formData: FormData,
): Promise<SupabaseState> => {
  const username = (formData.get("username") as string)?.trim();

  const usernameAvailability = await checkUsernameAvailability(username);
  if (!usernameAvailability!.valid) return usernameAvailability;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { error: "You are not signed in" };

  const { error } = await supabase
    .from("users")
    .update({ username })
    .eq("user_id", user?.id);

  if (error) return { error: error.message };

  revalidatePath("/", "layout");

  return { success: true };
};

// Logging in & signing up

export const signUp = async (
  prevState: SupabaseState,
  formData: FormData,
): Promise<SupabaseState> => {
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required" };
  if (password.length < 8)
    return { error: "Password must be at least 8 characters long" };

  const supabase = await createClient();
  const headerList = await headers();
  const origin = headerList.get("origin") || "";

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: origin ? `${origin}/api/auth/callback` : undefined,
    },
  });

  if (error) return { error: error.message };

  if (!data.session)
    return {
      success: true,
      message: "Check your email to confirm your account",
    };

  redirect("/welcome");
};

export const logIn = async (
  prevState: SupabaseState,
  formData: FormData,
): Promise<SupabaseState> => {
  const email = (formData.get("email") as string)?.trim();
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required" };

  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: error.message };

  redirect("/dashboard");
};

export const signInWithGoogle = async (): Promise<SupabaseState> => {
  const supabase = await createClient();
  const headerList = await headers();
  const origin = headerList.get("origin") || "";

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: origin ? `${origin}/api/auth/calback` : undefined,
    },
  });

  if (error) return { error: error.message };
  if (data?.url) redirect(data.url);

  return null;
};

export const signInAnonymously = async (): Promise<SupabaseState> => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signInAnonymously();

  if (error) return { error: error.message };

  redirect("/welcome");
};

export const logOut = async (): Promise<SupabaseState> => {
  const supabase = await createClient();
  await supabase.auth.signOut();

  redirect("/log-in");
};

// Setting courses

export const setStartingCourse = async (
  prevState: SupabaseState,
  formData: FormData,
): Promise<SupabaseState> => {
  const courseIndexString = formData.get("course") as string;
  const courseIndex = parseInt(courseIndexString);

  if (
    !courseIndexString ||
    isNaN(courseIndex) ||
    courseIndex < 0 ||
    courseIndex > 2
  )
    return { error: "Invalid course selected" };

  const supabase = await createClient();

  const { data, error: getLessonError } = await supabase
    .rpc("get_lesson_uuid", {
      course_index: courseIndex,
      unit_index: 0,
      lesson_index: 0,
    })
    .maybeSingle();

  if (getLessonError) return { error: getLessonError.message };

  const lessonId = data as string;

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/log-in");

  const { error: userUpdateError } = await supabase
    .from("users")
    .update({ last_lesson_id: lessonId })
    .eq("user_id", user.id);

  if (userUpdateError) return { error: userUpdateError.message };

  return { success: true };
};
