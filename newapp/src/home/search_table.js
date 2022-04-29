
import './index.css';
import testimg from './large-gallery/gallery-9.jpg';
import {AddToLibrary,RemoveFromLibrary} from '../functions/tools';


export function rowCard(card){
    if (card){
        var cid     = card.id;
        var cname   = card.name;
        var ctype   = card.type;
        var cimgusd = (card.images.length>0)? card.images[1].url : testimg;
        var curl    = card.spotify_url;
        var cartist = "";
        card.artists.forEach((element,key) => {
            cartist += `${element.name}` + ((key+1<card.artists.length)? ' x ': '');
        });
        var cChainval = `item/${cid}/type/${ctype}`;

        return(
            <tr>
                <td>
                    <a href={curl} target="_blank" rel="noopener noreferrer" placeholder={cname}>
                        <img class='avatarimg' src={cimgusd} alt={cname}/>
                    </a>
                </td>
                <td>{cname}</td>
                <td>{ctype}</td>
                <td>{cartist}</td>
                <td>
                    <button class="button2" title="Add to my Library" value={cChainval} 
                        onClick={ (e)=> AddToLibrary(e.target.value)}>+</button>
                    <button class="button2" title="Remove from my Library" value={cChainval} 
                        onClick={ (e)=> RemoveFromLibrary(e.target.value)}>-</button>
                </td>
            </tr>
        );
    }
    
    return <></>;
}
