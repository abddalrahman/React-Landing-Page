import React from 'react'
import Button from './Button'
import AdvertImages from './AdvertImages'

const AdvertSection = () => {
	return (
		<div className='advertSection position-relative my-5 mx-2'>
			<img src="images/advert.jpg" alt="" />
			<div className='position-absolute canter_ele d-flex flex-column align-items-center'>
				<h2>Be Healthy & Eat Only Fresh Organic Vagetables</h2>
				<Button title="Shop Now"/>
			</div>
			<div className="img-cards-container position-absolute d-flex gap-4 my-container">
				<AdvertImages imageCard={{
					img:"images/advert-img.png", sp:"100% ORGANIC", body:"Quality Organic Food Store"
				}}/>
				<AdvertImages imageCard={{
					img:"images/advert-img2.png", sp:"100% ORGANIC", body:"Healthy Products Everyday"
				}}/>
			</div>
		</div>
	)
}

export default AdvertSection
