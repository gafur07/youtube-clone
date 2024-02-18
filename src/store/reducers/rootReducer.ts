import videoReducer from "./Home/getVideo.slice";
import channelReducer from "./channel/channel.slice";

export const rootReducer = {
	allVideo: videoReducer,
	allChannel: channelReducer
}