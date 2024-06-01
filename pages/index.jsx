import React from 'react'
import MetaHead from '../components/Reuseable/MetaHead'
import Banner from '../components/Home/Banner'
import Projects from '../components/Projects/Projects'

function Home() {
  return (
	<div className="container mx-auto">
		<MetaHead />
		<Banner />
		<Projects />
	</div>
  )
}

export default Home