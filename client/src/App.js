import ProfileHome from "./components/ProfileHome";
import Resume from "./components/Resume";
import About from "./components/AboutMe";
import Contact from "./components/ContactMe";
import Navbar from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProfileHome />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
