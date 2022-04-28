import React,{useState, useEffect}  from 'react';
import './index.css';
import { getUserInfo } from '../functions/tools';
import testimgh from './large-gallery/gallery-1.jpg';

export default function Header(){
    let [fullname,setFullname] = useState("");

    async function getUInfo(){
        const user_info = await getUserInfo();
        //console.log('user details',user_info);
        setFullname(user_info.display_name);
    }
    
    useEffect(() => {
        getUInfo();
    }, []);
    
    
    
    return(
        <header class="site-header">
            <div class='container'>
                <div id='branding'>
                    <img src={testimgh} alt="Site Title" class='avatarimg'/>
                    <small class="siteDescription">{fullname}</small>
                </div>
                
                <nav class='main_navigation'>
                    <button type="button" class='toggle_menu'><i class="fa fa-bars"></i></button>
                    <ul class='menu'>
                        <li class='menu_item'><a href="#">My Library</a></li>
                        <li class='menu_item'><a href="#">Logout</a></li>
                    </ul>
                    <div class="mobile-menu"></div>
                </nav>
            </div>
        </header>
    );
}