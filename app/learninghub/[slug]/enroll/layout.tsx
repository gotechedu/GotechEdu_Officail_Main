import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Enrollment & Cohort Registration | GoTechEdu",
  description: "Secure student candidate enrollment and cohort registration checkout.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EnrollLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
