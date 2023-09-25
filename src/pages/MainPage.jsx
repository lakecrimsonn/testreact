import React from "react";
import { Link } from "react-router-dom";
import "../assets/pages/mainpage.css";

const MainPage = () => {
  return (
    <>
      {/* <img src="background.gif" className="background" /> */}
      <div className="mainContainer">
        <div className="btnBox main__btnBox">
          <Link to="/modeSelect" className="btn main__btn">
            사진 생성
          </Link>
        </div>
      </div>
    </>
  );
};
export default MainPage;
