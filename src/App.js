import { useState } from "react";
import Header from "./Login/Header";
import Login from "./Login/Login";
import List from "./Login/List";
import LikeButton from './Components/LikeButton'
import DarkMode from "./Components/DarkMode";



export default function App() {
  // const [isList, setisList] = useState()
  // const handleSubmit=() => {
  //   setisList(true)
  
  return (
    <>
      {/* {!isList && <Login handleSubmit={handleSubmit}/>}
      {isList && <List handleSubmit={handleSubmit}/>}
      <LikeButton/> */}
      <Login/>
      {/* <DarkMode/> */}
     
    </>
  )
}