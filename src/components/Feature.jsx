import React from 'react'

const Feature = ({f_info}) => {
	return (
		<div className='d-flex align-items-center col-12 col-md-6 col-lg-4 border-0 mb-3 mb-lg-0'>
			<img src={f_info.img} alt={f_info.title} />
			<div className=' d-flex flex-column ms-3 justify-content-between'>
				<h4 className='mb-0'>{f_info.title}</h4>
				<span>{f_info.desc}</span>
			</div>
		</div>
	)
}

export default Feature
