import React from 'react'
import { NavLink } from 'react-router';

const UlIcon = ({icons}) => {
	const icons_array = icons.all_icons;
	return (
		<div>
			<ul className=' d-flex align-items-center mb-0 ps-0 icons-ul'>
				{icons_array.map((icon, index) => (
						<li className='ms-3' key={index}><NavLink to="/"><i className={icon}></i></NavLink></li>
				))}
			</ul>

		</div>
	)
}

export default UlIcon
