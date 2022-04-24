import React,{useState, useEffect} from 'react';
import './index.css';
import Header from './header';
import NewRelease from './new_release'
import Cookies from 'js-cookie';

export default function Home(){
    const accesstoken = Cookies.get('access_tko');
    const [detail, setDetails] = useState([]);
    let data = () => { 
        fetch("http://localhost:8888/api/v1/spotify/library",{
            method: 'GET',
            access_token: accesstoken,
            headers: {
                "Content-Type": 'application/json'
            }
        })
        .then(resp=>{
            return resp.json();
        })
        .then(rdata=>{
            setDetails(rdata);
        });
        
    }

    useEffect(()=>{
        data()
    });

    //data.json();

    return(
        <div id="site-content">
            <h2>hey{detail}--</h2>
            <Header/>
            <NewRelease/>
        </div>
    );
}