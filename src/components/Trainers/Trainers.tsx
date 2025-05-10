import drayden from "../../assets/trainers/drayden.png"
import leon from "../../assets/trainers/leon.png"
import chaka from "../../assets/trainers/chaka.png"
import serena from "../../assets/trainers/serena.png"
import hikuyamae from "../../assets/trainers/hikuyamae.png"
import greyman from "../../assets/trainers/greyman.png"
import styles from "./TrainersStyles.module.scss"

import { useContext } from "react"
import { PokemonContext } from "../../context"

export const Trainers = () => {
  const { state: { selectedTrainer }, dispatch } = useContext(PokemonContext)

  const handleClick = (trainer:string)=>{
    dispatch({type:"SET_TRAINER",payload:trainer})
  }
  return (
    <section className={styles.Trainers}>
      <button className={selectedTrainer === "drayden" ? styles.selected : ""} onClick={()=>handleClick("drayden")}><img src={drayden} alt="drayden" /></button>
      <button className={selectedTrainer === "leon" ? styles.selected : ""} onClick={()=>handleClick("leon")}><img src={leon} alt="leon" /></button>
      <button className={selectedTrainer === "chaka" ? styles.selected : ""} onClick={()=>handleClick("chaka")}><img src={chaka} alt="chaka" /></button>
      <button className={selectedTrainer === "serena" ? styles.selected : ""} onClick={()=>handleClick("serena")}><img src={serena} alt="serena" /></button>
      <button className={selectedTrainer === "hikuyamae" ? styles.selected : ""} onClick={()=>handleClick("hikuyamae")}><img src={hikuyamae} alt="hikuyamae" /></button>
      <button className={selectedTrainer === "greyman" ? styles.selected : ""} onClick={()=>handleClick("greyman")}><img src={greyman} alt="greyman" /></button>
    </section>
  )
}