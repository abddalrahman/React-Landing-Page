import React from 'react'
import Button from './Button'

const SwipSlide = () => {
	return (
		<div className=' d-flex flex-column'>
			<span className='f-longName position-relative z-3'>Agriculture</span>
			<span>& Organic Market</span>
			<Button title="Show Now"/>
		</div>
	)
}

export default SwipSlide
