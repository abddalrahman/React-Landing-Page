import React from 'react'
import { NavLink } from 'react-router'

const FarmerNews = ({persons_info}) => {
	return (
		<div className='position-relative farmer-news'>
			<img className='rounded-3' src={persons_info.img} alt={persons_info.name} />
			<div className='position-absolute d-flex align-items-center'>
				<i className="fa-solid fa-share-nodes"></i>
				<div className=' d-flex flex-column px-5 py-2 align-items-end'>
					<h5><NavLink to='/'>{persons_info.name}</NavLink> </h5>
					<span>{persons_info.job}</span>
				</div>
			</div>
		</div>
	)
}

export default FarmerNews
