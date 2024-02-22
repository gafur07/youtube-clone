import videoReducer from "./Home/getVideo.slice";
import channelReducer from "./channel/channel.slice";
import commentReducer from "./comment/comment.slice";
import resultReducer from './search/search.slice'

export const rootReducer = {
	allVideo: videoReducer,
	allChannel: channelReducer,
	comment: commentReducer,
	result: resultReducer
}