import React,{useState, useEffect} from 'react';
import ReactDOM from "react-dom";
import './index.css';
import Header from './header';
import NewRelease from './new_release'
import Cookies from 'js-cookie';

export default function Home(){

    async function getlogin() {
    const accesstoken = Cookies.get('access_tko');
    
    let item ={
                "access_token": accesstoken
            }
    let details2 = await fetch("http://localhost:8888/api/v1/spotify/token/", {
             mode: 'no-cors',
             method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        });
   
     /*let details = await fetch("http://localhost:8888/api/v1/spotify/library/", {
             mode: 'no-cors',
             method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        });*/
  

    //details =  await details.json();
    alert ("i am here");
    //console.log(details);
     

}
   
useEffect(() => {
    getlogin();
  }, []);
  
    //data.json();

    return(
        <div id="site-content">
            {/* {details &&
        details.map((details, id) => (
          <div className="item-container" key={id}>
            Id:{details.id} <div className="title">Title:{details.title}</div>
          </div>
        ))} */}
            {/* <h2>hey{details}--</h2> */}
            <Header/>
            <NewRelease/>
        </div>
    );
}