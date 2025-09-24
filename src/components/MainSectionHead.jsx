import React from 'react'

const MainSectionHead = ({titles}) => {
	return (
		<div className={titles.centered == "yes" ? "my-3 mb-4 main-sec-title mx-auto" : 'mb-4 main-sec-title' }>
			<h5 className={titles.centered == "yes" ? "text-center f-longName" : 'f-longName' }>{titles.title_1}</h5>
			<h1 className={titles.centered == "yes" ? "text-center" : '' }>{titles.title_2}</h1>
		</div>
	)
}

export default MainSectionHead
