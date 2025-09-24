import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SwipSlide from './SwipSlide';

const SwiperComp = () => {
	return (
			<Swiper modules={[Navigation]} navigation className="head-swip">
				<SwiperSlide><SwipSlide/></SwiperSlide>
				<SwiperSlide><SwipSlide/></SwiperSlide>
				<SwiperSlide><SwipSlide/></SwiperSlide>
			</Swiper>
	)
}

export default SwiperComp
