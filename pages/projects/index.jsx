import React from 'react'
import ProjectsList from '../../components/Projects/ProjectsList'
import MetaHead from '../../components/Reuseable/MetaHead'

function Projects() {
  return (
	<div className="max-w-7xl mx-auto px-4 md:px-2">

		<MetaHead title={'Projects'}/>
		<ProjectsList />
	</div>
  )
}

export default Projects