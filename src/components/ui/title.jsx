import { cn } from "@/lib/utils";

export const Title = ({ children, className }) => {
  return (
    <h3 className={cn("text-xl font-bold mb-3", className)}>
      {children}
    </h3>
  );
};
