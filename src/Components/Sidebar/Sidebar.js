import React from 'react'
import "./Sidebar.css"
import home from "../assets 2/home.png"
import gaming from "../assets 2/game_icon.png"
import auto from "../assets 2/automobiles.png"
import sports from "../assets 2/sports.png"
import entertainment from "../assets 2/entertainment.png"
import technology from "../assets 2/tech.png"
import music from "../assets 2/music.png"
import blogs from "../assets 2/blogs.png"
import news from "../assets 2/news.png"
import pewdipie from "../assets 2/jack.png"
import beast from "../assets 2/gerard.png"
import justin from "../assets 2/tom.png"
import craft from "../assets 2/megan.png"
import nas from "../assets 2/cameron.png"
function Sidebar({sidebar,category,setcategory}) {
  return (
    <div className={`sidebar ${sidebar?"":"sidebar-small"}`}>
      <div className={`sidebar-1 ${category===0?"sidebar-lal":""}`} onClick={()=>setcategory(0)}>
        <img src={home} alt="" />
        <span>Home</span>
      </div>
      <div className={`sidebar-1 ${category===20?"sidebar-lal":""}`} onClick={()=>setcategory(20)}>
        <img src={gaming} alt="" />
        <span>Gaming</span>
      </div>
      <div className={`sidebar-1 ${category===2?"sidebar-lal":""}`} onClick={()=>setcategory(2)}>
        <img src={auto} alt="" />
        <span>Automobiles</span>
      </div>
      <div className={`sidebar-1 ${category===17?"sidebar-lal":""}`} onClick={()=>setcategory(17)}>
        <img src={sports} alt="" />
        <span>Sports</span>
      </div>
      <div className={`sidebar-1 ${category===24?"sidebar-lal":""}`} onClick={()=>setcategory(24)}>
        <img src={entertainment} alt="" />
        <span>Entertainment</span>
      </div>
      <div className={`sidebar-1 ${category===28?"sidebar-lal":""}`} onClick={()=>setcategory(28)}>
        <img src={technology} alt="" />
        <span>Technology</span>
      </div>
      <div className={`sidebar-1 ${category===10?"sidebar-lal":""}`} onClick={()=>setcategory(10)}>
        <img src={music} alt="" />
        <span>Music</span>
      </div>
      <div className={`sidebar-1 ${category===22?"sidebar-lal":""}`} onClick={()=>setcategory(22)}>
        <img src={blogs} alt="" />
        <span>Blogs</span>
      </div>
      <div className={`sidebar-1 ${category===25?"sidebar-lal":""}`} onClick={()=>setcategory(25)}>
        <img src={news} alt="" />
        <span>News</span>
      </div>
      <hr/>
      <h5 id='sidebar-h5'>Subscribed</h5>
      <div className="sidebar-2">
        <img src={pewdipie} alt="" />
        <span>PewDiePie</span>
      </div>
      <div className="sidebar-2">
        <img src={beast} alt="" />
        <span>Mr Beast</span>
      </div>
      <div className="sidebar-2">
        <img src={justin} alt="" />
        <span>Justin Bieber</span>
      </div>
      <div className="sidebar-2">
        <img src={craft} alt="" />
        <span>5 min Crafts</span>
      </div>
      <div className="sidebar-2">
        <img src={nas} alt="" />
        <span>Nas Daily</span>
      </div>
    </div>
  )
}

export default Sidebar