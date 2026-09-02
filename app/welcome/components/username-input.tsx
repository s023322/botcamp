import Input from "@/components/ui/forms/input";
import InputDescriptor from "@/components/ui/forms/input-descriptor";
import { validateUsername } from "@/lib/username-validation";
import {
  AlertRegular,
  CheckRegular,
  InformationRegular,
} from "@mingcute/react/core-regular";
import { ChangeEventHandler, useState } from "react";

const UsernameInput = ({
  setIsValid,
}: {
  setIsValid: (a: boolean) => void;
}) => {
  const [currentTimeout, setCurrentTimeout] = useState<
    string | number | NodeJS.Timeout | undefined
  >();

  const [validationFeedback, setValidationFeedback] = useState<{
    error?: string;
    valid?: boolean;
  }>({});

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    clearTimeout(currentTimeout);

    const value = e.target.value;
    setCurrentTimeout(
      setTimeout(async () => {
        const usernameValidity = await validateUsername(value);
        setValidationFeedback(usernameValidity);
        setIsValid(!!usernameValidity.valid);
      }, 300),
    );
  };

  return (
    <>
      <InputDescriptor.Label>
        <span>Username</span>
        <Input
          name="username"
          className="w-full"
          placeholder="johndoe"
          onChange={handleInputChange}
          required
        />
      </InputDescriptor.Label>
      {validationFeedback.valid ? (
        <InputDescriptor.Description className="text-base text-se-60">
          <CheckRegular className="mr-1 mb-1 inline size-4" /> Username is
          available
        </InputDescriptor.Description>
      ) : validationFeedback.error ? (
        <InputDescriptor.Description className="text-base text-pr-60">
          <AlertRegular className="mr-1 mb-1 inline size-4" />
          {validationFeedback.error}
        </InputDescriptor.Description>
      ) : (
        <InputDescriptor.Description className="text-base text-nt-95">
          <InformationRegular className="mr-1 mb-1 inline size-4" />
          Start typing to check availability
        </InputDescriptor.Description>
      )}
      <InputDescriptor.Description>
        Username should be between 4 and 16 characters and may only contain
        lowercase letters, numbers, underscores (_), hyphens (-), or periods
        (.).
      </InputDescriptor.Description>
    </>
  );
};

export default UsernameInput;
