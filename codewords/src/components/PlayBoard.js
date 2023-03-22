
function Playboard({board}) {

return(
    <div className="play-board">
              <tr className="top-row">{board[0].map((card)=>{
                return(<td>{card}</td>
            )})}</tr>
            <tr className="second-row">{board[1].map((card)=>{
                return(<td>{card}</td>
            )})}</tr>
            <tr className="third-row">{board[2].map((card)=>{
                return(<td>{card}</td>
            )})}</tr>
            <tr className="fourth-row">{board[3].map((card)=>{
                return(<td>{card}</td>
            )})}</tr>
            <tr className="fifth-row">{board[4].map((card)=>{
                return(<td>{card}</td>
            )})}</tr>
    </div>
)
}

export default Playboard