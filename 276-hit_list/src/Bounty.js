import React from "react"

function Bounty(props){
    return(
        <div className="box">
            <img alt={props.name} src={props.image} />
            <div className="name">{props.name}</div>
        </div>
    )
}

export default Bounty