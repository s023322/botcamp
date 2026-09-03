import { checkUsernameAvailability } from "@/app/api/auth/actions";

export const usernamePattern = /^[a-z\d\-\_\.]{4,16}$/;

export const validateUsername = async (username: string) => {
  if (username.length == 0) return {};

  if (!usernamePattern.test(username))
    return username.length < 4
      ? { error: "Too short (must be 4 or more characters long)" }
      : username.length > 16
        ? { error: "Too long (must be 16 or less characters long)" }
        : { error: "Username contains invalid characters" };

  const usernameAvailability = await checkUsernameAvailability(username);

  return usernameAvailability;
};
