import { useSidebar } from "@/app/store/use-sidebar";
import { LiveBadge } from "@/components/live-badge";
import { Button } from "@/components/ui/button";
import UserAvatar from "@/components/user-avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface UserItemProps {
  username: string;
}

const UserItem = ({ username }: UserItemProps) => {
  const { collapsed } = useSidebar((state) => state);
  const href = `/${username}`;
  return (
    <Button
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start"
      )}
      variant="ghost"
      asChild
    >
      <Link href={href} className="flex items-center gap-x-4">
        <UserAvatar />
        {!collapsed && <span className="truncate">{username}</span>}
        {!collapsed && <LiveBadge className="ml-auto" />}
      </Link>
    </Button>
  );
};

export default UserItem;
