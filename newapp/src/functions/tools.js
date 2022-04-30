import Cookies from 'js-cookie';
import querystring from 'query-string';
import { Logout } from '../logout';

export function urls(type = ''){
    let _url = [];
    let modes = ['main_front','main_back'];
    let count_in = modes.length - 1;
    while(count_in >= 0){
        switch(type){
            case "main_front":
                _url['main_front'] = 'http://localhost:3000';
                count_in = -10;
                break;

            case  "main_back":
                _url['main_back']  = 'http://localhost:8888';
                count_in = -10;
                break;
            
            default:
                type = modes[count_in];
                count_in--;
                break;
        }
    }
    
    const returns = ((count_in<-1)? _url[type] : _url);
    
    return returns;
}

export async function setUserAccess(){
    let qstring = querystring.parse(window.location.href);
    const u_id = qstring.u_id;
    const access_token = qstring.access_token;
    if (u_id != null && access_token != null){
        const vaccesstoken = {
            current: u_id,
            keyset: access_token
        };
        //console.log(vaccesstoken);
        Cookies.set('tkntbu4cu',JSON.stringify(vaccesstoken));
        const address = urls('main_back');
        await fetch(`${address}/api/v1/spotify/token/${vaccesstoken.keyset}`,
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                }
            });
    }
}

export function getUserAccess(){
    const accesstoken = JSON.parse(Cookies.get('tkntbu4cu'));

    return accesstoken;
}

export async function getUserInfo() {
    const vCook = Cookies.get('tkntbu4cu');
    if(vCook!=null){
        const accesstoken = JSON.parse(vCook);

        let user_details =  await fetch("http://localhost:8888/api/v1/spotify/user/"+accesstoken.current,
        {   method: 'GET',
            headers: {
                    "Content-Type": 'application/json'
            }
        })
        .then((Response)=>Response.json())
        .then((ResponseData)=>{
            return ResponseData;
        });
        //alert ("i am here");
        //console.log('result: ',user_details.details);
        //const main = user_details.details;

        return user_details.details;
    }

    Logout();
}

export async function AddToLibrary(cardchain){
    const userid = getUserAccess().current;
    const feedback = await fetch(`http://localhost:8888/api/v1/spotify/library/${userid}/${cardchain}`,
    {   method: 'PUT',
        headers: {
                "Content-Type": 'application/json'
            }
    });

    console.log(feedback);
}

export async function RemoveFromLibrary(cardchain){
    const userid = getUserAccess().current;
    const feedback = await fetch(`http://localhost:8888/api/v1/spotify/library/${userid}/${cardchain}`,
    {   method: 'DELETE',
        headers: {
                "Content-Type": 'application/json'
            }
    });

    console.log(feedback);
}