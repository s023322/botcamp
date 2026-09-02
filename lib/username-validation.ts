import { checkUsernameAvailability } from "@/app/api/auth/actions";

export const usernamePattern = /^[a-z\d\-\_\.]*$/;

export const validateUsername = async (username: string) => {
  if (username.length == 0) return {};

  if (username.length < 4)
    return { error: "Too short (must be 4 or more characters long)" };
  if (username.length > 16)
    return { error: "Too long (must be 16 or less characters long)" };

  const usernameValid = usernamePattern.test(username);

  if (!usernameValid) return { error: "Username contains invalid characters" };

  const usernameAvailability = await checkUsernameAvailability(username);

  return usernameAvailability;
};
