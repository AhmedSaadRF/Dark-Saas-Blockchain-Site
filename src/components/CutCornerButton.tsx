import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";


export const CutCornerButton = (props:ComponentPropsWithoutRef<'button'>) => {
  const { className, children } = props;
  return (
    <button>
      <div></div>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 1H12.2667L23 11.7333V24" stroke="currentColor" strokeWidth="2"></path>
      </svg>
      <span>{children}</span>
    </button>
  );
}
