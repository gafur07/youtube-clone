import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { getAllVideo } from "../../store/reducers/Home/getVideo.action";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import LoadingBar from "react-top-loading-bar";

const YtVideo = () => {
  const { progress } = useTypedSelector((store) => store.allVideo);
  const params = useParams();
  const dispatch = useAppDispatch();

  return (
    <div className="w-full bg-slate-600">
      <LoadingBar progress={progress} />
      <div className="">
        <iframe
          width="928"
          height="522"
          src={`https://www.youtube.com/embed/${params.videoId}`}
          title="Passenger | Let Her Go (Official Video)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </div>
  );
};

export default YtVideo;
