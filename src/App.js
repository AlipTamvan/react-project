import "./App.css";
import Contact from "./Portofolio/Contact.js";
import Content from "./Portofolio/Content";
import Footer from "./Portofolio/Footer";
import Nav from "./Portofolio/Nav";
import SosialProve from "./Portofolio/SosialProve";

function App() {
  return (
    <div className="App">
      <div className="container">
        <span className="lingkaran"></span>
        <div className="row">
          <div className="col">
            <Nav></Nav>

            <Content></Content>
          </div>
        </div>
      </div>
      <SosialProve id="sosialProve"></SosialProve>

      <Contact></Contact>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
