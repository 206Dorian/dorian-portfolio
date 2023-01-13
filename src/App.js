import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import './App.css'
import 'bulma/css/bulma.min.css';
import ProjectCards from "./components/ProjectCards";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <container className="App">

      <Header />


      <Navigation />


      <Projects />

      <ProjectCards />


      <ContactMe />


      <Footer />


    </container>
  );
}

export default App;
