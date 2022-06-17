import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <h1>admin</h1>
        </div>

        <div className="center">
          <ul>
            <p>Main</p>
            <li>
              <DashboardIcon />
              <span>Dashboard</span>
            </li>
            <li>
              <PersonOutlineIcon />
              <span>users</span>
            </li>
            <p>list</p>
            <li>
              <StoreIcon />
              <span>products</span>
            </li>
            <li>
              <CreditCardIcon />
              <span>orders</span>
            </li>
            <li>
              <LocalShippingIcon />
              <span>delivery</span>
            </li>
            <p>useful</p>
            <li>
              <InsertChartIcon />
              <span>stats</span>
            </li>
            <li>
              <NotificationsNoneIcon />
              <span>notifications</span>
            </li>
            <p>service</p>
            <li>
              <SettingsSystemDaydreamOutlinedIcon />
              <span>system health</span>
            </li>
            <li>
              <PsychologyOutlinedIcon />
              <span>logs</span>
            </li>
            <li>
              <SettingsSystemDaydreamOutlinedIcon />
              <span>settings</span>
            </li>
            <p>user</p>
            <li>
              <AccountCircleOutlinedIcon />
              <span>profile</span>
            </li>
            <li>
              <ExitToAppIcon />
              <span>logout</span>
            </li>
          </ul>
        </div>

        <div className="bottom">
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
