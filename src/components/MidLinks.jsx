import React from 'react'
import { NavLink } from 'react-router'

const MidLinks = () => {
	return (
		<div className='mid-links mx-2 py-5 mt-5'>
			<div className="my-container flex-column flex-lg-row d-flex justify-content-center justify-content-lg-between align-items-center px-lg-4 py-xl-5">
				<NavLink to="/" className='mx-2 mb-4 mb-lg-0' href="#">Agriculture Products</NavLink>
				<NavLink to="/"  className='mx-2 mb-4 mb-lg-0' href="#">Projects Completed</NavLink>
				<NavLink to="/" className='mx-2 mb-4 mb-lg-0' href="#">Satisfied Clients</NavLink>
				<NavLink to="/" className='mx-2 mb-lg-0' href="#">Experts Farmers</NavLink>
			</div>
		</div>
	)
}

export default MidLinks
