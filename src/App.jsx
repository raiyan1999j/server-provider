import { useState } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SetupServer from "./Components/SetupServer/SetupServer";
import CreateService from "./Components/CreateService/CreateService";

export default function App(){
  const [currentModal,setModal] = useState("setupServer");

  const conditionalModal=(condition)=>{
   setModal(condition)
  }
  return(
    <>
      <header>
        <Navbar/>
      </header>

      <main>
      {
        currentModal == "setupServer"?
        <SetupServer 
        modalCondition={(subject)=>{conditionalModal(subject)}}/>:
        currentModal == "createService"?
        <CreateService/>:
        ""
      }
        
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}