import "./App.css";
import Content from "./Portofolio/Content";
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
      <SosialProve></SosialProve>
    </div>
  );
}

export default App;
