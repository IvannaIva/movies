import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "../components/styles/App.css";
import { styled } from "@mui/system";
import { ReactComponent as LikeIcon } from "./img/like.svg";
import { ReactComponent as DislikeIcon } from "./img/dislike.svg";
import { ReactComponent as RewindIcon } from "./img/rewind.svg";
import { useDispatch } from "react-redux";
import { likeMovie, dislikeMovie } from "../store/moviesSlice";
import { getNextMovie } from "./movieUtils";

const ButtonsTabs = styled(Tabs)({
  width: "292px",
  height: "92px",
  backgroundColor: "#545963",
  borderRadius: "30px",
});
export default function ButtonsCard({ handleLike, handleDislike, handlePreviousMovie }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleLikeClick = () => {
    handleLike();
  };

  const handleDislikeClick = () => {
    handleDislike();
  };

  const handleRewindClick = () => {
    handlePreviousMovie();
  };

  return (
    <div className="buttonsTabs">
      <ButtonsTabs
        value={value}
        onChange={handleChange}
        aria-label="icon tabs example"
      >
        <Tab icon={<LikeIcon />} aria-label="like" onClick={handleLikeClick} />
        <Tab
          icon={<DislikeIcon />}
          aria-label="dislike"
          onClick={handleDislikeClick}
        />
        <Tab
          icon={<RewindIcon />}
          aria-label="rewind"
          onClick={handleRewindClick}
        />
      </ButtonsTabs>
    </div>
  );
}
