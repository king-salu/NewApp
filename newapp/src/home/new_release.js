
import React, {useState, useEffect} from "react";
import { getUserAccess } from '../functions/tools';
import './index.css';
import testimg from './large-gallery/gallery-9.jpg';

export default function New_releases(){
    let [releaseRows,setReleaseRows] = useState([]);

    async function getNewRelease(){
        const userid = getUserAccess().current;
        const releases = await fetch("http://localhost:8888/api/v1/spotify/library/"+userid,
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

    function Newreleasecard(card){
        if(card){
            var imgusd = (card.images.length>0)? card.images[0].url : testimg;
            var cname = card.name;
            var cyear = card.release_date.substring(0,4);
            var ctracks = card.total_tracks;
            return(
                <div class="filterable-items">
                    <div class="filterable-item concert">
                        <figure class="cover"><img src={imgusd} alt={cname}/></figure>
                        <div class="detail">
                            <h3>{cname}</h3>
                            <span class="year">{cyear}</span><br/>
                            <span class="track">{ctracks} tracks</span>
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
        <main class="main-content">
				<div class="fullwidth-block gallery">
					<div class="container">
						<div class="content fullwidth">
							<h2 class="entry-title">New Release</h2>

                            {releaseRows}

                            <table width="100%">
                                {/*<thead>
                                <tr>
                                    <th>Name 1</th>
                                    <th>Details 2</th>
                                    <th>Order ID 3</th>
                                    <th>Price 4</th>
                                </tr>
                                </thead>*/}

                                <tbody>
                                <tr>
                                    <td><img class='avatarimg' src={testimg} alt=''/></td>
                                    <td>Details</td>
                                    <td>#12345</td>
                                    <td>$3.00</td>
                                </tr>

                                <tr>
                                    <td>Item Two</td>
                                    <td>Details</td>
                                    <td>#12345</td>
                                    <td>$6.00</td>
                                </tr>
                                </tbody> 
                            </table>
                        </div>
                    </div>
                </div>
        </main>
    );
}