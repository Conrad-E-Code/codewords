import {useState} from "react"
function WordCard({letter}) {
    // console.log(letter)
    const [show, setShow] = useState(false)
    const [color, setColor] = useState("")
    function handleClick(e) {
        console.log(e.target.childNodes[0].innerText)
        setShow(true)
        setColor(e.target.childNodes[0].innerText)
        if (e.target.childNodes[0].innerText === "K") {
            alert("YOU LOSE!")
        }
    }
return (
    // -${letter.toLowerCase()}
    <div className={`word-card${color}`} onClick={(e) => {handleClick(e)}}>
        <p>{letter}</p>
        {show ? letter : "word"}
    </div>
) 
}
export default WordCard