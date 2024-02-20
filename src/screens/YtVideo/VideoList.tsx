import { Link } from "react-router-dom";
import moment from "moment";
import { useTypedSelector } from "@/hooks/useTypedSelector";

const VideoList = () => {
  const { data } = useTypedSelector((store) => store.allVideo);
  return (
    <div className="w-[40%] h-[130vh] flex flex-col sticky p-[1rem] overflow-auto top-0">
      {data.map((item: any) => (
        <div key={item?.id?.videoId} className="mb-[30px] flex gap-2">
          <Link
            to={`/video/${item?.id?.videoId}`}
            onClick={() => {
              localStorage.setItem(
                "title",
                item?.snippet?.title
              );
							localStorage.setItem("channelId", item?.snippet?.channelId);
              localStorage.setItem(
                "channel",
                item?.snippet?.channelTitle
              );
              localStorage.setItem(
                "description",
                item?.snippet?.description
              );
            }}
          >
            <img
              className="rounded-md object-cover w-[150px]"
              src={item?.snippet?.thumbnails?.medium?.url}
              alt=""
            />
          </Link>
          <div>
            <h1 className="w-[200px] text-wrap text-white font-semibold text-[0.900rem]">{`${
              item?.snippet?.title && item?.snippet?.title.slice(0, 50)
            }...`}</h1>
            <Link to={`/channel/${item?.snippet?.channelId}`} className="text-[#aaa] font-semibold text-[0.768rem]">
              {item?.snippet?.channelTitle}
            </Link>
            <p className="text-[#aaa] text-[0.768rem]">
              {moment(item?.snippet?.publishTime).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
