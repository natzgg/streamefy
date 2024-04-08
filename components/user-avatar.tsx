import { useSidebar } from "@/app/store/use-sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserAvatar = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <Avatar className="ring-2 ring-rose-500 border border-background">
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
