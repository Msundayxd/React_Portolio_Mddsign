import {Routes, Route, Link, useLocation} from 'react-router-dom';
import Homepage from './Home';
import Projectspage from './Projects';
import Aboutpage from './About';
import Contactpage from './Contact';
import Footer from './Footer';

function App() {

  const location = useLocation();

  return (
    <div className="Appbody">
      <div className="Div-nav">
          <div className="img-logo">
            <Link to="/"> 
              <img className="Logo-nav" src={require("./assets/images/other/mddsign_logo.png")} alt="mddsign website logo" /> 
            </Link>
          </div>
            <div className="Links-nav">
              <nav>
                <li>
                  <Link to="/" className={`Link-txt ${location.pathname === "/" ? "active" : ""}`}> <ul> HOME </ul> </Link>
                  <Link to="/projects" className={`Link-txt ${location.pathname === "/projects" ? "active" : ""}`}> <ul> PROJECTS </ul> </Link>
                  <Link to="/about" className={`Link-txt ${location.pathname === "/about" ? "active" : ""}`}> <ul> ABOUT </ul> </Link>
                  <Link to="/contact" className={`Link-txt ${location.pathname === "/contact" ? "active" : ""}`}> <ul> CONTACT </ul> </Link>
                </li>
              </nav>
            </div>
          </div>
            
            <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/projects" element={<Projectspage />}></Route>
              <Route path="/about" element={<Aboutpage />}></Route>
              <Route path="/contact" element={<Contactpage />}></Route>
            </Routes>

            <footer>
              <div>
              <Footer />
              </div>
            </footer>

    </div>

  );
}

export default App;
