import logo from './logo.svg';
import './App.css';
import Product from './Components/Products';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container, } from 'react-bootstrap'
import Enquiry from './Components/Enquiry';
import Forms from './Components/Forms';
import Details from './Components/Details';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link> <Link className="text-white" to="/">Home</Link></Nav.Link>
              <Nav.Link><Link className="text-white" to="/form">Courses</Link></Nav.Link>
              <Nav.Link><Link className="text-white"  to="/details">Details</Link></Nav.Link>

            </Nav>
          </Navbar.Collapse>

        </Navbar>
        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/form" element={<Enquiry />}></Route>
          <Route path="/forms" element={<Forms />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
