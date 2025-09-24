import React from 'react'
import TopLinks from './components/TopLinks';
import NewProds from './components/NewProds';
import AdvertSection from './components/AdvertSection';
import TodayDeal from './components/TodayDeal';
import MidLinks from './components/MidLinks';
import Reviews from './components/Reviews';
import NewsArticles from './components/NewsArticles';
import Footer from './components/Footer';
import SwipSection from './components/SwipSection';
import NavBar from './components/NavBar';

const Home = () => {
	return (
		<div>
			<header>
        <TopLinks/>
        <NavBar/>
        <SwipSection/>
      </header>
      <main>
        <NewProds/>
        <AdvertSection/>
        <TodayDeal/>
        <MidLinks/>
        <Reviews/>
        <NewsArticles/>
      </main>
      <footer className='pt-5'>
        <Footer/>
      </footer>
		</div>
	)
}

export default Home
