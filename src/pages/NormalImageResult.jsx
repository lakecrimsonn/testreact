import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../assets/pages/normalImageResult.css";

const NormalImageResult = () => {
  const location = useLocation();
  const [resultImage, setResultImage] = useState();
  const navigate = useNavigate();
  const serverURL = "http://192.168.0.21:8080";

  useEffect(() => {
    if (!location || !location.state || !location.state.result) {
      alert("잘못된 접근입니다.");
      navigate("/normal");
    }
  }, [location, navigate]); // navigate를 의존성 배열에 추가

  useEffect(() => {
    if (location) {
      setResultImage(serverURL + location.state.result);
    }
  }, [location]);
  console.log(resultImage);

  return (
    <div className="result__box">
      <img src={resultImage} alt="" className="result_image" />
    </div>
  );
};
export default NormalImageResult;
