import { Link } from "react-router-dom";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { getAllVideo } from "../../store/reducers/Home/getVideo.action";
import moment from "moment";
import LoadingBar from "react-top-loading-bar";

const Home = () => {
  const { data, progress } = useTypedSelector((store) => store.allVideo);
  const dispatch = useAppDispatch();
  console.log(data);
  // useEffect(() => {
  //   dispatch(getAllVideo())
  // }, []);

  return (
    <>
      <div className="w-full min-h-[85vh] pb-[30px] mt-[80px] px-[16px]">
        <LoadingBar color="red" progress={progress} />
          <div className="grid grid-cols-4 gap-[16px] mx-auto">
            {data?.map((item: any) => (
              <div key={item?.id?.videoId} className="mb-[30px]">
                <Link
									key={item?.id?.videoId}
                  to={`/video/${item?.id?.videoId}`}
                  onClick={() => {
                    localStorage.setItem("title", item?.snippet?.title);
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
                    className="rounded-md object-cover"
                    src={item?.snippet?.thumbnails?.medium?.url}
                  />
                </Link>
                <div>
                  <h1 className="w-[310px] text-wrap text-white font-semibold text-[17px]">{`${
                    item?.snippet?.title && item?.snippet?.title.slice(0, 50)
                  }...`}</h1>
                  <Link to={`/channel/${item?.snippet?.channelId}`} className="text-[#aaa] font-semibold">
                    {item?.snippet?.channelTitle}
                  </Link>
                  <p className="text-[#aaa]">
                    {moment(item?.snippet?.publishTime).fromNow()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Home;
