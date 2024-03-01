import React, { useEffect, useState } from "react";
import "./Play.css";
import like from "../assets 2/like.png";
import dislike from "../assets 2/dislike.png";
import share from "../assets 2/share.png";
import save from "../assets 2/save.png";
import { API_KEY } from "../../data";
import moment from "moment";
import { Link, useParams } from "react-router-dom";

function Play({ videoId, categoryId }) {
  // const videoId = useParams()
  const [apidata, setapidata] = useState(null);
  const [channeldata, setchaneldata] = useState(null);
  const [comment, setcomment] = useState([]);
  const [recomend, setrecomend] = useState([]);

  const fetchrecomendList = async () => {
    const recomendList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(recomendList_url)
      .then((response) => response.json())
      .then((data) => setrecomend(data.items));
  };

  const fetchvideoData = async () => {
    //fetching video data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setapidata(data.items[0]));
  };

  const fetchchannelData = async () => {
    if (!apidata || !apidata.snippet || !apidata.snippet.channelId) {
      console.error("Invalid apidata:", apidata);
      return; // Exit early if apidata is invalid
    }
    //fetching channel data
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apidata.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((response) => response.json())
      .then((data) => setchaneldata(data.items[0]));

    //fetching comment data
    const commentdata_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentdata_url)
      .then((response) => response.json())
      .then((data) => setcomment(data.items));
  };
  useEffect(() => {
    fetchrecomendList();
  }, [videoId]);
  useEffect(() => {
    fetchvideoData();
  }, [videoId]);
  useEffect(() => {
    fetchchannelData();
  }, [apidata]);

  const valueConvertere = (number) => {
    if (number >= 1000000) {
      return (
        Math.floor(number / 1000000) +
        "." +
        Math.floor((number % 1000000) / 100000) +
        "M"
      );
    } else if (number >= 100000 && number < 1000000) {
      return Math.floor(number / 1000) + "K";
    } else if (number >= 1000 && number < 100000) {
      return Math.floor(number / 1000) + "K";
    } else {
      return number;
    }
  };

  return (
    <div className="play-container">
      <div className="play">
        {/* <video src={video1} autoPlay loop muted controls></video> */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="play-text">
          <h1>{apidata?.snippet?.title}</h1>
        </div>
        <div className="play-day">
          <div className="play-day-left">
            {apidata &&
              apidata.snippet &&
              valueConvertere(apidata.statistics.viewCount)}{" "}
            &bull;{" "}
            {apidata ? `${moment(apidata.snippet.publishedAt).fromNow()}` : ""}
          </div>
          <div className="play-day-right">
            <img src={like} alt="" />
            <p>
              {apidata &&
                apidata.snippet &&
                valueConvertere(apidata.statistics.likeCount)}
            </p>
            <img src={dislike} alt="" />
            <p>
              {apidata &&
                apidata.snippet &&
                valueConvertere(apidata.statistics.dislikeCount)}
            </p>
            <img src={share} alt="" />
            <p>share</p>
            <img src={save} alt="" />
            <p>save</p>
          </div>
        </div>
        <hr />
        <div className="play-channel">
          <div className="play-channel-left">
            <img
              src={`${channeldata?.snippet?.thumbnails?.default?.url}`}
              alt=""
            />
            <div className="play-user">
              <h2>{apidata?.snippet?.channelTitle}</h2>
              <p>
                {channeldata?.snippet && channeldata.statistics
                  ? valueConvertere(channeldata.statistics.subscriberCount)
                  : "2M"}{" "}
                subscribers
              </p>
            </div>
          </div>
          <div className="play-channel-right">
            <button>Subscribe</button>
          </div>
        </div>
        <div className="play-description">
          {apidata?.snippet?.description.slice(0, 300) + "..." ||
            "description here"}
        </div>
        <hr />
        <div className="play-comment">
          <h4 id="comment-count">
            {apidata &&
              apidata.snippet &&
              valueConvertere(apidata.statistics.commentCount)}{" "}
            Comments
          </h4>

          {comment.map((item, index) => {
            return (
              <div className="comment" key={index}>
                <div className="comment-left">
                  <img
                    src={
                      item.snippet.topLevelComment.snippet.authorProfileImageUrl
                    }
                    alt=""
                  />
                </div>
                <div className="comment-right">
                  <div className="comment-right-1">
                    <h2>
                      {item.snippet.topLevelComment.snippet.authorDisplayName}
                    </h2>
                    <p>
                      {moment(
                        item.snippet.topLevelComment.publishedAt
                      ).fromNow()}
                    </p>
                  </div>
                  <div className="comment-right-1">
                    <span>
                      {item.snippet.topLevelComment.snippet.textDisplay.slice(
                        0,
                        180
                      ) + "..."}
                    </span>
                  </div>
                  <div className="comment-right-1">
                    <img src={like} alt="" />
                    <p style={{ marginLeft: "0.5rem", fontSize: "0.8rem" }}>
                      {valueConvertere(
                        item.snippet.topLevelComment.snippet.likeCount
                      )}
                    </p>
                    <img
                      src={dislike}
                      style={{ marginLeft: "1.2rem" }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="play-side-view">
        {recomend &&
          recomend.map((item, index) => {
            return (
              <Link
                to={`/video/${item.snippet.categoryId}/${item.id}`}
                className="play-side-box"
                key={index}
              >
                <div className="play-side-box-left">
                  <img src={item.snippet.thumbnails.medium.url} alt="" />
                </div>
                <div className="play-side-box-right">
                  <h1>{item.snippet.title}</h1>
                  <h3>{item.snippet.channelTitle}</h3>
                  <p>{valueConvertere(item.statistics.viewCount)} Views</p>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Play;
