import { useNavigate  } from "react-router-dom"
export const Home = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/pick-a-trainer")
  }
  return (
    <section>
      
      <h1>Home</h1>
      <button onClick={handleClick}>Pick your trainer</button>
    </section>
  )
}