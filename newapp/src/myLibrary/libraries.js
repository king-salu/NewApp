import { useState,useEffect } from 'react';
import '../home/index.css';
import { getUserAccess, RemoveFromLibrary, urls } from '../functions/tools';
import testimg from '../images/default-user-profile-picture_hvoncb.png';

export default function Libraries(){
    let [libraryCards,setLibraryCards] = useState([]);
    function LibraryCard(card){
        if(card){
            var imgusd = (card.images.length>0)? card.images[0].url : testimg;
            var cname = card.name;
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
                            {/* <span class="year">{cyear}</span><br/>
                            <span class="track">{ctracks} tracks</span><br/> */}
                            <button class="site" title="Remove from my Library" value={cChainval} 
                                onClick={ (e)=> RemovefromMyLibrary(e.target.value)}>x</button>
                        </div>
                    </div>
                </div>
            );
        }
        
        return <></>;
    }

    async function RemovefromMyLibrary(cchain){
        RemoveFromLibrary(cchain);
        document.getElementById(cchain).remove()
    }

    async function getLibraries(){
        const userid = getUserAccess().current;
        const address = urls('main_back');
        const libraries = await fetch(`${address}/api/v1/spotify/library/${userid}`,
        {   method: 'GET',
            headers: {
                    "Content-Type": 'application/json'
                }
        })
        .then((Response)=>Response.json())
        .then((ResponseData)=>{
            return ResponseData;
        });

        console.log(libraries);
        let rowsU = [];
        libraries.data.forEach(element => {
            const libCard = LibraryCard(element);
            rowsU.push(libCard);
        });

        setLibraryCards(rowsU);
    }

    useEffect(() => {
        getLibraries();
    }, []);


    return(
        <main class="main-content">
				<div class="fullwidth-block gallery">
					<div class="container">
						<div class="content fullwidth">
							<h2 class="entry-title">My Library</h2>
                            {libraryCards}
                        </div>
                    </div>
                </div>
        </main>
    );
}