import LoadingBar from "react-top-loading-bar";
import { Link, useParams } from "react-router-dom";
import React, { useEffect } from "react";
import golochka from "../../images/galochka.svg";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getChannel } from "@/store/reducers/channel/channel.action";
import numeral from "numeral";
import subsCount from "../../images/subsCount.svg"
import videoCount from "../../images/videoCount.svg"
import viewCount from "../../images/viewCount.svg"

const Channel = () => {
  const { progress, channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(channel);
  const id = params.channelId;
  useEffect(() => {
    dispatch(getChannel({ channelId: id }));
  }, [params]);

  function jsonEscape(str: any) {
    return str.replace(/\n/g, `<br/>`);
  }
  const text = channel?.map((i: any) => {
    return jsonEscape(i?.snippet?.description).split("<br/>");
  });

  return (
    <>
      <div className="mt-[75px] px-[16px] mb-[50px]">
        <LoadingBar progress={progress} />
        <div className="w-[80%] mx-auto">
          {channel?.map((item: any) => (
            <div>
              <div className="banner w-full overflow-hidden rounded-md mb-[16px]">
                <img
                  className="w-full my-[-20%] rounded-md"
                  src={item?.brandingSettings?.image?.bannerExternalUrl}
                  alt=""
                />
              </div>
              <div className="flex gap-4 items-center">
                <img
                  className="rounded-full w-[160px] h-[160px]"
                  src={item?.snippet?.thumbnails?.medium?.url}
                  alt=""
                />
                <div>
                  <h1 className="text-white text-[36px] font-bold">
                    {item?.snippet?.title}
                    <img
                      className="w-[13px] h-[13px] cursor-pointer inline-flex ml-[8px]"
                      src={golochka}
                      alt=""
                    />
                  </h1>
                  <span className="flex gap-[5px] text-[#aaa]">
                    <p>{item?.snippet?.customUrl}</p>
                    <p>‧</p>
                    <p>
                      {numeral(item?.statistics?.subscriberCount).format("0,a")}{" "}
                      subscribers
                    </p>
                    <p>‧</p>
                    <p>{item?.statistics?.videoCount} video</p>
                  </span>
                  <button className="bg-white my-4 duration-200 hover:opacity-90 rounded-[18px] text-[14px] font-medium px-[16px] h-[36px]">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-6 border-t border-[#aaa]">
            <div className="flex items-start gap-6 justify-between">
              <div className="text-white w-[70%]">
                <h2 className="text-[20px] font-[700] my-6 text-white">
                  Description
                </h2>
                {text[0]?.map((item: any) => (
                  <React.Fragment>
                  {item}<br/>
                  </React.Fragment>
                ))}
              </div>

              {/* stats */}

              <div>
                <h2 className="text-[20px] font-[700] my-6 text-white">Stats</h2>
                {
                  channel?.map((item: any) => (
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center gap-4">
                        <img src={subsCount}/>
                        <p className="text-white">{numeral(item?.statistics?.subscriberCount).format("0.a")} subscriber</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src={videoCount}/>
                        <p className="text-white">{item?.statistics?.videoCount} video</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <img src={viewCount}/>
                        <p className="text-white">{numeral(item?.statistics?.viewCount).format()} views</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
