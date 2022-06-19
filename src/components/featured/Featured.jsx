import React from "react";
import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

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
        </div>
      </div>
    </>
  );
};

export default Featured;
