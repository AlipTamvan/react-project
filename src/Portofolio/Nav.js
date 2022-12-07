import { Link } from "react-router-dom"

export default function Nav(){
 return(
    <nav className=" container-fluid navbar navbar-expand-lg navbar-dark">
    
      <Link className="navbar-brand" href="#"><b>Aliva.</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Support</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="#">Services</Link>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-light btn-sm  btn-my-works" href="#">My Works</button>
          </li>
         
        </ul>
       
      </div>

  </nav>
 )
}