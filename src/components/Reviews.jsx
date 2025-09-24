import React from 'react'
import MainSectionHead from './MainSectionHead'
import DumbImages from './DumbImages'

const Reviews = () => {
	return (
		<div className='review-sec  py-5 mx-2'>
			<span className='mt-5 d-block'></span>
			<MainSectionHead titles={{title_1:"Our Testimonials", title_2:"What They Say", centered:"yes"}}/>
			<div className=' d-flex justify-content-center gap-2 flex-wrap mt-5'>
				<DumbImages images={{img_1:"images/review-1-p.png", img_2:"images/review-2.png",}}/>	
				<DumbImages images={{img_1:"images/review-2-p.png", img_2:"images/review-1.png",}}/>	
			</div>
		</div>
	)
}

export default Reviews
