import Cookies from 'js-cookie';
import { urls } from './functions/tools';

// export function user_validation(){
//     const vCook = Cookies.get('tkntbu4cu');
    
// }

export function Logout(){
    Cookies.remove('tkntbu4cu');
    const address = urls('main_back');
    window.location.href = `${address}`;
}