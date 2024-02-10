import Main from "../components/Main/Main";
import Video from "../screens/YtVideo";

export const routes = [
	{path: "*", element: Main },
	{path: "video/:videoId", element: Video },
]