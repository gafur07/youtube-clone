import homeIcon from "../../images/home.svg"
import history from "../../images/history.svg"
import viewLater from "../../images/watch-later.svg"
import liked from "../../images/liked.svg"


export interface SidebarMenuData {
	label: string,
	path: string,
	icon: string,
}

export const sidebarMenu: SidebarMenuData[] = [
	{
		label: "Главная",
		path: "/",
		icon: homeIcon,
	},
	{
		label: "История",
		path: "/history",
		icon: history,
	},
	{
		label: "Смотреть позже",
		path: "/watch-later",
		icon: viewLater,
	},
	{
		label: "Понравившиеся",
		path: "",
		icon: liked,
	}
]