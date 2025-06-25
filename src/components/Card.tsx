import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { TextButton } from "./TextButton";

export const Card = (props: ComponentPropsWithoutRef<"div"> & { color?: string; buttonText?: string }) => {
  const { color, children, className, buttonText } = props;
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
      <div>{children}</div>
      <div>
        <TextButton color={color}>{buttonText || "Learn More"}</TextButton>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};
