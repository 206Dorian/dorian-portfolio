import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import './App.css'
import 'bulma/css/bulma.min.css';
import ProjectCards from "./components/ProjectCards";
import ContactMe from "./components/ContactMe";

import Form from "./components/Form";


function App() {

  return (
    <container className="App">
      <br></br>
      <Header />
      <br></br>

      <Navigation />
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
      <br></br>


    </container>

  );
}

export default App;
