"use client";

import CenteredCardLayout from "components/ui/layout/centered-card-layout";
import UsernameForm from "./username-form";
import { useState } from "react";
import CourseForm from "./course-form";

const WelcomeFlow = ({ initialStep }: { initialStep: number }) => {
  const [currentPage, setCurrentPage] = useState(initialStep);

  return (
    <CenteredCardLayout>
      {currentPage === 0 ? (
        <UsernameForm onSuccess={() => setCurrentPage(1)} />
      ) : currentPage === 1 ? (
        <CourseForm onSuccess={() => setCurrentPage(2)} />
      ) : (
        <div />
      )}
    </CenteredCardLayout>
  );
};

export default WelcomeFlow;
