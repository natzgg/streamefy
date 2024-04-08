"use client";

import Toggle from "./toggle";
import { useSidebar } from "@/app/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import Recommended from "./recommended";
import Following from "./following";

const Sidebar = () => {
  const { collapsed, onExpand, onCollapse } = useSidebar((state) => state);

  const matches = useMediaQuery("(max-width: 1024px)");

  useEffect(() => {
    if (matches) {
      onCollapse();
    }
  }, [collapsed, onCollapse, onExpand]);
  return (
    <div
      className={cn(
        "h-full border-r w-60 bg-[#2D2E35] border-[#2D2E35]",
        collapsed && "w-[70px]"
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between ">
          {!collapsed && <h1 className="font-semibold text-lg">For you</h1>}
          <Toggle />
        </div>
        <div className="space-y-2">
          <Recommended />
          <Following />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
