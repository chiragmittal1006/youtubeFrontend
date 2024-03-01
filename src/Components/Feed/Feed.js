import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import moment from "moment";

function Feed({ category }) {
  const [data, setdata] = useState([]);

  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(videoList_url)
      .then((response) => response.json())
      .then((data) => setdata(data.items));
  };

  useEffect(() => {
    fetchData();
  },[category]);

  const valueConverter = (number) => {
        if(number >= 1000000){
            return Math.floor(number/1000000) + "." + Math.floor((number%1000000)/100000) + "M";
        }
        else if(number>=100000 && number<1000000){
            return Math.floor(number/1000) + "K";
        }
        else{
            return number
        }
  }

  return (
    <div className="feed-container">
      {data.map((item, index) => {
        return (
          <div className="feed" key={index}>
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`}>
              <div className="feed-image">
              <img src={`${item.snippet.thumbnails.high.url}`} alt="" />
              </div>
            </Link>
            <div className="feed-text">
              <h1>{`${item.snippet.title}`}</h1>
            </div>
            <div className="feed-channel">
              <h2>{`${item.snippet.channelTitle}`}</h2>
            </div>
            <div className="feed-day">{valueConverter(`${item.statistics.viewCount}`)} views &bull; {`${moment(item.snippet.publishedAt).fromNow()}`}</div>
          </div>
        );
      })}
    </div>
  );
}
export default Feed;
