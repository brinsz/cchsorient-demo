import { NavLink, NavbarBrand, NavbarCollapse, NavbarToggle } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function SiteNav() {
    return(
        <header>
            <Navbar bg='danger' expand='lg'>
            <Container>
            <NavbarBrand>City Charter High School</NavbarBrand>
            <NavbarToggle aria-controls='basic-navbar-nav'/>
            <NavbarCollapse id='basic-navbar-nav'/>
            <Nav className='ms-md-auto'>
                <NavLink href='./login'>Log In</NavLink>
                <NavLink href='./register'>Register</NavLink>
            </Nav>
            
            </Container>
            </Navbar>
        </header>
    )
}

export default SiteNav; 