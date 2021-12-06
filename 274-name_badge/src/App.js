import React, {useState} from "react"

import Badge from "./Badge"

function App() {
  const [badgeData, setBadgeData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    bio: "",
  })
  
  const [badgeList, setBadgeList] = useState([])
  
  const handleChange = e => {
    const {name, value} = e.target
    setBadgeData(prevBadgeData => ({...prevBadgeData, [name]: value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setBadgeList(prevBadgeList => [...prevBadgeList, badgeData])
    setBadgeData({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favoriteFood: "",
        bio: "",
    })
  }
  
  const badges = badgeList.map(badge => <Badge key={badge} data={badge} />)
  
  return(
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <input
        className="form--first-name"
        name="firstName"
        placeholder="First Name"
        value={badgeData.firstName}
        onChange={handleChange}
        minlength="3"
        required
        />
        <input
        className="form--last-name"
        name="lastName"
        placeholder="Last Name"
        value={badgeData.lastName}
        onChange={handleChange}
        minlength="3"
        required
        />
        <br/>
        <input
        className="form--email"
        name="email"
        placeholder="Email"
        value={badgeData.email}
        onChange={handleChange}
        minlength="3"
        required
        />
        <input
        className="form--place"
        name="placeOfBirth"
        placeholder="Place of Birth"
        value={badgeData.placeOfBirth}
        onChange={handleChange}
        minlength="3"
        required
        />
        <br/>
        <input
        className="form--phone"
        name="phone"
        placeholder="Phone"
        type="number"
        value={badgeData.phone}
        onChange={handleChange}
        minlength="10"
        maxlength="10"
        required
        />
        <input
        className="form--food"
        name="favoriteFood"
        placeholder="Favorite Food"
        value={badgeData.favoriteFood}
        onChange={handleChange}
        required
        />
        <br/>
        <textarea
        className="form--bio"
        name="bio"
        placeholder="Tell us about yourself"
        value={badgeData.bio}
        onChange={handleChange}
        />
        <button className="form--button" type="submit">Submit</button>
      </form>
      {badges}
    </div>
  )
}

export default App