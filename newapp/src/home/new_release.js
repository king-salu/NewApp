
import React, {useState, useEffect, Suspense} from "react";
import { getUserAccess, setUserAccess, AddToLibrary, urls} from '../functions/tools';
import './index.css';
import {rowCard} from './search_table';
import testimg from '../images/default-user-profile-picture_hvoncb.png';

export default function New_releases(){
    
    const [sKeyword,setsKeyword] = useState("");
    let [releaseRows,setReleaseRows] = useState([]);
    let [searchRows,setSearchRows] = useState([]);

    async function getNewRelease(){
        const userid = getUserAccess().current;
        const address = urls('main_back');
        
        const releases = await fetch(`${address}/api/v1/spotify/library/newrelease/${userid}`,
        {   method: 'GET',
            headers: {
                    "Content-Type": 'application/json'
                }
        })
        .then((Response)=>Response.json())
        .then((ResponseData)=>{
            return ResponseData;
        });

        //console.log(releases);

        let rowsU = [];
        releases.details.forEach(element => {
            let elementCard = Newreleasecard(element);
            rowsU.push(elementCard);
        });

        //console.log(rowsU);

        setReleaseRows(rowsU);

        //return releases;
    }

    async function getSearchResults(_keyword){
       
        if(_keyword.trim()!==''){
            const userid = getUserAccess().current;
            const address = urls('main_back');
            const searches = await fetch(`${address}/api/v1/spotify/search/${userid}/${_keyword}`,
            {   method: 'GET',
                headers: {
                        "Content-Type": 'application/json'
                    }
            })
            .then((Response)=>Response.json())
            .then((ResponseData)=>{
                return ResponseData;
            });
    
            console.log(searches);
            var cardRows = [];
            searches.details.forEach((element,key)=>{
                const roweach = rowCard(element);
                cardRows.push(roweach);
            });
    
            setSearchRows(cardRows);
        }
       
    }

    function Newreleasecard(card){
        if(card){
            var imgusd = (card.images.length>0)? card.images[0].url : testimg;
            var cname = card.name;
            var cyear = card.release_date.substring(0,4);
            var ctracks = card.total_tracks;
            var curl    = card.spotify_url;
            var cid     = card.id;
            var ctype   = card.type;
            var cChainval = `item/${cid}/type/${ctype}`;
            return(
                <div class="filterable-items" id={cChainval}>
                    <div class="filterable-item concert">
                        <figure class="cover">
                            <a href={curl} target="_blank" rel="noopener noreferrer" title={cname}><img src={imgusd} alt={cname}/></a>
                        </figure>
                        <div class="detail">
                            <h3>{cname}</h3>
                            <span class="year">{cyear}</span><br/>
                            <span class="track">{ctracks} tracks</span><br/>
                            <button class="site" title="Add to my Library" value={cChainval} 
                                onClick={ (e)=> AddToLibrary(e.target.value)}>+</button>
                            <button class="site" title="Remove From my Library" value={cChainval} 
                            onClick={ (e)=> AddToLibrary(e.target.value)}>-</button>
                        </div>
                    </div>
                </div>
            );
        }
        
        return <></>;
    }

    useEffect(() => {
        getNewRelease();
    }, []);

    return (
        <>
        <div class='search_bar'>
            <input type='text' value ={sKeyword} onChange={(e) => setsKeyword(e.target.value)} />
            <button type='button' onClick={() => getSearchResults(sKeyword)}>search</button>
        </div>
        <main class="main-content">
				<div class="fullwidth-block gallery">
					<div class="container">
						<div class="content fullwidth">
							<h2 class="entry-title">New Release</h2>
                            {releaseRows}
                        </div>
                    </div>

                    <div class="container">
                        <div class="content fullwidth">
                            <h2 class="entry-title">Search Results</h2>
                            <table width="100%"> 
                                <Suspense fallback={<h1>Loading Search...</h1>}>
                                    {searchRows}
                                </Suspense>
                            </table>
                        </div>
                    </div>
                </div>
        </main>
        </>
    );
}