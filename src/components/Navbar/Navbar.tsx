import logo from "../../images/yt-logo.svg";
import searchIcon from "../../images/search.svg";
import bell from "../../images/bell.svg";
import create from "../../images/create.svg";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { openDrawer } from "../../store/reducers/Home/getVideo.slice";
import Sidebar from "../Sidebar/Sidebar";
import { useAppDispatch } from '@/hooks/useAppDispatch'

const Navbar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  function searchVideo(e: any) {
    e.preventDefault();
    if (search !== '') {
      navigate(`/result/${search}`)
    }
  }
  return (
    <header className="px-[16px] box-border flex items-center justify-center h-[57px] w-full fixed top-0 z-[999] bg-[#0f0f0f]">
        <nav className="w-full flex justify-between items-center gap-[50px]">
          <div className="flex gap-4 items-center">
            <IconButton
              size="large"
              color="inherit"
              className="icon-btn"
              onClick={() => dispatch(openDrawer())}
            >
              <MenuIcon color="inherit" />
            </IconButton>
            <Link to={"/"}>
              <img className="logo cursor-pointer" src={logo} alt="" />
            </Link>
          </div>
          <form onSubmit={searchVideo} className="w-[40%]">
            <span className="flex items-stretch">
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="w-full max-w-[575px] border-[0.1px] border-[#D3D3D3] text-white 
									bg-transparent py-[5px] pl-[15px] rounded-l-[20px] outline-none"
                type="search"
                placeholder="Введите вопрос"
              />
              <button className="flex justify-center items-center border border-l-0 border-[#d3d3d3] bg-[#2C2D37] py-[3px] px-[15px] rounded-r-[20px] stroke-[1px]">
                <img className="w-[17px] h-[17px]" src={searchIcon} alt="" />
              </button>
            </span>
          </form>
          <div className="flex items-center gap-4">
            <IconButton size="large" color="inherit" className="icon-btn">
              <img className="cursor-pointer" src={create} alt="" />
            </IconButton>
            <IconButton size="large" color="inherit" className="icon-btn">
              <img className="cursor-pointer" src={bell} alt="" />
            </IconButton>
            <img
              className="rounded-full cursor-pointer"
              src="https://picsum.photos/40"
              alt=""
            />
          </div>
        </nav>
      <Sidebar />
    </header>
  );
};

export default Navbar;
