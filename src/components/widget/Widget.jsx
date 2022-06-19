import React, { useEffect, useState } from "react";
import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import SpinnerIcon from "@rsuite/icons/legacy/Spinner";

const Widget = ({ type }) => {
  const [data, setData] = useState({
    title: "",
    isMoney: Boolean,
    link: "",
    icon: <SpinnerIcon pulse style={{ fontSize: "2em" }} />,
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
          icon: (
            <PersonOutlineOutlinedIcon
              className="icon"
              style={{
                color: "crimson",
                backgroundColor: "rgba(255, 0, 0, 0.2)",
              }}
            />
          ),
        });
        break;

      case "order":
        setData({
          title: "orders",
          isMoney: true,
          link: "see all arders",
          icon: (
            <ShoppingCartOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
        });
        break;

      case "earnings":
        setData({
          title: "earnings",
          isMoney: true,
          link: "view net earnings",
          icon: (
            <MonetizationOnOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(0, 128, 0, 0.2)",
                color: "green",
              }}
            />
          ),
        });
        break;

      case "balance":
        setData({
          title: "balance",
          isMoney: true,
          link: "see details",
          icon: (
            <AccountBalanceOutlinedIcon
              className="icon"
              style={{
                backgroundColor: "rgba(128, 0, 128, 0.2)",
                color: "purple",
              }}
            />
          ),
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
          <div>{data.icon}</div>
        </div>
      </div>
    </>
  );
};

export default Widget;
