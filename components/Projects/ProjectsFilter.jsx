import React from 'react'

function ProjectsFilter({setSelectProject}) {

	const selectOptions = [
		'Web Application',
		'Mobile Application',
	];
	
  return (
	<select onChange={(e) => {setSelectProject(e.target.value)}} className="px-4 sm:px-6 py-2 border border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-ternary-dark text-ternary-light">
		<option value={setSelectProject} className="text-sm sm:text-md">All Projects</option>

		{selectOptions.map((option) => (
			<option className="text-normal sm:text-md" key={option}>{option}</option>
		))}
	</select>
  )
}

export default ProjectsFilter