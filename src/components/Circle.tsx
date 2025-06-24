import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export const Circle = (props: ComponentPropsWithoutRef<"div">) => {
  const { className, children } = props;
  return (
    <div>
      {children}
    </div>
  );
};
