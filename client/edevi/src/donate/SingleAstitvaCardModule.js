import React from 'react';
import GreenArrow from "../images/Green_arrow_up.svg";
function SingleAstitvaCardModule(props){
    return(
            <div className="singleContribution">
                <img src={props.img} />
                <div className="percent">
                    <p>60%</p>
                    <img src={GreenArrow}/>
                    <div className="progress"></div>
                </div>
                <div className="contentOfChild">
                   <div className="nameOfChild">
                       <p>Ganga</p>
                       <p>Needs for online connectivity & educational aid</p>
                   </div>
                </div>
            </div>
    );
}


export default SingleAstitvaCardModule;