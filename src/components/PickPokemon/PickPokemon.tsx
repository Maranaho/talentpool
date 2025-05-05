import { useNavigate  } from "react-router-dom"
export const PickPokemon = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/pick-an-arena")
  }
  return (
    <section>
      
      <h1>PickPokemon</h1>
      <button onClick={()=>navigate("/pick-a-trainer")}>Back</button>
      <button onClick={handleClick}>Select an arena</button>
    </section>
  )
}