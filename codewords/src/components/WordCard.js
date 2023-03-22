import {useState} from "react"
function WordCard({letter}) {
    // console.log(letter)
    const [show, setShow] = useState(false)
    function handleClick(e) {
        console.log(e.target.innerText)
        setShow(true)
    }
return (
    <div className="word-card" onClick={(e) => {handleClick(e)}}>
        {show? letter : "word"}
    </div>
) 
}
export default WordCard