import { useNavigate  } from "react-router-dom"
export const PickArena = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/championship-bracket")
  }
  return (
    <section>
      
      <h1>PickArena</h1>
      <button onClick={()=>navigate("/pick-your-pokemons")}>Back</button>
      <button onClick={handleClick}>Championship bracket</button>
    </section>
  )
}