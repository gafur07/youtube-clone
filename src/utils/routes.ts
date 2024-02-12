import History from "../screens/History/History";
import Home from "../screens/Home/Home";
import Video from "../screens/YtVideo";

export const routes = [
	{path: "/", element: Home },
	{path: "/history", element: History },
	{path: "video/:videoId", element: Video },
]