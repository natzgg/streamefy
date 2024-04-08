import { cn } from "@/lib/utils";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn("flex-1")}>{children}</div>;
};

export default Container;
