import React from 'react'
import Leaf from '../assets/leaf.svg'
import { NavLink } from 'react-router'


const FooterUlTitle = ({data}) => {
	return (
		<li className={data.is_title == "y" ? "position-relative footer-ul-header mb-4" : "mb-2 leaf-link"}>
			{data.is_title == "y"
				?
				data.title
				:
				<>
				<NavLink>
					<img className='me-2' src={Leaf} alt="leaf" />
					{data.title}
				</NavLink>
				</>
			}			
		</li>
	)
}

export default FooterUlTitle
