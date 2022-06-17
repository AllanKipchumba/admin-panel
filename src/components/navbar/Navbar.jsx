import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

const navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="wrapper">
          <div className="search">
            <input type="text" palceholder="Search..." />
            <SearchOutlinedIcon />
          </div>
          <div className="items">
            <div>
              <LanguageOutlinedIcon />
              <span>english</span>
            </div>
            <div>
              <DarkModeOutlinedIcon />
            </div>
            <div>
              <FullscreenExitOutlinedIcon />
            </div>
            <div>
              <NotificationsNoneOutlinedIcon />
            </div>
            <div>
              <ChatBubbleOutlineOutlinedIcon />
            </div>
            <div>
              <ListOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default navbar;