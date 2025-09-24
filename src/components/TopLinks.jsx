import React from 'react'
import IconLabel from './IconLabel'
import Location_img from '../assets/location.svg'
import Message_img from '../assets/message.svg'
import UlIcon from './UlIcon'

const TopLinks = () => {
	return (
		<div className='top-links mx-2'>
			<div className="my-container py-2 d-flex align-items-center justify-content-between flex-wrap">
				<div className="main-info d-flex align-items-center mb-2 mb-sm-0">
					<IconLabel info={{IconSrc:Location_img, Label:"88 Road Broklyn Golden Street. New York", align:"center"}}/>
					<IconLabel info={{IconSrc:Message_img, Label:"support@agrios.com", align:"center"}}/>
				</div>
				<div className="social-icons d-flex align-items-center">
					<UlIcon icons={{all_icons:['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-pinterest-p', 
					'fa-brands fa-instagram']}}/>
				</div>
			</div>
		</div>
	)
}

export default TopLinks
