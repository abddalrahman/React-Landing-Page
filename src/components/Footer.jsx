import React from 'react'
import Logo_w from '../assets/logo-w.png'
import Location from '../assets/location-2.svg'
import Message from '../assets/message-2.svg'
import Call from '../assets/call.svg'
import UlIcon from './UlIcon'
import FooterUlTitle from './FooterUlTitle'
import IconLabel from './IconLabel'
import SendInput from './SendInput'


const Footer = () => {
	return (
		<div className='footer my-container py-5 d-flex gap-3 flex-wrap'>
			<div className=' d-flex gap-3 flex-wrap justify-content-center justify-content-sm-between'>
				<div className='main-footer-sec'>
					<img src={Logo_w} alt="Logo" />
					<p className='my-3'>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
					<UlIcon icons={{all_icons:['fa-brands fa-twitter', 'fa-brands fa-facebook', 'fa-brands fa-pinterest-p', 
					'fa-brands fa-instagram']}}/>
				</div>

				<div className="explore">
					<ul className='px-0 my-0'>
						<FooterUlTitle data={{title:"Explore", is_title:"y"}}/>
						<FooterUlTitle data={{title:"About", is_title:"n"}}/>
						<FooterUlTitle data={{title:"Services", is_title:"n"}}/>
						<FooterUlTitle data={{title:"Our Projects", is_title:"n"}}/>
						<FooterUlTitle data={{title:"Meet the Farmers", is_title:"n"}}/>
						<FooterUlTitle data={{title:"Latest News", is_title:"n"}}/>
						<FooterUlTitle data={{title:"Contact", is_title:"n"}}/>
					</ul>
				</div>
			</div>

			<div className=' d-flex gap-3 flex-wrap justify-content-center justify-content-sm-between'>
				<div className="news">
					<ul className='px-0 my-0'>
						<FooterUlTitle data={{title:"News", is_title:"y"}}/>
					</ul>

					<div className='mb-3'>
						<p className='mb-1'>Bringing Food Production Back To Cities</p>
						<span>July 5, 2022</span>
					</div>
					<div>
						<p className='mb-1'>The Future of Farming, Smart Irrigation Solutions</p>
						<span>July 5, 2022</span>
					</div>
				</div>

				<div className="contact">
					<ul className='px-0 my-0'>
						<FooterUlTitle data={{title:"Contact", is_title:"y"}}/>
					</ul>
					<IconLabel info={{IconSrc:Call, Label:"666 888 0000", align:"not"}}/>
					<IconLabel info={{IconSrc:Message, Label:"needhelp@company.com", align:"not"}}/>
					<IconLabel info={{IconSrc:Location, Label:"80 broklyn golden street line New York, USA", align:"not"}}/>
					<SendInput/>
				</div>

			</div>
		
		</div>
	)
}

export default Footer
