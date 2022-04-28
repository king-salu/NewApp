import React,{useState, useEffect} from 'react';
import { setUserAccess } from '../functions/tools';
import './index.css';
import Header from './header';
import NewRelease from './new_release';
import {SearchTab} from './search_table';

export default function Home(){
     setUserAccess();
     let [sKeyword,setsKeyword] = useState("");
    return(
        <div id="site-content">
            <Header/>
            <div class='search_bar'>
                <input type='text' />
                <button type='button' value={sKeyword} onClick={(e)=>setsKeyword(e.target.value)}>search</button>
            </div>
            <NewRelease/>
            <SearchTab keyword={sKeyword} />
        </div>
    );
}