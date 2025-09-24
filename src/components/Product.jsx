import React from 'react'
import { NavLink } from 'react-router'

const Product = ({prodInfo}) => {
	return (
		<div className={prodInfo.column == "y" ? "d-flex flex-column align-items-center product" : "d-flex flex-column product"}>
			<NavLink to="/"><img className=' rounded-4' src={prodInfo.p_img} alt={prodInfo.title} /></NavLink> 
				{prodInfo.column == "y" 
					?
						<>
							<h4 className='mt-3'>{prodInfo.title}</h4>
							<span>${prodInfo.price}</span>
							<span className='f-star'>s s s s s</span>
						</>
					:
						<>
							<div className=' d-flex justify-content-between align-items-center mt-2'>
								<h4>{prodInfo.title}</h4>
								<span className='f-star'>s s s s s</span>
							</div>
								<span className='price-span'>${prodInfo.price}</span>
						</>
				}
		</div>
	)
}

export default Product
