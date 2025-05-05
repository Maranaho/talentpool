import { useNavigate  } from "react-router-dom"
export const PickTrainer = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/pick-your-pokemons")
  }
  return (
    <section>
      
      <h1>PickTrainer</h1>
      <button onClick={()=>navigate("/")}>Back</button>
      <button onClick={handleClick}>Select your pokemons</button>
    </section>
  )
}