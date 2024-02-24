import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { getResult } from "@/store/reducers/search/search.action";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import "./Result.scss";
import { getChannel } from "@/store/reducers/channel/channel.action";
import golochka from "../../images/galochka.svg";
import numeral from "numeral";

const Result = () => {
  const { result, progress } = useTypedSelector((store) => store.result);
  const { channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  const id = result?.map((item: any) => {
    return item?.snippet?.channelId
  });
  console.log(id)
  

   useEffect(() => {
		// dispatch(getResult({q: params.q}))
		// dispatch(getChannel({channelId: id}));
	}, [params]);

  console.log(channel);

  console.log(result);

  return (
    <>
      <div className="mt-[80px] mb-[30px]">
        <LoadingBar progress={progress} />
        <div className="w-[80%] mx-auto">
          <div>
            {result?.map((item: any) => (
              <div className="my-[20px]">
                {item.id.videoId ? (
                  <div key={item?.id?.videoId} className="flex gap-4">
                    <Link
                      className="w-[360px] block"
                      to={`/video/${item?.id?.videoId}`}
                    >
                      <img
                        className="rounded-md w-full h-full flex-[1] flex-basic-[1e-9px]"
                        src={item?.snippet?.thumbnails?.medium?.url}
                      />
                    </Link>
                    <Link to={`/video/${item?.id?.videoId}`}>
                      <h1 className="videoTitle">{item?.snippet?.title}</h1>
                      {channel?.map((dataChannel: any) => (
                        <div className="my-2">
                          {item?.snippet?.channelId === dataChannel.id ? (
                              <Link
                                to={`/channel/${dataChannel.id}`}
                                className="flex gap-2 items-center"
                              >
                                <img
                                  className="w-[24px] h-[24px] rounded-full"
                                  src={
                                    dataChannel?.snippet?.thumbnails?.default
                                      ?.url
                                  }
                                  alt=""
                                />
                                <p className="description_result">
                                  {dataChannel?.snippet?.title}
																	<img className="golochka" src={golochka} alt="" />
                                </p>
                              </Link>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}
                      <p className="description_result">
                        {item?.snippet?.description}
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div key={item?.id?.channelId} className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Link
                        className="w-[360px]"
                        to={`/channel/${item?.id?.channelId}`}
                      >
                        <img
                          className="rounded-full w-[136px] h-[136px] mx-auto"
                          src={item?.snippet?.thumbnails?.medium?.url}
                        />
                      </Link>

                      <Link to={`/channel/${item?.id?.channelId}`}>
                        <h1 className="videoTitle">{item?.snippet?.title}</h1>
												{
													channel?.map((dataChan: any) => (
														<div className="my-2">
															{
																item?.snippet?.channelId === dataChan?.id && (
																	<div className="description_result flex items-center gap-[5px]">
																		<p>{dataChan?.snippet?.customUrl}</p>
																		<p>•</p>
																		<p>{numeral(dataChan?.statistics?.subscriberCount).format("0,a")} subscriber</p>
																	</div>
																)
															}
														</div>
													))
												}
                        <p className="description_result">
                          {item?.snippet?.description}
                        </p>
                      </Link>
                    </div>
                    <button className="bg-white duration-200 hover:opacity-90 rounded-[18px] text-[14px] font-medium px-[16px] h-[36px]">
                      Subscribe
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
