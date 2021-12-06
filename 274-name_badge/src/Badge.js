import React from "react"

function Badge(props) {
    return(
        <div className="badge">
            <div className="badge--head">Badge:</div>
            <div className="badge--main">
                <div>Name: {props.data.firstName} {props.data.lastName}</div>
                <div>Phone: {props.data.phone}</div>
                <div>Place of Birth: {props.data.placeOfBirth}</div>
                <div>Favorite Food: {props.data.favoriteFood}</div>
                <div>Email: {props.data.email}</div>
                <div>{props.data.bio}</div>
            </div>
        </div>
    )
}

export default Badge