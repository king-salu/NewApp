import React,{useState, useEffect} from 'react';
import './index.css';
import Header from './header';
import NewReleaseAndSearches from './new_release';


export default function Home(){
   
    return(
        <div id="site-content">
            <Header/>
            <NewReleaseAndSearches/>
        </div>
    );
}