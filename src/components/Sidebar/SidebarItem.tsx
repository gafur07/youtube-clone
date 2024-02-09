import { FC } from "react";
import { SidebarMenuData } from "./sidebar.menu";
import { Link, useLocation } from "react-router-dom";

interface ItemProps {
  item: SidebarMenuData;
}
const SidebarItem: FC<ItemProps> = ({ item }) => {
  const location = useLocation();
  return (
    <li
      key={item.path}
      className={`side-menu ${
        item.path === location.pathname ? "bg-[#333] font-bold" : ""
      } mx-[4%] rounded-md duration-200 hover:bg-[#333]`}
    >
      <Link className="flex gap-6 py-2 px-[16px]" to={item.path}>
        <img src={item.icon} alt="" />
        <span>{item.label}</span>
      </Link>
    </li>
  );
};

export default SidebarItem;
