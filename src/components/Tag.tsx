import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Tag = (
  props: ComponentPropsWithoutRef<"div"> & { color?: string }
) => {
  const { children, color, className } = props;
  return (
    <div>
      {children}
    </div>
  );
};
