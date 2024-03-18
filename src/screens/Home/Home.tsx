import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { getAllVideo } from "../../store/reducers/Home/getVideo.action";
import moment from "moment";
import LoadingBar from "react-top-loading-bar";
import numeral from "numeral";
import { getChannel } from "../../store/reducers/channel/channel.action";

const Home = () => {
  const { data, progress } = useTypedSelector((store) => store.allVideo);
  const dispatch = useAppDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(getAllVideo())
  }, []);
  return (
    <>
      <div className="w-full min-h-[85vh] pb-[30px] mt-[80px] px-[16px] overflow-x-hidden">
        <LoadingBar color="red" progress={progress} />
          <div className="grid grid-cols-4 gap-[16px] mx-auto">
            {data?.map((item: any) => (
              <div key={item?.id} className="mb-[30px]">
                <Link
									key={item?.id}
                  to={`/video/${item?.id}`}
                  onClick={() => {
                    localStorage.setItem("title", item?.snippet?.title);
                    localStorage.setItem("channelId", item?.snippet?.channelId);
                    localStorage.setItem("date", item?.snippet?.publishedAt);
                    localStorage.setItem("views", item?.statistics?.viewCount);
                    localStorage.setItem("tags", JSON.stringify(item?.snippet?.tags));
                    localStorage.setItem("like", item?.statistics?.likeCount);
                    localStorage.setItem("comment", item?.statistics?.commentCount);
                    localStorage.setItem("channel", item?.snippet?.channelTitle);
                    localStorage.setItem("description", item?.snippet?.description);
                  }}
                >
                  <img
                    className="rounded-md object-cover"
                    src={item?.snippet?.thumbnails?.medium?.url}
                  />
                </Link>
                <div className="flex flex-col">
                  <h1 className="w-[310px] text-wrap text-white font-semibold text-[17px]">{`${
                    item?.snippet?.title && item?.snippet?.title.slice(0, 50)
                  }...`}</h1>
                  <Link to={`/channel/${item?.snippet?.channelId}`} className="text-[#aaa] font-semibold">
                    {item?.snippet?.channelTitle}
                  </Link>
									<span className="flex gap-2">
										<p className="text-[#aaa]">
										{numeral(item?.statistics?.viewCount).format("0.aa")} views • {""}
										</p>
                  <p className="text-[#aaa]">
                    {moment(item?.snippet?.publishedAt).fromNow()}
                  </p>
									</span>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Home;
