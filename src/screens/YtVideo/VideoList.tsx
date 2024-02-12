import { Link } from "react-router-dom";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import moment from "moment";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { useEffect } from "react";
import { getAllVideo } from "../../store/reducers/Home/getVideo.action";

const VideoList = () => {
  const { data } = useTypedSelector((store) => store.allVideo);
	const dispatch = useAppDispatch()
	useEffect(() => {
		dispatch(getAllVideo())
	},[])
  return (
    <div className="w-[40%]">
      {data.map((item: any) => (
        <div key={item?.id?.videoId} className="mb-[30px]">
          <Link to={`/video/${item?.id?.videoId}`}>
            <img
              className="rounded-md object-cover"
              src={item?.snippet?.thumbnails?.medium?.url}
              alt=""
            />
          </Link>
          <div>
            <h1 className="w-[380px] text-wrap text-white font-semibold text-[17px]">{`${
              item?.snippet?.title && item?.snippet?.title.slice(0, 50)
            }...`}</h1>
            <p className="text-[#aaa] font-semibold">
              {item?.snippet?.channelTitle}
            </p>
            <p className="text-[#aaa]">
              {moment(item?.snippet?.publishTime).fromNow()}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
