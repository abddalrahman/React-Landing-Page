import React from 'react'

const IconLabelDetailes = ({detailes}) => {
	return (
		<div className='  d-flex gap-3 mb-4'>
			<img src={detailes.img} alt={detailes.lable} />
			<div >
				<h4>{detailes.lable}</h4>
				<p>{detailes.desc}</p>
			</div>
		</div>
	)
}

export default IconLabelDetailes
