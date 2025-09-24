import React from 'react'
import Button from './Button'

const AdvertImages = ({imageCard}) => {
	return (
		<div className='img-card rounded-2 position-relative d-none d-lg-inline-block' >
			<img src={imageCard.img} alt="" />
			<div className=' position-absolute d-flex flex-column justify-content-between'>
				<span>{imageCard.sp}</span>
				<p className='f-longName'>{imageCard.body}</p>
				<Button title="Order Now"/>
			</div>
		</div>
	)
}

export default AdvertImages
