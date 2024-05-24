import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/utils/tailwind";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  return (
    <div {...props} ref={ref} className="gradient-border rounded-3xl">
      <div className={cn("bg-card rounded-3xl w-full h-full", props.className)}>{props.children}</div>
    </div>
  );
});

Card.displayName = "Card";
