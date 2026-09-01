import Button from "@/components/ui/actions/button";
import Logo from "@/components/ui/branding/logo";
import Card from "@/components/ui/display/card";
import Input from "@/components/ui/forms/input";
import InputDescriptor from "@/components/ui/forms/input-descriptor";
import AnimationPresets from "@/lib/animation-presets";
import {
  RightRegular,
  IncognitoModeRegular,
  GoogleRegular,
} from "@mingcute/react/core-regular";
import { motion } from "motion/react";
import Link from "next/link";

const AuthCard = ({ type }: { type: "Sign up" | "Log in" }) => {
  return (
    <motion.form
      className="w-full max-w-lg self-center"
      {...AnimationPresets.flyUp()}
    >
      <Card.Root className="max-sm:border-none">
        <Card.Icon>
          <Logo />
        </Card.Icon>
        <Card.Header>{type}</Card.Header>
        <Card.Description>
          {type === "Sign up"
            ? "Create a new account and start learning today"
            : "Welcome back!"}
        </Card.Description>
        <Card.Content className="flex flex-col items-stretch gap-y-4">
          {type === "Sign up" && (
            <>
              <InputDescriptor.Label>
                <span>Username</span>
                <Input
                  className="w-full"
                  type="text"
                  placeholder="johndoe"
                  required
                />
                <InputDescriptor.Description>
                  Username may only contain alphanumeric characters or single
                  hyphens, and cannot begin or end with a hyphen.
                </InputDescriptor.Description>
              </InputDescriptor.Label>

              <InputDescriptor.Label>
                <span>Email</span>
                <Input
                  className="w-full"
                  type="email"
                  placeholder="johndoe@email.com"
                  required
                />
              </InputDescriptor.Label>
            </>
          )}

          {type === "Log in" && (
            <InputDescriptor.Label>
              <span>Email or Username</span>
              <Input
                className="w-full"
                type="text"
                placeholder="johndoe"
                required
              />
            </InputDescriptor.Label>
          )}

          <InputDescriptor.Label>
            <span>Password</span>
            <Input className="w-full" type="password" id="password" required />
            {type === "Sign up" && (
              <InputDescriptor.Description>
                Password should be at least 8 characters including a number, a
                lowercase letter, and a special character.
              </InputDescriptor.Description>
            )}
          </InputDescriptor.Label>
          {type === "Log in" && (
            <Button
              variant="link"
              as={Link}
              href="/"
              sizeVariant="compact"
              className="-mt-3 -mb-6 ml-auto w-max"
            >
              Forgot password?
            </Button>
          )}
        </Card.Content>
        <Card.Footer className="items-stretch">
          <Button as="button" variant="primary" type="submit">
            <p>{type === "Sign up" ? "Create account" : "Enter account"}</p>{" "}
            <RightRegular />
          </Button>
          <div className="my-2 flex items-center gap-x-4 text-nt-50">
            <div className="flex-1 border-b" />
            <p>or</p>
            <div className="flex-1 border-b" />
          </div>
          <Button as="button" variant="outline" type="submit">
            <GoogleRegular />
            <p>Continue with Google</p>
          </Button>
          <Button as="button" variant="outline" type="submit">
            <IncognitoModeRegular />
            <p>Continue anonymously</p>
          </Button>
          <div className="mt-2 -mb-3.5 flex items-center justify-center gap-x-1 text-sm">
            <p>Already have an account?</p>
            <Button
              variant="link"
              as={Link}
              href={type === "Sign up" ? "/log-in" : "/sign-up"}
              sizeVariant="compact"
              className="self-center"
            >
              <p>{type === "Sign up" ? "Log in" : "Sign up"}</p>
              <RightRegular />
            </Button>
          </div>
        </Card.Footer>
      </Card.Root>
    </motion.form>
  );
};

export default AuthCard;
