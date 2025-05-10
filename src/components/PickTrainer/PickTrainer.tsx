import { useNavigate  } from "react-router-dom"
import { Trainers } from "../Trainers"
export const PickTrainer = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/pick-your-pokemons")
  }
  return (
    <section>
      
      <h1>PickTrainer</h1>
      <Trainers/>
      <button onClick={()=>navigate("/")}>Back</button>
      <button onClick={handleClick}>Select your pokemons</button>
    </section>
  )
}