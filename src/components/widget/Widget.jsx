import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  const [data, setData] = useState({
    title: "",
    isMoney: Boolean,
    link: "link",
    icon: <PersonOutlineOutlinedIcon />,
  });

  //   temporary data
  const amount = 100;
  const diff = 20;

  useEffect(() => {
    switch (type) {
      case "user":
        setData({
          title: "users",
          isMoney: false,
          link: "see all users",
          icon: <PersonOutlineOutlinedIcon className="icon" />,
        });
        break;

      case "order":
        setData({
          title: "orders",
          isMoney: true,
          link: "see all arders",
          icon: <ShoppingCartOutlinedIcon className="icon" />,
        });
        break;

      case "earnings":
        setData({
          title: "earnings",
          isMoney: true,
          link: "view net earnings",
          icon: <MonetizationOnOutlinedIcon className="icon" />,
        });
        break;

      case "balance":
        setData({
          title: "balance",
          isMoney: true,
          link: "see details",
          icon: <AccountBalanceOutlinedIcon className="icon" />,
        });
        break;
      default:
        break;
    }
  }, [type]);

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
