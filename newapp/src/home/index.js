import React,{useState, useEffect} from 'react';
import { setUserAccess } from '../functions/tools';
import { getUserAccess } from '../functions/tools';
import './index.css';
import Header from './header';
import NewRelease from './new_release';
import {SearchTab} from './search_table';
import testimg from './large-gallery/gallery-9.jpg';

export default function Home(){
     setUserAccess();
     const [sKeyword,setsKeyword] = useState("");
     let [searchRows,setSearchRows] = useState([]);

     async function getSearchResults(_keyword){
        if(_keyword.trim()!==''){
            const userid = getUserAccess().current;
            const searches = await fetch(`http://localhost:8888/api/v1/spotify/search/${userid}/${_keyword}`,
            {   method: 'GET',
                headers: {
                        "Content-Type": 'application/json'
                    }
            })
            .then((Response)=>Response.json())
            .then((ResponseData)=>{
                return ResponseData;
            });

            console.log(searches.details);
            let rows_search = [];
            searches.details.forEach(element => {
                let elementCard = rowCard(element);
                rows_search.push(elementCard);
            });

    
            setSearchRows(rows_search);
        }
       
    }
    function rowCard(card){
        if (card){
            var cname = card.name;
            var ctype = card.type;
            var cimgusd = (card.images.length>0)? card.images[0].url : testimg;
            var cartist = "";
            card.artists.forEach((element,key) => {
                cartist += `${element}` + ((key<card.artists.length)? ' x ': '');
            });

            return(
                <tr>
                    <td><img class='avatarimg' src={cimgusd} alt={cname}/></td>
                    <td>{ctype}</td>
                    <td>{cartist}</td>
                    <td>+ - : actions</td>
                </tr>
            );
        }
        
        return <></>;
    }
   
    return(
        <div id="site-content">
            <Header/>
            <div class='search_bar'>
                <input type='text' value ={sKeyword} onChange={(e) => setsKeyword(e.target.value)} />
                <button type='button' onClick={() => getSearchResults(sKeyword)}>search</button>
            </div>
            <NewRelease/>
            <SearchTab/>
            <table width="100%">
            {searchRows}
            </table>
            
        </div>
    );
}