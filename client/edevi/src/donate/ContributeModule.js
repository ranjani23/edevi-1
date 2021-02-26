import React from "react";
import "../css/Contribute.css";
import Ganga from "../images/Ganga.png"
import Diamond from "../images/Blue_Diamond.svg"
function ContributeModule(){
    return(
        <div className="singleContributeBlock"> 

            <div className="name">
                <p>Ganga</p>
            </div>

            <div className="content">
            <p>Ganga is a 19-year-old student whose mother works as domestic help earning Rs 
            5000 monthly to support her kids and mentally ill husband</p>
            </div>

            <div className="imageBlock"> 
            <img src={Ganga}/>
            <div className="amountRaised">
                <p> 0 / 6,575 <small>raised</small></p>
            </div>
            </div>

            <div className="description"> 
            <p>The family lives in a rented house. All Ganga needs is some support to 
                continue her online studies to realise her dream of becoming a teacher one day
            </p>
            <p>Seeing her family’s helplessness in these trying circumstances has only increased Ganga’s motivation to
            study further so she can help and support her mother</p>
            </div>

            <div className="description"> 
            <p> <img src={Diamond} alt="" /> Needs for online connectivity</p>
            <p>Smart Phone : Rs. 6250/-</p> 
            <p>Monthly mobile data pack: Rs. 325/- for one month</p>
            </div>

            <div className="amountList">
            <h4>Sponsor Ganga</h4>
            <ul>
                <li>10</li>
                <li>100</li>
                <li>200</li>
                <li>500</li>
            </ul>
        </div>

        <div className="formBlock"> 
            <form action="">
                <input type="text" className="customForm" name="otheramount" placeholder="Other amount" />
                <input type="text" className="customForm" name="message" placeholder="Write Message Here" />
            </form>
        </div>


        <div className="anonymous">
        <p>Give Anonymously
            <label className="switch">
            <input type="checkbox" checked />
            <span className="slider round"></span>
            </label>
        </p>
        </div>

        <div className="donateBtn">
            <a href="" className="donate">Donate Now</a>
        </div>

    </div>
    );
}
export default ContributeModule;