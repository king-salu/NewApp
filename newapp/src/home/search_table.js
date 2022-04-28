import React, {useState, useEffect} from "react";
import { getUserAccess } from '../functions/tools';
import './index.css';
import testimg from './large-gallery/gallery-9.jpg';

export function SearchTab(){

   
   
  
  
    

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

    // useEffect(() => {
    //     getSearchResults();
    // }, []);

    return (
        <>
        <h2 class="entry-title">Search Results</h2>
        
        <table width="100%">
            
        </table>
        </>
    );

}