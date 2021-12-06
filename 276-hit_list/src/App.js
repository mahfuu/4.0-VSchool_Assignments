import React, {useState, useEffect} from "react"

import Bounty from "./Bounty.js"

function App() {
    const [bounties, setBounties] = useState([])
    const [loading, setLoading] = useState(false)

    const mappedBounties = bounties.map(bounty => <Bounty key={bounty.name} name={bounty.name} image={bounty.image} />)

    useEffect(() => {
        setLoading(true)
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(res => res.json())
            .then(setLoading(false))
            .then(data => setBounties(data))
            .catch(err => console.log("oops..." + err))
    }, [])

    return(
      <div className="container">{bounties.length ? mappedBounties : "No Active Bounties"}</div>
    )
}

export default App