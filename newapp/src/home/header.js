//import React,{useState, useEffect}  from 'react';
import './index.css';
import testimgh from './large-gallery/gallery-1.jpg';

export default function header(){
    return(
        <header class="site-header">
            <div class='container'>
                <div id='branding'>
                    <img src={testimgh} alt="Site Title" class='avatarimg'/>
                    <small class="siteDescription">The music never stops!</small>
                </div>
                
                <nav class='main_navigation'>
                    <button type="button" class='toggle_menu'><i class="fa fa-bars"></i></button>
                    <ul class='menu'>
                        <li class='menu_item'><a href="#">My Library</a></li>
                        <li class='menu_item'><a href="#">Logout</a></li>
                    </ul>
                    <div class="mobile-menu"></div>
                </nav>

                <div class='search_bar'>
                    <input type='text' />
                    <button type='button' >search</button>
                </div>
            </div>
        </header>
    );
}