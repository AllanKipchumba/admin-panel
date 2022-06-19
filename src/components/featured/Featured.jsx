import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Featured = () => {
  return (
    <>
      <div className="featured">
        <div className="top">
          <h1>total revenue</h1>
          <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
          <div>
            <CircularProgressbar value={60} text="70%" strokeWidth={5} />
          </div>
          <p>Total sales made today</p>
          <p>$1000</p>
          <p>
            Previous transactions processing. Last payements may not be
            included.
          </p>
          <div className="target">
            <div className="negative">
              <p>target</p>
              <div>
                <KeyboardArrowDownIcon />
                <p>$20.3</p>
              </div>
            </div>
            <div>
              <p>last week</p>
              <div>
                <KeyboardArrowUpIcon /> <p>$20.3</p>
              </div>
            </div>
            <div>
              <p>last month</p>
              <div>
                <KeyboardArrowUpIcon />
                <p>$20.3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
