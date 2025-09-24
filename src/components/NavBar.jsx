import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router';
import Logo from '../assets/logo.png';
import Search from '../assets/search.svg';
import Cart from '../assets/cart.svg';

const NavBar = () => {
	return (
		<div className='my-container'>
			<Navbar expand="lg" className="bg-body-tertiary my-nav py-4">
				<Container>
					<NavLink to={'/'}><img src={Logo} alt="logo" /></NavLink>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<NavLink className="nav-link" to={'/'}>Home</NavLink>
							<NavLink className="nav-link" to={'/about'}>About</NavLink>
							<NavDropdown title="Services" id="basic-nav-dropdown">
								<NavLink className="dropdown-item" to={'/action'}>Action</NavLink>
								<NavLink className="dropdown-item" to={'/action_2'}>Another action</NavLink>
								<NavLink className="dropdown-item" to={'/something'}>Something</NavLink>
							</NavDropdown>
							<NavDropdown title="Projects" id="basic-nav-dropdown">
								<NavLink className="dropdown-item" to={'/action'}>Action</NavLink>
								<NavLink className="dropdown-item" to={'/something'}>Something</NavLink>
							</NavDropdown>
							<NavDropdown title="News" id="basic-nav-dropdown">
								<NavLink className="dropdown-item" to={'/action'}>Action</NavLink>
								<NavLink className="dropdown-item" to={'/action_2'}>Another action</NavLink>
								<NavLink className="dropdown-item" to={'/something'}>Something</NavLink>
							</NavDropdown>
							<NavDropdown title="Shop" id="basic-nav-dropdown">
								<NavLink className="dropdown-item" to={'/action'}>Action</NavLink>
								<NavLink className="dropdown-item" to={'/action_2'}>Another action</NavLink>
							</NavDropdown>
							<NavLink className="nav-link" to={'/contact'}>Contact</NavLink>
							
							<div className='nav-icons d-none d-lg-flex align-items-center px-3'>
								<img className='mx-3' id='search-icon' src={Search} alt="search" />
								<span className='cart-icon-container position-relative'><img src={Cart} alt="cart" /><span>0</span></span>
							</div>
							<div className='nav-icons d-block d-lg-none'>
								<ul className='px-0 my-3'>
									<li className=' d-flex justify-content-between align-items-center py-3'>
										<input type="search" placeholder='search'/>
										<img id='search-icon' src={Search} alt="search" />
									</li>
									<li>
										<NavLink className="d-flex justify-content-between align-items-center py-3" to={'/cart'}>
											<span>Cart</span>
											<span className='cart-icon-container position-relative'><img src={Cart} alt="cart" /><span>0</span></span>
										</NavLink>
									</li>
								</ul>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default NavBar