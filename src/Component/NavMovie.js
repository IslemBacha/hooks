import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

 const NavMovie=()=>{
    return(
        <div>
         <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">movies</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}
export default NavMovie