import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import LoadingBar from "react-top-loading-bar";

const YtVideo = () => {
  const { progress, singleVideo } = useTypedSelector((store) => store.allVideo);
  const params = useParams();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full">
      <LoadingBar progress={progress} />
      <div className="">
        <iframe
					height="522"
					className="w-full rounded-md mb-6"
          src={`https://www.youtube.com/embed/${params.videoId}?autoplay=1`}
          title="Youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}

				<div>
					<p className="text-[#aaa] text-[1.1rem]">{singleVideo?.snippet?.channelTitle}</p>
					<h1 className="text-[1.4rem] font-[400] pb-[3px] text-white">{singleVideo?.snippet?.title}</h1>
					<p className="text-[1rem] w-full space-y-[1.3rem] text-white">{singleVideo.snippet?.description}</p>
				</div>
      </div>
    </div>
  );
};

export default YtVideo;
