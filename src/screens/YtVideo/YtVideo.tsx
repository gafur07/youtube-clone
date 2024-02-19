import { Link, useParams } from "react-router-dom";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import LoadingBar from "react-top-loading-bar";
import { useEffect } from "react";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { getChannel } from "../../store/reducers/channel/channel.action";
import golochka from "../../images/galochka.svg";
import numeral from "numeral";
import like from "../../images/liked.svg";
import dislike from "../../images/dislike.svg";

const YtVideo = () => {
  const { progress } = useTypedSelector((store) => store.allVideo);
  const { channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(channel);
  useEffect(() => {
    dispatch(getChannel(localStorage.getItem("channelId")));
  }, []);

  return (
    <div className="w-full">
      <LoadingBar progress={progress} />
      <div className="">
        <iframe
          height="522"
          className="w-full rounded-md mb-4"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
          title="Youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
        {/*INFO started */}
        <div>
          <h1 className="text-[1.4rem] font-[400] pb-[3px] text-white mb-2">
            {localStorage.getItem("title")}
          </h1>
          <div className="mb-2">
            {channel.map((item: any) => (
              <div
                className="flex items-center justify-between gap-6"
                key={item?.id}
              >
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-[12px]">
                    <Link to={`/channel/${item?.id}`}>
                      <img
                        className="rounded-full w-[40px] h-[40px]"
                        src={item?.snippet?.thumbnails?.default?.url}
                        alt=""
                      />
                    </Link>
                    <span>
                      <Link
                        to={`/channel/${localStorage.getItem("channelId")}`}
                        className="text-[#fff] text-[16px]"
                      >
                        {localStorage.getItem("channel")}
                        <img
                          className="w-[13px] h-[13px] cursor-pointer inline-flex ml-[4px]"
                          src={golochka}
                          alt=""
                        />
                      </Link>
                      <p className="text-[#aaa] text-[12px]">
                        {numeral(item?.statistics?.subscriberCount).format(
                          "0.aa"
                        )}{" "}
                        subscribers
                      </p>
                    </span>
                  </div>

                  <button className="bg-white duration-200 hover:opacity-90 rounded-[18px] text-[14px] font-medium px-[16px] h-[36px]">
                    Subscribe
                  </button>
                </div>

                <div>
                  <div className="flex items-center">
                    <div className="h-[36px] cursor-pointer gap-2 bg-[rgba(255,255,255,0.1)] inline-flex py-[7px] pr-[0.5px] rounded-l-[18px] pl-[16px] duration-200
										hover:bg-[rgba(255,255,255,0.2)]
										">
                      <span className="flex gap-2 items-center my-auto h-full pr-[16px]">
                        <img src={like} alt="" />
                        <p className="text-white text-[14px] font-medium">
                          {numeral(localStorage.getItem("like")).format("0.aa")}
                        </p>
                      </span>
                      <span className="border-r border-[#aaa]"></span>
                    </div>

										<div className="h-[36px] cursor-pointer gap-2 bg-[rgba(255,255,255,0.1)] inline-flex py-[7px] rounded-r-[18px] px-[16px] duration-200
										hover:bg-[rgba(255,255,255,0.2)]">
											<span className="my-auto">
											<img src={dislike} alt="" />
											</span>
										</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[1rem] w-full space-y-[1.3rem] text-white">
            {localStorage.getItem("description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default YtVideo;
