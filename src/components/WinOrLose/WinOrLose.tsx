import { useNavigate  } from "react-router-dom"
export const WinOrLose = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/")
  }
  return (
    <section>
      
      <h1>WinOrLose</h1>
      <button onClick={()=>navigate("/battle")}>Next fight</button>
      <button onClick={handleClick}>Start again</button>
    </section>
  )
}