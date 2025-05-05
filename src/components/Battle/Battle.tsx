import { useNavigate  } from "react-router-dom"
export const Battle = () => {
  const navigate = useNavigate()
  const handleClick = ()=>{

    navigate("/win-or-lose")
  }
  return (
    <section>
      
      <h1>Fight!</h1>
      <button onClick={()=>navigate("/versus")}>Back</button>
      <button onClick={handleClick}>Win or lose</button>
    </section>
  )
}