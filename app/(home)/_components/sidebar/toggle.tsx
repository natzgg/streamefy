"use client";

import { useSidebar } from "@/app/store/use-sidebar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useMediaQuery } from "usehooks-ts";

const Toggle = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);
  const matches = useMediaQuery("(max-width: 1024px)");

  const onClick = () => {
    if (collapsed) {
      onExpand();
    } else {
      onCollapse();
    }
  };

  return (
    <div className="pt-2">
      {!matches && collapsed && (
        <Button onClick={onClick} size="sm" variant="ghost" className="mb-4">
          <ArrowRightFromLine className="h-4 w-4" />
        </Button>
      )}
      {!matches && !collapsed && (
        <Button onClick={onClick} size="sm" variant="ghost">
          <ArrowLeftFromLine className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};

export default Toggle;
