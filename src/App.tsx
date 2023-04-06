import Header from "./components/header";
import Footer from "./components/footer";
import { ContainerHome } from "./components/containerHome";
import ContainerContact from "./components/ContainerContact";
import ContainerAbout from "./components/ContainerAbout";
import ContainerGather from "./components/ContainerGather";
import ContainerOurPlans from "./components/ContainerOurPlans";


function App() {
  return (
    <div className="app">
      <Header />
      <ContainerHome />
      <ContainerAbout />
      <ContainerGather />
      <ContainerContact />
      <ContainerOurPlans />
      
      <Footer />
    </div>
  )
}

export default App
