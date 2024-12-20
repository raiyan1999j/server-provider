import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import SetupServer from "./Components/SetupServer/SetupServer";

export default function App(){
  return(
    <>
      <header>
        <Navbar/>
      </header>

      <main>
        <SetupServer/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  )
}