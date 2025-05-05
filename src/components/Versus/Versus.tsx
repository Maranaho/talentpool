import { useNavigate  } from "react-router-dom"
export const Versus = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/battle")
  }
  return (
    <section>
      
      <h1>Meet your oponent</h1>
      <button onClick={()=>navigate("/bracket")}>Back</button>
      <button onClick={handleClick}>Fight</button>
    </section>
  )
}