import React from 'react'
import { NavLink } from 'react-router'

const Button = (props) => {
	return (
		<NavLink to="/" className='px-lg-4 px-3 rounded-2 main-btn' href="#">{props.title}</NavLink>
	)
}

export default Button
