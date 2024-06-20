import React from 'react'
import MetaHead from './Reuseable/MetaHead'
import Footer from './Footer'
import Navbar from './Navbar'

function Common({children}) {
  return (
	<div className="container transition duration-300 px-4 mx-auto">
		<MetaHead />
		<Navbar />
		<div>{children}</div>
		<Footer />
	</div>
  )
}

export default Common