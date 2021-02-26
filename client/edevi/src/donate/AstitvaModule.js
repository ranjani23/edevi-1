import React from "react";
import "../css/Astitva.css";
import SingleAstitvaCardModule from "./SingleAstitvaCardModule";
import Ganga from "../images/Ganga.png";
function AstitvaModule(){
    return (
        <div className="astitvaBlock">
            <h3 className="title">ASTITVA Community Programme</h3>
            <div className="astitvaListBlock">
            <p>The ASTITVA Community Programme by the KRITI TEAM in 
            villages in Dehradun welcomes contributions for:
            </p>
            <ul>
                <li>Mobile data pack for online education connectivity</li>
                <li>Mobile phones for older children/ college students for continuing learning</li>
                <li>Educational scholarship i.e. school fees for girl and boy students whose parents cannot manage due to no/ loss of jobs due to Covid19</li>
            </ul>
            </div>

            <div className="astitvaContributions">
                <h4>The ASTITVA Community Programme by the KRITI TEAM in villages in Dehradun welcomes contributions for:</h4>
                <h2>Little Hearts:</h2>
                <div className="contributionsBlock">
                    <SingleAstitvaCardModule img ={Ganga}/>
                    <SingleAstitvaCardModule img ={Ganga}/>
                    <SingleAstitvaCardModule img ={Ganga}/>
                    <SingleAstitvaCardModule img ={Ganga}/>
                </div>
            </div>

</div>
)
}
export default AstitvaModule;