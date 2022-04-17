import React from "react";
import "./Frame1.css";

function Frame1(props) {
  const { selectWallet, place, history, card2Images, card2Title } = props;

  return (
    <div className="container-center-horizontal">
      <div className="frame-1 screen">
        <div className="header">
          <div className="overlap-group1">
            <div className="header-line"></div>
            <div className="header-background"></div>
            <img
              className="logo"
              src="https://anima-uploads.s3.amazonaws.com/projects/625961d7055e3522141b6dc4/releases/625c6ae591fd1ec47148b51f/img/logo@2x.svg"
            />
            <div className="overlap-group">
              <div className="select-wallet valign-text-middle">{selectWallet}</div>
              <img
                className="vector"
                src="https://anima-uploads.s3.amazonaws.com/projects/625961d7055e3522141b6dc4/releases/625c6ae591fd1ec47148b51f/img/vector@2x.svg"
              />
            </div>
            <div className="nav dunbartall-ultra-normal-red-berry-18px">
              <div className="place valign-text-middle">{place}</div>
              <div className="history valign-text-middle">{history}</div>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="card2-image">
            <img className="card2-images" src={card2Images} />
          </div>
          <div className="overlap-group-1">
            <h1 className="card2-title valign-text-middle">{card2Title}</h1>
          </div>
        </div>
        <img
          className="frame-25"
          src="https://anima-uploads.s3.amazonaws.com/projects/625961d7055e3522141b6dc4/releases/625961e04a30c51dd8c28efa/img/frame-25@2x.svg"
        />
        <img
          className="line-14"
          src="https://anima-uploads.s3.amazonaws.com/projects/625961d7055e3522141b6dc4/releases/6259660d760e73dc0cc45f19/img/line-14@1x.svg"
        />
      </div>
    </div>
  );
}

export default Frame1;
