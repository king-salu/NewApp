import React,{useState, useEffect}  from 'react';
import './index.css';
import { getUserInfo } from './functions/tools';
import testimgh from './images/default-user-profile-picture_hvoncb.png';
import { Logout } from './logout';

export default function Header(){
    let [fullname,setFullname] = useState("");
    let [dpimg,setdp] = useState(testimgh);

    async function getUInfo(){
        console.log('user details');
        const user_info = await getUserInfo();
        
        setFullname(user_info.display_name);
        if (user_info.images.length > 0){
            setdp(user_info.images[0].url);
        }
    }
    
    useEffect(() => {
        getUInfo();
    }, []);
    
    
    
    return(
        <header class="site-header">
            <div class='container'>
                <div id='branding'>
                    <img src={dpimg} alt="Site Title" class='avatarimg'/>
                    <h2 class="siteDescription">{fullname}</h2>
                </div>
                
                <div class="topnav" id="myTopnav">
                    <a href="/home" class="active">Home</a>
                    <a href="/myLibrary">My Library</a>
                    <a href="#" onClick={()=>{ Logout(); }}>Logout</a>
                    <a href="javascript:void(0);" class="icon" onClick={()=> { 
                        var x = document.getElementById("myTopnav");
                        if (x.className === "topnav") {
                          x.className += " responsive";
                        } else {
                          x.className = "topnav";
                        }
                     }}>
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        </header>
    );
}