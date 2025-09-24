import React from 'react'

const IconLabel = ({info}) => {
	return (
		<div className={info.align == "center" ? "d-flex align-items-center me-1 me-sm-3" : "d-flex me-1 me-sm-3 mb-3"}>
			<img className={info.align == "center" ? "" : "mt-1 icon-lable-img"} src={info.IconSrc} alt={info.Label} />
			<label className='mx-2'>{info.Label}</label>
		</div>
	)
}

export default IconLabel
