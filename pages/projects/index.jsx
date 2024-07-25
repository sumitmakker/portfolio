import React from 'react'
import ProjectsList from '../../components/Projects/ProjectsList'
import MetaHead from '../../components/Reuseable/MetaHead'

function Projects() {
  return (
	<div>

		<MetaHead title={'Projects'}/>
		<ProjectsList />
	</div>
  )
}

export default Projects