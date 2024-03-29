import { Drawer, IconButton } from "@mui/material";
import Menu from "@mui/icons-material/Menu";
import PlayArrow from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";
import logo from "../../images/yt-logo.svg";
import musicIcon from "../../images/music.svg";
import soccerIcon from "../../images/sport.svg";
import gamingIcon from "../../images/game.svg";
import filmIcon from "../../images/movie.svg";
import newsIcon from "../../images/news.svg";
import liveIcon from "../../images/live.svg";
import spotlightIcon from "../../images/intelect.svg";
import modaIcon from "../../images/moda.svg";
import shorts from "../../images/shorts.svg";
import trend from "../../images/trend.svg"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { closeDrawer } from "../../store/reducers/Home/getVideo.slice";
import HomeIcon from "../../images/home.svg";
import HistoryIcon from "../../images/history.svg";
import helpIcon from "../../images/help.svg"
import reportIcon from "../../images/report.svg"
import settingIcon from "../../images/setting.svg"
import feedbackIcon from "../../images/feedback.svg"
import ytStudio from "../../images/yt-studio.svg"
import ytKids from "../../images/yt-kids.svg"

const Sidebar = () => {
  const { openMenu } = useTypedSelector((store) => store.allVideo);
  const dispatch = useAppDispatch();

  return (
    <Drawer
      anchor="left"
      open={openMenu}
      onClose={() => dispatch(closeDrawer())}
    >
      <div
        onClick={() => dispatch(closeDrawer())}
        className="w-[240px] bg-[#0f0f0f] text-white h-full"
      >
        <div className="h-[57px] w-[240px] pl-[16px] bg-[#0f0f0f] gap-[16px] flex items-center box-border fixed top-0 z-10">
          <IconButton
            size="large"
            color="inherit"
            className="icon-btn"
            onClick={() => dispatch(closeDrawer())}
          >
            <Menu className="w-[24px] h-[24px]" />
          </IconButton>
          <Link to="/">
            <img src={logo} alt="The YoutTube logo" />
          </Link>
        </div>
        <div className="scrollbar min-h-[calc(100vh- 57px)] mt-[57px] bg-[#0f0f0f]">
          <div className="py-[12px] border-b">
            <Link
              to={"/"}
              className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md"
            >
              <img className="" src={HomeIcon} alt="" /> <span>Главная</span>
            </Link>
            <Link
              to=""
              className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md"
            >
              <img src={shorts} />
              <span>Shorts</span>
            </Link>
            <Link
              to="/history"
              className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md"
            >
              <img src={HistoryIcon} />
              <span>История</span>
            </Link>
          </div>
          <div className="py-2 border-b">
            <div className="py-[8px] px-[24px] font-[500] text-[0.87rem] opacity-[0.7]">
              BEST OF YOUTUBE
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={trend} /> <span>Trend</span>
            </div>	
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={musicIcon} /> <span>Music</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={liveIcon} /> <span>Live</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={gamingIcon} /> <span>Gaming</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={filmIcon} /> <span>Movies</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={newsIcon} /> <span>News</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={soccerIcon} /> <span>Sports</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={spotlightIcon} /> <span>Education</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={modaIcon} /> <span>Moda</span>
            </div>
          </div>
          <div className="px-[32px] py-[16px] border-b">
            <span className="text-[0.9rem]">
              Sign in now to see your channels and recommendations!
            </span>
            <br />
            <button className="text-[0.8rem] font-[600] text-blue-500">
              SIGN IN
            </button>
          </div>
          <div className="py-2 border-b">
            <div className="px-[24px] py-[8px] font-[500] text-[0.87rem] opacity-[0.7]">
              MORE FROM YOUTUBE
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img className="h-[24px]" src={ytStudio} />
              <span>YouTube Studio</span>
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img className="h-[24px]" src={ytKids} />
              <span>YouTube Kids</span>
            </div>
          </div>
          <div className="py-[8px] border-b">
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={settingIcon} />
              Settings
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={reportIcon} />
              Report history
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={helpIcon} />
              Help
            </div>
            <div className="px-[24px] py-2 flex gap-[16px] cursor-pointer hover:bg-[#333] rounded-md">
              <img src={feedbackIcon} />
              Send feedback
            </div>
          </div>
          <div>
            <div className="px-[24px] pt-[16px]">
              <div>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  About
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Press
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Copyright
                </span>
              </div>
              <div>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Contact us
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Creators
                </span>
              </div>
              <div>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Advertise
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Developers
                </span>
              </div>
            </div>
            <div className="px-[24px] pt-[12px] pb-[16px]">
              <div>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Terms
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Privacy
                </span>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Policy & Safety
                </span>
              </div>
              <div>
                <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">
                  Test new features
                </span>
              </div>
            </div>
            <div className="px-[24px] py-[16px]">
              <span className="text-[0.8rem] text-[#aaa] mr-[8px] font-[500]">© 2024 YouTube, LLC</span>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
