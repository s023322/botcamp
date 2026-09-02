import { changeUsername, SupabaseState } from "@/app/api/auth/actions";
import Button from "@/components/ui/actions/button";
import Logo from "@/components/ui/branding/logo";
import Card from "@/components/ui/display/card";
import { useActionState, useEffect, useState } from "react";
import UsernameInput from "./username-input";

const UsernameForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [isValid, setIsValid] = useState(false);

  const [state, formAction, isPending] = useActionState<
    SupabaseState,
    FormData
  >(changeUsername, null);
  useEffect(() => {
    if (state?.success) {
      onSuccess();
    }
  });

  return (
    <form action={formAction} className="w-full max-w-lg self-center">
      <Card.Root className="w-full max-w-lg self-center max-sm:border-none">
        <Card.Icon>
          <Logo />
        </Card.Icon>
        <Card.Header>Welcome to Botcamp!</Card.Header>
        <Card.Content>
          <UsernameInput setIsValid={setIsValid} />
        </Card.Content>
        <Card.Footer className="items-stretch">
          <Button
            as="button"
            variant="primary"
            disabled={!isValid || isPending}
          >
            {isPending ? "Processing..." : "Continue"}
          </Button>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};

export default UsernameForm;
