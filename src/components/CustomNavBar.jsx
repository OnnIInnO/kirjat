import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//This function is the navigation bar
function CustomNavbar() {

  return (
    <div className = "NavBar">
    <Navbar variant="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="test">Testi</Nav.Link>
            <Nav.Link href="blog">Blogi</Nav.Link>
            <Nav.Link href="science">Tiede Taustalla</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}
 
export default CustomNavbar;