import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const TextButton = (props: ComponentPropsWithoutRef<'button'> & {color?: string}) => {
  const { className, children, color } = props;
  return (
    <button>
      {children}
    </button>
  );
}
