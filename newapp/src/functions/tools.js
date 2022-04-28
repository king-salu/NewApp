import Cookies from 'js-cookie';
import querystring from 'query-string';

export async function setUserAccess(){
    let qstring = querystring.parse(window.location.href);
    const u_id = qstring.u_id;
    const access_token = qstring.access_token;
    const vaccesstoken = {
        current: u_id,
        keyset: access_token
    };
    Cookies.set('tkntbu4cu',JSON.stringify(vaccesstoken));

    await fetch("http://localhost:8888/api/v1/spotify/token/"+vaccesstoken.keyset,
        {
            mode: 'no-cors',
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            }
        });
}

export function getUserAccess(){
    const accesstoken = JSON.parse(Cookies.get('tkntbu4cu'));

    return accesstoken;
}

export async function getUserInfo() {
    const accesstoken = JSON.parse(Cookies.get('tkntbu4cu'));

    let user_details =  await fetch("http://localhost:8888/api/v1/spotify/user/"+accesstoken.current,
    {   method: 'GET',
        headers: {
                "Content-Type": 'application/json'
            }})
            .then((Response)=>Response.json())
            .then((ResponseData)=>{
                return ResponseData;
            });
    //alert ("i am here");
    console.log('result: ',user_details.details);
    //const main = user_details.details;

     return user_details.details;
}
