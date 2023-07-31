import React from 'react'
import "./Profile.css";
const Mypro = ()=>{
    return (

<div>
<div>
<img
        className="sidenav__logo"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />
      </div>

    <div style={{maxWidth:"600px",margin:"0px auto"}}>
            <div style ={{
                display:"flex",
                justifyContent:"space-around",
                margin: "18px 0px",
                borderBottom:"1px solid grey"
            }}>
                <div>
                    <img style={{width:"160px",height:"160px",borderRadius:"100px"}}
                    src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                    />
                </div>
                <div className="desc">
                    <h1>Aqsa Ansari</h1>
                    <div  style={{display:"flex", justifyContent:"space-between",
                                width:"108%"}}>
                        <h3>9 posts</h3>
                        <h3>400 Followers</h3>
                        <h3>19 Following</h3>
                    </div>

                </div>
            </div>
        
            <div className="gallery">
                <img className="item" src="https://plus.unsplash.com/premium_photo-1670426502357-ec011df28064?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmxvd2VyJTIwYm91cXVldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1616394585067-d3e824140aa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYXZlbGxpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"/>
                <br>

                </br>
                <img className="item" src="https://images.unsplash.com/photo-1500835556837-99ac94a94552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                <img className="item" src="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1531604250646-2f0e818c4f06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHN1bnNldHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                <br>
                
                </br>
                <img className="item" src="https://images.unsplash.com/photo-1568572933382-74d440642117?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1523766775147-152d0d6e2adb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3ByaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"/>
                <img className="item" src="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2ludGVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"/>
                <br>
                
                </br>
            </div>
        </div>
        </div>

    );
}
export default Mypro
