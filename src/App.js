import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import './App.css'
import 'bulma/css/bulma.min.css';
import ProjectCards from "./components/pages/ProjectCards";
import ContactMe from "./components/pages/ContactMe";

import Form from "./components/Form";

import PortfolioContainer from "./components/PortfolioContainer";

function App() {

  return (
    <container className="App">
      <br></br>

<PortfolioContainer/>


      {/* <Navigation />

      <br></br>
      <Header />
      <br></br>


      <Projects />
      <br></br>

      <ProjectCards />
      <br></br>

      <ContactMe />
      <br></br>

      <Form />
      <br></br>
      <br></br>

      <Footer />
      <br></br>
      <br></br> */}

    </container>

  );
}

export default App;
