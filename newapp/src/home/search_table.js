
import './index.css';
import testimg from './large-gallery/gallery-9.jpg';


export function rowCard(card){
    if (card){
        var cname = card.name;
        var ctype = card.type;
        var cimgusd = (card.images.length>0)? card.images[1].url : testimg;
        var curl    = card.spotify_url;
        var cartist = "";
        card.artists.forEach((element,key) => {
            cartist += `${element.name}` + ((key+1<card.artists.length)? ' x ': '');
        });

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
                <td>+ - : actions</td>
            </tr>
        );
    }
    
    return <></>;
}
