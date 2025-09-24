import React from 'react'
import MainSectionHead from './MainSectionHead'
import FarmerNews from './FarmerNews'
import { NavLink } from 'react-router'

const NewsArticles = () => {
	return (
		<div className='my-5 py-5 news-articles'>
			<MainSectionHead titles={{title_1:"From the Blog", title_2:"News & Articles", centered:"yes"}} />
			<span className='my-5 d-block'></span>
			<div className="news-container my-container d-flex align-items-center justify-content-center justify-content-sm-between gap-5 flex-wrap">
				<FarmerNews  persons_info={{img:"images/news-1.png", name:"Kevin Smith", job:"Farmer"}}/>
				<FarmerNews  persons_info={{img:"images/news-2.png", name:"Kevin Smith", job:"Farmer"}}/>
				<FarmerNews  persons_info={{img:"images/news-3.png", name:"Kevin Smith", job:"Farmer"}}/>
			</div>
			<div className=' d-flex align-items-center gap-2 my-5 my-container2 flex-wrap'>
				<NavLink to='/'><img src="images/articles-1.png" alt="farm" /></NavLink>
				<NavLink to='/'><img src="images/articles-2.png" alt="farm" /></NavLink>
				<NavLink to='/'><img src="images/articles-3.png" alt="farm" /></NavLink>
				<NavLink to='/'><img src="images/articles-4.png" alt="farm" /></NavLink>
				<NavLink to='/'><img src="images/articles-5.png" alt="farm" /></NavLink>
			</div>
		</div>
	)
}

export default NewsArticles
