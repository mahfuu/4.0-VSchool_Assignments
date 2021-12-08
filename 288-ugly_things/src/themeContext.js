import React, {useState} from "react"
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

    const [editData, setEditData] = useState({...dataDefault})

    const handleChange = e => {
        const {name, value} = e.target
        setData(prevData => ({...prevData, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post("https://api.vschool.io/tmmixon/thing",{...data})
            .then(res => {
                console.log(res.data)
                getData()
            })
            .catch(err => console.log(err))
        setData({...dataDefault})
    }

    const handleDelete = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.delete(`https://api.vschool.io/tmmixon/thing/${thingID}`)
            .then(res => {
                console.log("deleted" + res.data)
                getData()
            })
            .catch(err => "oops, delete is not working..." + err)
    }

    const handleEdit = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.get(`https://api.vschool.io/tmmixon/thing/${thingID}`)
            .then(res => setEditData({...res.data}))
            .catch(err => console.log("edit not working" + err))
    }

    const editOnChange = e => {
        const {name, value} = e.target
        setEditData(prevEditData => ({...prevEditData, [name]: value}))
    }

    const handleSaveChanges = (e, thingID) => {
        console.log(e)
        console.log(thingID)
        axios.put(`https://api.vschool.io/tmmixon/thing/${thingID}`, editData)
            .then(res => {
                getData()
                console.log(res.data)
                setEditData({...dataDefault})
            })
            .catch(err => "savechange not working" + err)
    }

    const getData = () => {
        axios.get("https://api.vschool.io/tmmixon/thing")
            .then(res => setList(res.data))
            .catch(err => console.log("oops..." + err))
        console.log("getting data")
    }

    return(
        <ThemeContext.Provider
            value={{
                data,
                list,
                editData,
                getData,
                handleChange,
                handleSubmit,
                handleDelete,
                handleEdit,
                editOnChange,
                handleSaveChanges
            }}
        >
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}