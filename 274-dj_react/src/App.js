import React, {useState} from "react"

const App = () => {
    const [colors, setColors] = useState(["white", "white","white","white"])
    
    const djSmall = () => colors[0] === "white" ? setColors(["black", "black", "black", "black"]) : setColors(["white", "white","white","white"])
    const djParty = () => setColors(prevColors => ["purple", "purple", prevColors[2], prevColors[3]])
    const djLeft = () => setColors(prevColors => [prevColors[0], prevColors[1], "blue", prevColors[3]])
    const djRight = () => setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], "blue"])
    const djBigI = () => setColors(prevColors => ["firebrick", prevColors[1], prevColors[2], prevColors[3]])
    const djBigII = () => setColors(prevColors => [prevColors[0], "firebrick", prevColors[2], prevColors[3]])
    const djBigIII = () => setColors(prevColors => [prevColors[0], prevColors[1], "firebrick", prevColors[3]])
    const djBigIV = () => setColors(prevColors => [prevColors[0], prevColors[1], prevColors[2], "firebrick"])

    const squares = colors.map(item => <div className="squares" style={{backgroundColor: item}}></div>)
    
    return (
        <div>
        {squares}
        <button onClick={djSmall}>SMALL BUTTON</button>
        <button onClick={djParty}>PARTY BUTTON</button>
        <button onClick={djLeft}>PRO LEFT</button>
        <button onClick={djRight}>PRO RIGHT</button>
        <button onClick={djBigI}>BIG BUTTON I</button>
        <button onClick={djBigII}>BIG BUTTON II</button>
        <button onClick={djBigIII}>BIG BUTTON III</button>
        <button onClick={djBigIV}>BIG BUTTON IV</button>
        </div>
    )

}

export default App