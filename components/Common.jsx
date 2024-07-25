import React from 'react'
import MetaHead from './Reuseable/MetaHead'
import Footer from './Footer'
import Navbar from './Navbar'

function Common({children}) {
  return (
	<div className="max-w-6xl mx-auto transition duration-300 px-5 md:px-10 mx-auto">
		<MetaHead />
		<Navbar />
		<div>{children}</div>
		<Footer />
	</div>
  )
}

export default Common