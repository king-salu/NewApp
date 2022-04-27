import React,{useState, useEffect} from 'react';
import './index.css';
import Header from './header';
import NewRelease from './new_release'
import Cookies from 'js-cookie';
import querystring from 'query-string';

export default function Home(){
    let qstring = querystring.parse(window.location.href);
    const u_id = qstring.u_id;
    const access_token = qstring.access_token;
    Cookies.set('tkntbu4cu',JSON.stringify({
        current: u_id,
        keyset: access_token
    }));


    async function getlogin() {
    const accesstoken = JSON.parse(Cookies.get('tkntbu4cu'));
    console.log(accesstoken);
    //console.log(JSON.parse(accesstoken));
    //alert(accesstoken.keyset);
    let details2 = await fetch("http://localhost:8888/api/v1/spotify/token/"+accesstoken.keyset,
        {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }
        });
  


    let user_details =  await fetch("http://localhost:8888/api/v1/spotify/user/",{method: 'GET'});
    alert ("i am here");
    console.log(user_details);
     

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