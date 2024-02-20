import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import "./Video.scss"
import VideoInfo from "./videoInfo";
import Comment from "./Comment";
import { FC } from "react";


const YtVideo:FC = () => {
  const { progress } = useTypedSelector((store) => store.allVideo);
  const { channel } = useTypedSelector((store) => store.allChannel);
  const dispatch = useAppDispatch();
  const params = useParams();
  console.log(channel);
	const id = params.videoId

  return (
    <div className="w-full">
      <LoadingBar progress={progress} />
      <div className="">
        <iframe
          height="522"
          className="w-full rounded-md mb-4"
          src={`https://www.youtube.com/embed/${id}?autoplay=1`}
          title="Youtube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
        {/*INFO started */}
        <VideoInfo />
				<Comment key={id} id={`${id}`} />
      </div>
    </div>
  );
};

export default YtVideo;
