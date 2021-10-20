import React from 'react';
import './Header.css'
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    const {user , logOut} = useAuth();
    return (
        <div id="home">
            <Navbar className="navbar" expand="lg" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><h2 className="web-title">PERFECT <span className="secondary-color">FIT</span></h2></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-5">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#pricing">Pricing</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#trainers">Trainers</Nav.Link>
                            <Nav.Link as={HashLink} to="/plans">Plans</Nav.Link>
                            <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="#avatarName">{user.displayName}</Nav.Link>
                            <Nav.Link className="p-0" href="#avatarIMG">
                                { user.displayName && <img className="avatar-img" src={user.photoURL} alt="Avatar" />}
                            </Nav.Link>
                            {
                                user.displayName ? <button onClick={logOut} className="logout-btn">Log Out</button> :
                                <Link to="/login"><button className="login-btn">Log In</button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
              </Container>
            </Navbar>
        </div>
    );
};

export default Header;