import { Link } from "react-router-dom";
import { useTypedSelector } from "../../components/hooks/useTypedSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../../components/hooks/useAppDispatch";
import { getAllVideo } from "../../store/reducers/Home/getVideo.action";
import moment from "moment";
import LoadingBar from "react-top-loading-bar";

const Home = () => {
  const { data, loading } = useTypedSelector((store) => store.allVideo);
	const dispatch = useAppDispatch()
  console.log(data);
	useEffect(() => {
		dispatch(getAllVideo())
	},[])

  return (
    <>
		<div className="w-full">
			<LoadingBar color="red" progress={100}/>
      <div className="w-full pr-[2.5%] flex overflow-y-auto max-h-[85vh] pb-[30px] flex-wrap gap-[15px]">
        {data?.map((item: any) => (
					<div key={item?.id?.videoId} className="mb-[30px]">
            <Link to={`/video/${item?.id?.videoId}`}>
              <img
                className="rounded-md w-[390px] h-[225px] object-cover"
                src={item?.snippet?.thumbnails?.high?.url}
                alt=""
								/>
            </Link>
            <div>
              <h1 className="w-[380px] text-wrap text-white font-semibold text-[17px]">{`${item?.snippet?.title && item?.snippet?.title.slice(0,50)}...`}</h1>
              <p className="text-[#aaa] font-semibold">{item?.snippet?.channelTitle}</p>
              <p className="text-[#aaa]">{moment(item?.snippet?.publishTime).fromNow()}</p>
            </div>
          </div>
        ))}
      </div>
		</div>
    </>
  );
};

export default Home;
