import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getChannel } from "../../store/reducers/channel/channel.action";
import golochka from "../../images/galochka.svg";
import numeral from "numeral";
import like from "../../images/liked.svg";
import dislike from "../../images/dislike.svg";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import share from "../../images/share.svg";
import download from "../../images/download.svg";
import dot from "../../images/dot.svg";
import moment from "moment";

const VideoInfo = () => {
  const { channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  console.log(channel);
  const id = localStorage.getItem("channelId");
  useEffect(() => {
    dispatch(getChannel(id));
  }, []);

  return (
    <>
      <div>
        <h1 className="text-[1.4rem] font-[400] pb-[3px] text-white mb-2">
          {localStorage.getItem("title")}
        </h1>
        <div className="mb-4">
          {channel?.map((item: any) => (
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
                        className="golochka"
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

              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <div className="info_details info_like">
                    <span className="info_details_span">
                      <img src={like} alt="" />
                      <p className="info_text">
                        {numeral(localStorage.getItem("like")).format("0.aa")}
                      </p>
                    </span>
                    <span className="border-r border-[#aaa]"></span>
                  </div>

                  <div className="info_details info_dislike">
                    <span className="info_details_span">
                      <img src={dislike} alt="" />
                    </span>
                  </div>
                </div>

                <div className="info_details info_share">
                  <span className="info_details_span">
                    <img src={share} alt="" />
                    <p className="info_text">Share</p>
                  </span>
                </div>

                <div className="info_details info_download">
                  <span className="info_details_span">
                    <img src={download} alt="" />
                    <p className="info_text">Download</p>
                  </span>
                </div>

                <div className="info_details info_dot">
                  <span className="my-auto h-full">
                    <img src={dot} alt="" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="description">
          <div className="flex gap-2 items-center">
            <p className="description_text">
              {numeral(localStorage.getItem("views")).format()} views
            </p>
            <p className="description_text">
              {moment(localStorage.getItem("date")).format("MMM D, YYYY")}
            </p>
          </div>
          <p className="text-[1rem] w-full space-y-[1.3rem] text-white">
            {localStorage.getItem("description")}
          </p>
        </div>
      </div>
    </>
  );
};

export default VideoInfo;
