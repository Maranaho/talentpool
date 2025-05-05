import { useNavigate  } from "react-router-dom"
export const Bracket = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/versus")
  }
  return (
    <section>
      
      <h1>Bracket</h1>
      <button onClick={()=>navigate("/pick-an-arena")}>Back</button>
      <button onClick={handleClick}>Meet your oponent</button>
    </section>
  )
}