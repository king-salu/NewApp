
import React, {useState, useEffect, Component} from "react";
import './index.css';
import testimg from './large-gallery/gallery-9.jpg';

export default function new_releases(){
    function Newreleasecard(card){
        return(
            <div class="filterable-items">
                <div class="filterable-item concert">
                    <figure class="cover"><img src="#" alt="Kpakuromo"/></figure>
                    <div class="detail">
                        <h3>HOT SAMPLE ALBUM</h3>
                        <span class="year">2004</span>
                        <span class="track">17 tracks</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <main class="main-content">
				<div class="fullwidth-block gallery">
					<div class="container">
						<div class="content fullwidth">
							<h2 class="entry-title">New Release</h2>

                            <Newreleasecard/>

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