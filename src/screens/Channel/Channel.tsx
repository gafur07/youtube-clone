import LoadingBar from "react-top-loading-bar";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import golochka from "../../images/galochka.svg"
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { getChannel } from "@/store/reducers/channel/channel.action";

const Channel = () => {
  const { progress, channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(channel);
	const id = params.channelId
  useEffect(() => {
    dispatch(getChannel(id));
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
							<div className="flex gap-4">
								<img className="rounded-full w-[160px] h-[160px]" src={item?.snippet?.thumbnails?.medium?.url} alt="" />
								<div>
										<h1 className="text-white text-[36px] font-bold">
											{item?.snippet?.title}
											<img className="w-[13px] h-[13px] cursor-pointer inline-flex ml-[8px]" src={golochka} alt="" />
											</h1>
									<span className="flex gap-[5px] text-[#aaa]">
										<p>{item?.snippet?.customUrl}</p>
										<p>‧</p>
										<p>{item?.statistics?.subscriberCount} подписчиков</p>
										<p>‧</p>
										<p>{item?.statistics?.videoCount} видео</p>
									</span>
								</div>
							</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Channel;
