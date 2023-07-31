import React, {useState} from 'react'
import Post from './posts/Post';
import Suggestions from "./Suggestions";
import "./Timeline.css";
function Timeline() {
    const [posts,setPosts]= useState([
        {
            user: "anur_g",
            postImage: 
            "https://clv.h-cdn.co/assets/17/26/1280x1280/square-1498838810-gettyimages-461493851.jpg",
            likes:121,
            timestamp:"2h",
        },
        {
            user: "aqsa._.09",
            postImage:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
            likes:118,
            timestamp:"6h",
        },
        {
            user: "kukuu",
            postImage:
            "https://i.pinimg.com/originals/f2/09/37/f20937632a9a958cc72ab3a9122918cf.jpg",
            likes:138,
            timestamp:"1d",
        },
        {
            user: "xyz",
            postImage:
            "https://www.wallpapers13.com/wp-content/uploads/2016/05/Beautiful-flower-with-soft-pink-blue-sky-and-white-clouds-Desktop-Wallpaper-HD-for-mobile-phones-and-laptops-1680x1050.jpg",
            likes:13,
            timestamp:"2d",
        },
    ]);
    return(
        <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
                {posts.map((post) => (
                    <Post user={post.user} 
                    postImage={post.postImage}
                    likes={post.likes} 
                    timestamp={post.timestamp}/>
                ))}
            </div>
        </div> 
        <div className="timeline__right"></div> 
            <Suggestions />
        </div>
    )
}

export default Timeline
