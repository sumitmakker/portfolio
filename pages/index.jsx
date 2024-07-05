import React from 'react'
import MetaHead from '../components/Reuseable/MetaHead'
import Banner from '../components/Home/Banner'
import ProjectsList from '../components/Projects/ProjectsList'

function Home() {
  return (
	<div className="mx-auto px-4 md:px-2">
		<MetaHead />
		<Banner />

		<div className="text-center mt-16 md:mt-32">
			<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-primary-light">
				Projects portfolio
			</p>
		</div>

		<ProjectsList />
	</div>
  )
}

export default Home