import React, { useState } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  const [data, setData] = useState({
    title: "user",
    isMoney: true,
    link: "link",
    icon: <MonetizationOnOutlinedIcon classNameicon />,
  });

  //   temporary data
  const amount = 100;
  const diff = 20;

  //   switch (type) {
  //     case "user":
  //       data = {
  //         title: "users",
  //         isMoney: false,
  //         link: "see all users",
  //         icon: <PersonOutlineOutlinedIcon className="icon" />,
  //       };
  //       break;

  //     case "order":
  //       data = {
  //         title: "orders",
  //         isMoney: true,
  //         link: "see all arders",
  //         icon: <ShoppingCartOutlinedIcon className="icon" />,
  //       };
  //       break;

  //     case "earning":
  //       data = {
  //         title: "earnings",
  //         isMoney: true,
  //         link: "view net earnings",
  //         icon: <MonetizationOnOutlinedIcon className="icon" />,
  //       };
  //       break;

  //     case "balance":
  //       data = {
  //         title: "balance",
  //         isMoney: true,
  //         link: "see details",
  //         icon: <AccountBalanceOutlinedIcon className="icon" />,
  //       };
  //       break;

  //     default:
  //       break;
  //   }

  return (
    <>
      <div className="widget">
        <div className="left">
          <span>{data.title}</span>
          <span>
            {data.isMoney && "$"} {amount}{" "}
          </span>
          <span>{data.link}</span>
        </div>
        <div className="right">
          <div className="positive">
            <KeyboardArrowUpIcon />
            <span>{diff}</span>
          </div>
          {data.icon}
        </div>
      </div>
    </>
  );
};

export default Widget;
