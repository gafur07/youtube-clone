import LoadingBar from "react-top-loading-bar";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import golochka from "../../images/galochka.svg"
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getChannel } from "@/store/reducers/channel/channel.action";
import numeral from "numeral";

const Channel = () => {
  const { progress, channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(channel);
	const id = params.channelId
  useEffect(() => {
    // dispatch(getChannel({ channelId: id }));
  }, [params]);

  return (
    <>
      <div className="mt-[75px] px-[16px]">
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
								<img className="rounded-full w-[160px] h-[160px]" src={item?.snippet?.thumbnails?.medium?.url} alt="" />
								<div>
										<h1 className="text-white text-[36px] font-bold">
											{item?.snippet?.title}
											<img className="w-[13px] h-[13px] cursor-pointer inline-flex ml-[8px]" src={golochka} alt="" />
											</h1>
									<span className="flex gap-[5px] text-[#aaa]">
										<p>{item?.snippet?.customUrl}</p>
										<p>‧</p>
										<p>{numeral(item?.statistics?.subscriberCount).format('0,a')} subscribers</p>
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

          <div className="my-6 border-b border-[#aaa]">
          </div>
        </div>
      </div>
    </>
  );
};

export default Channel;
