import React from "react";
import "./main.css";
import OwnerImg from "../assets/owner/punkhead.png";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={OwnerImg} alt="Main character" />
          </div>
        </div>
        <div className="punkDetails">
          <div className="title">activePunk.name</div>
          <span className="itemNumber">-#tokenId3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={OwnerImg} alt="punk highligth" />
          </div>

          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x3259189e3bf595ce7f065ab0258e7ee11ea0c3a9</div>
              <div className="ownerHandle">@chrisDevBlog</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
