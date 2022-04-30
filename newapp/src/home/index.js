import React,{useState, useEffect} from 'react';
import { setUserAccess } from '../functions/tools';
import './index.css';
import Header from '../header';
import Footer from '../footer';
import NewReleaseAndSearches from './new_release';



export default function Home(){
    setUserAccess();
    return(
        <div id="site-content">
            <Header/>
            <NewReleaseAndSearches/>
            <Footer/>
        </div>
    );
}