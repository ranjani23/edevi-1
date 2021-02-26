import React from 'react';

function SingleCardModule(props){
    return(
        <div className="singleCard">
        <img src={props.img} alt="tutorialswebsite logo"/>
          <p>{props.content}</p>
        </div>
    );
}

export default SingleCardModule;