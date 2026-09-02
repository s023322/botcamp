import { setStartingCourse, SupabaseState } from "@/api/auth/actions";
import Button from "@/components/ui/actions/button";
import Logo from "@/components/ui/branding/logo";
import Card from "@/components/ui/display/card";
import {
  BalanceRegular,
  CheckRegular,
  HexagonsRegular,
  ToolRegular,
} from "@mingcute/react/core-regular";
import { useActionState, useEffect, useState } from "react";
import Radio from "@/components/ui/forms/radio";
import { cn } from "@sglara/cn";

const CourseForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [state, formAction, isPending] = useActionState<
    SupabaseState,
    FormData
  >(setStartingCourse, null);

  useEffect(() => {
    if (state?.success) {
      onSuccess();
    }
  });

  const courses = [
    {
      icon: <HexagonsRegular />,
      title: "Fundamentals",
      description: "Learn the basics of generative AI's functionality",
    },
    {
      icon: <ToolRegular />,
      title: "Applications",
      description:
        "Find useful tools and techniques that leverage AI's strengths",
    },
    {
      icon: <BalanceRegular />,
      title: "Ethics",
      description: "Understand how to make better decisions with AI",
    },
  ];

  return (
    <form action={formAction} className="w-full max-w-lg self-center">
      <Card.Root className="w-full max-w-lg self-center max-sm:border-none">
        <Card.Icon>
          <Logo />
        </Card.Icon>
        <Card.Header>Where will you start?</Card.Header>
        <Card.Content>
          <Radio.Root
            name="course"
            value={selectedCourse}
            onValueChange={setSelectedCourse}
          >
            {courses.map((course, index) => {
              return (
                <Radio.Button key={course.title} value={index.toString()}>
                  {({ checked }) => (
                    <Card.Root className="rounded-none border-none">
                      <Card.Icon className={cn(checked && "text-se-95")}>
                        {checked ? <CheckRegular /> : course.icon}
                      </Card.Icon>
                      <Card.Header className="text-lg">
                        {course.title}
                      </Card.Header>
                      <Card.Content className="pt-2 pb-0">
                        {course.description}
                      </Card.Content>
                    </Card.Root>
                  )}
                </Radio.Button>
              );
            })}
          </Radio.Root>
        </Card.Content>
        <Card.Footer className="items-stretch">
          <Button as="button" variant="primary" disabled={isPending}>
            {isPending ? "Processing..." : "Continue"}
          </Button>
        </Card.Footer>
      </Card.Root>
    </form>
  );
};

export default CourseForm;
