import { useSidebar } from "@/app/store/use-sidebar";
import UserItem from "./user-item";

const Recommended = () => {
  const { collapsed } = useSidebar((state) => state);
  return (
    <div>
      {!collapsed && <div className="py-4 font-semibold">Recommended</div>}
      <div className="space-y-2">
        <UserItem username={"test"} />
        <UserItem username={"test"} />
      </div>
    </div>
  );
};

export default Recommended;
