import Channel from "../screens/Channel/Channel";
import History from "../screens/History/History";
import Home from "../screens/Home/Home";
import Result from "../screens/Result/Result";
import Video from "../screens/YtVideo";

export const routes = [
	{path: "/", element: Home },
	{path: "/history", element: History },
	{path: "video/:videoId", element: Video },
	{path: "channel/:channelId", element: Channel},
	{path: "result/:search", element: Result}
]