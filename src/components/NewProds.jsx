import React from 'react'
import Product from './Product'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainSectionHead from './MainSectionHead';

const NewProds = () => {
	return (
		<div className='my-container new-prods py-5'>
			<MainSectionHead titles={{title_1:"Recently Added", title_2:"Latest Products", centered:"yes"}}/>
			<Row>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-1.png", title:"Onions", price:"20", column:"y"}}/>
				</Col>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-2.png", title:"Carrot", price:"10", column:"y"}}/>
				</Col>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-3.png", title:"Tomato", price:"30", column:"y"}}/>
				</Col>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-4.png", title:"Red Grapes", price:"23", column:"y"}}/>
				</Col>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-5.png", title:"Garlic", price:"40", column:"y"}}/>
				</Col>
				<Col className='mb-3 px-3' lg={4} md={6}>
					<Product prodInfo={{p_img:"images/p-6.png", title:"Lettuce", price:"30", column:"y"}}/>
				</Col>
			</Row>

		</div>
	)
}

export default NewProds
