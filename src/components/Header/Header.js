import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../images/logo.png'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
const Header = () => {
    const { logOut, user } = useAuth();
    return (
        <>
            <Navbar className="bg-color" expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        <div>
                            <img className="img-fluid logo-img" src={logo} alt="" />
                            <span className='text-white fw-bold'>Travel Hunter</span>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/home" className='animate__animated animate__bounceInRight'>
                                <Link className='text-white text-decoration-none user-name' to="/home">Home</Link>
                            </Nav.Link>
                            {
                                user?.email &&
                                <Nav.Link href="/myPlans" className='animate__animated animate__bounceInRight'>
                                    <Link className='text-white text-decoration-none user-name' to="/myPlans">My Events</Link>
                                </Nav.Link>
                            }
                            {
                                user?.email &&
                                <Nav.Link href="/allPlans" className='animate__animated animate__bounceInRight'>
                                    <Link className='text-white text-decoration-none user-name' to="/allPlans">Manage Events</Link>
                                </Nav.Link>
                            }
                            {
                                user?.email &&
                                <Nav.Link href="/addTour" className='animate__animated animate__bounceInRight'>
                                    <Link className='text-white text-decoration-none user-name' to="/addTour">Add a new Tour</Link>
                                </Nav.Link>
                            }

                            <Nav.Link>
                                <img className='user-img img-fluid animate__animated animate__bounceInRight' src={user?.photoURL} alt="" />
                            </Nav.Link>

                            {user?.email ?
                                <Nav.Link className='animate__animated animate__bounceInRight'>
                                    <a className='text-warning text-decoration-none text-danger fw-bold' onClick={logOut} href="/login">Log Out</a>
                                </Nav.Link>
                                :
                                <Nav.Link href="/login" className='animate__animated animate__bounceInRight'>
                                    <NavLink className='text-white text-decoration-none' to="/login">Login</NavLink>
                                </Nav.Link>
                            }
                            {
                                user?.email &&
                                <Nav.Link className='animate__animated animate__bounceInRight'>
                                    <span className='user-name-main text-white'><i class="fas fa-user"></i> {user?.displayName}</span>
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </ >

    );
};

export default Header;