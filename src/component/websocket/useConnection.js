import React, { useState, useEffect } from "react";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { v4 as uuidv4 } from "uuid";

var stompClient = null;
const useConnection = () => {
  const [userData, setUserData] = useState({
    userid: "",
    connected: false,
  });

  useEffect(() => {
    connect();
  }, []);

  const connect = () => {
    let Sock = new SockJS("http://localhost:8080/ws");
    stompClient = over(Sock);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    let cid = uuidv4();
    let receiveLink = "/id-receive/" + cid;
    setUserData({ userid: cid, connected: true });

    stompClient.send("/app/id", {}, JSON.stringify(cid));
    stompClient.subscribe(receiveLink, onReceiving);
  };

  const onError = (err) => {
    console.log(err);
  };

  // const goconnection = () => {
  //   connect();
  // };

  const onReceiving = (payload) => {
    var payloadData = JSON.parse(payload.body);
    console.log("message from server:", payloadData.specialId);
    sessionStorage.setItem("specialId", payloadData.specialId);
  };

  return (
    <>
      {/* {userData.connected ? (
        <div>
          <h3>{userData.userid} -- hello !</h3>
        </div>
      ) : (
        <div>
          <button type="button" onClick={goconnection}>
            click to connect to server
          </button>
        </div>
      )} */}
    </>
  );
};

export default useConnection;
