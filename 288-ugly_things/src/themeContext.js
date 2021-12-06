import React, {useState} from "react"

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
        console.log(data)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setList(prevList => [...prevList, data])
        setData({...dataDefault})
    }

    return(
        <ThemeContext.Provider value={data, handleChange, handleSubmit}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}