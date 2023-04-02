import Header from "./components/header";
import Footer from "./components/footer";
import { ContainerHome } from "./components/containerHome";
import ContainerContact from "./components/ContainerContact";
import ContainerAbout from "./components/ContainerAbout";
import ContainerGather from "./components/ContainerGather";

function App() {

  return (
    <div>
      <Header />
      <ContainerHome />
      <ContainerAbout />
      <ContainerGather />
      <ContainerContact />
      
      <Footer />
    </div>
  )
}

export default App
