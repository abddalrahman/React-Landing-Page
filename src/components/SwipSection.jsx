import React from 'react'
import SwiperComp from './SwiperComp'
import Feature from './Feature'
import Box from '../assets/box.svg'
import Car from '../assets/car.svg'
import Shop from '../assets/shop.svg'

const SwipSection = () => {
	return (
		<div className='swip-section position-relative'>
			<div className="my-container d-flex align-items-center h-100">
				<SwiperComp/>
			</div>
			<div className="features py-4 px-5 rounded-3 position-absolute row">
				<Feature f_info={{img:Box, title:"Return Policy", desc:"Money Back Guarantee"}}/>
				<Feature f_info={{img:Car, title:"Free Shipping", desc:"On All Orders Over $45.00"}}/>
				<Feature f_info={{img:Shop, title:"Store Locator", desc:"Find Your Nearest Store"}}/>
			</div>
		</div>
	)
}

export default SwipSection
