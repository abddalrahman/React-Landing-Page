import React from 'react'

const DumbImages = ({images}) => {
	return (
		<div className='dumb-imgs d-flex align-items-center'>
			<div>
				<img src={images.img_1} alt="an user" />
			</div>
			<img src={images.img_2} alt="an user" />
		</div>
	)
}

export default DumbImages
