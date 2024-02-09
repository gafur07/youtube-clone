import { sidebarMenu } from "./sidebar.menu";
import SidebarItem from "./SidebarItem";
const Sidebar = () => {
  return (
    <>
      <div className="w-[20%] h-[88vh]">
        <ul className="text-white">
          {sidebarMenu.map((item: any) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
