import React from 'react'
import MainSectionHead from './MainSectionHead';
import Product from './Product';
import { Col, Row } from 'react-bootstrap';
import IconLabelDetailes from './IconLabelDetailes';
import Farmer from '../assets/farmer.svg';
import Cleaner from '../assets/cleaner.svg';
import Button from './Button';

const TodayDeal = () => {
	return (
		<div className='today-deal my-5 pb-5'>
			<MainSectionHead titles={{title_1:"Special Offers", title_2:"Today's Hot Deal", centered:"yes"}}/>
			<div className="my-container">
				<Row className='my-5 pb-5'>
					<Col className='mb-3' lg={3} md={4} sm={6}>
						<Product prodInfo={{p_img:"images/farm-1.png", title:"Grapes", price:"10", column:"n"}} />
					</Col>
					<Col className='mb-3' lg={3} md={4} sm={6}>
						<Product prodInfo={{p_img:"images/p-1.png", title:"Tomato", price:"15", column:"n"}} />
					</Col>
					<Col className='mb-3' lg={3} md={4} sm={6}>
						<Product prodInfo={{p_img:"images/farm-2.png", title:"Apples", price:"25", column:"n"}} />
					</Col>
					<Col className='mb-3' lg={3} md={4} sm={6}>
						<Product prodInfo={{p_img:"images/farm-3.png", title:"Bananas", price:"30", column:"n"}} />
					</Col>
				</Row>
				<div className="organice-food my-5 pt-5">
					<div className=' d-flex flex-wrap gap-4'>
						<img src="images/farm-main.png" alt="farm" />
						<div className=' d-flex flex-column justify-content-between'>
							<MainSectionHead titles={{title_1:"Quality Products", title_2:"Only Organic Food", centered:"no"}}/>
							<p className='mb-3'>There are many variations of passages of lorem ipsum available but the majority have suffered alteration in
								 some form by injected humor or random word.</p>
							<IconLabelDetailes detailes={{img:Cleaner, lable:"Professional Farmers", desc:"There are many variation of passages of lorem ipsum."}}/>
							<IconLabelDetailes detailes={{img:Farmer, lable:"Solution for Farming", desc:"There are many variation of passages of lorem ipsum."}}/>
							<Button title="Start Shopping Now"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TodayDeal
