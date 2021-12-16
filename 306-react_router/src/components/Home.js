import React from "react"

import {useNavigate} from "react-router-dom"

function Home() {
    const navigate = useNavigate()
    return(
        <div className="home--container">
            <h1>We are your plumber.</h1>
            <img className="home--image" src="https://www.plumbingbyjake.com/wp-content/uploads/2015/11/VIGILANT-plumber-fixing-a-sink-shutterstock_132523334-e1448389230378.jpg" />
            <div onClick={() => navigate("/services")} className="home--services">
                <h2>See what Services we will provide you.</h2>
            </div>
            <div>
                <h2 onClick={() => navigate("/about")} className="home--about">Trust us by knowing more About who we are.</h2>
            </div>
        </div>
    )
}

export default Home