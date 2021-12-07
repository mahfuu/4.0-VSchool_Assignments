import React, {useState, useEffect} from "react"
import axios from "axios"

const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const dataDefault = {
        title: "",
        imgUrl: "",
        description: ""
    }
    
    const [data, setData] = useState({...dataDefault})

    const [list, setList] = useState([])

    const handleChange = e => {
        const {name, value} = e.target
        setData(prevData => ({...prevData, [name]: value}))
        console.log("typing")
    }

    const handleSubmit = e => {
        e.preventDefault()
        setData({...dataDefault})
        console.log("submitting")
    }

    useEffect(() => {
        axios.get("https://api.vschool.io/tmmixon/thing")
            .then(res => setList([res.data]))
            .catch(err => console.log("oops..." + err))
    }, [])

    return(
        <ThemeContext.Provider value={{data, list, handleChange, handleSubmit}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}