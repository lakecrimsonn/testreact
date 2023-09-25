import React from "react";
import { Link } from "react-router-dom";
import "../assets/pages/modeSelect.css";

const ModeSelect = () => {
  const loginData = JSON.parse(localStorage.getItem("login"));
  const checkLogin = () => {
    if (loginData) {
      window.location.replace("/premium");
    }
    if (!loginData) {
      alert("준비중인 서비스입니다.");
    }
  };

  return (
    <>
      <div class="cards-list">
        <div class="card card1">
          <Link to="/normal">
            <div class="card_image">
              <img src="standard.png" alt="" />
            </div>
            <div class="card_title title-white">
              <p>Standard</p>
            </div>
          </Link>
        </div>

        <div class="card card2" onClick={checkLogin}>
          <div class="card_image">
            <img
              src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif"
              alt=""
            />
          </div>
          <div class="card_title title-white">
            <p>Premium</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModeSelect;
