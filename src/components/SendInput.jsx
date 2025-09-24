import React from 'react'
import Send from '../assets/send.svg'

const SendInput = () => {
	return (
		<form className=' d-flex rounded-3 overflow-hidden sending-div'>
			<input className='py-2 px-4' type="text" placeholder='Your Email Address' />
			<button className='d-flex align-items-center justify-content-center p-2'>
				<img src={Send} alt="send"/>
			</button>
		</form>
	)
}

export default SendInput
