import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/home/Home';
import { Navigate } from "react-router-dom";
import Buy from './components/buy/Buy';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar className="color-nav" variant="light">
        <Container id="Container">
          <img alt="logo" src='car.png' id="logoTitle" ></img>
          <Nav className="me-auto" id="homenav">
          <Link to="/Home" type="button" id="HomeNavFont" className="nav-link active">
            Home
            </Link>
            <Link to="/Buy" type="button" id="BuyNavFont" className="nav-link active">
            Buy
            </Link>
            <Link to="/Home" type="button" id="AboutNavFont" className="nav-link active">
            About
            </Link>
            <Link id="loginBtn" to="/Home" type="button" className="nav-link active">Register/Login</Link>
            <Navbar.Brand id="cartBtn" type="button"><img typeof='button' alt="cart" id="cart" src="cart.png"></img></Navbar.Brand>
            <Navbar.Brand id="userBtn" type="button"><img typeof='button' alt="user" id="user" src="user.png"></img></Navbar.Brand>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
            <Route element={<Home />} path="/Home"></Route>
            <Route path="/" element={<Navigate to="/Home" />} />
    </Routes>
    <Routes>
            <Route element={<Buy />} path="/Buy"></Route>
    </Routes>
      </Router>
    </div>
  );
}

export default App;
