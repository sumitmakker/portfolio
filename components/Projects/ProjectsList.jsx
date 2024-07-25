import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import ProjectItem from './ProjectItem';
import { projects } from '../../data/projects';
import ProjectsFilter from './ProjectsFilter';

function Projects() {
	const [searchProject, setSearchProject] = useState();
	const [selectProject, setSelectProject] = useState();

	// @todo - To be fixed
	// const searchProjectsByTitle = projectsData.filter((item) => {
	// 	const result = item.title
	// 		.toLowerCase()
	// 		.includes(searchProject.toLowerCase())
	// 		? item
	// 		: searchProject == ''
	// 		? item
	// 		: '';
	// 	return result;
	// });

	const selectProjectsByCategory = projects.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectProject);
	});

	return (
		<div className="w-full mt-10 md:mt-20">

			{/* <div className="mt-10 sm:mt-16">
				
				<div className="flex justify-between border-b border-secondary-dark pb-3 gap-3">
					<div className="flex justify-between gap-2">
						<span className="hidden sm:block  bg-secondary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input id="name" onChange={(e) => {setSearchProject(e.target.value);}} className="font-general-medium pl-3 pr-1 sm:px-4 py-2 border border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-dark text-ternary-light" name="name" type="search" required="" placeholder="Search Projects" aria-label="Name"/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div> */}

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7">
				{selectProject
					? selectProjectsByCategory.map((project, index) => {
							return <ProjectItem key={'project-' + project.id} {...project} />;
					  })
					: projects.map((project, index) => (
							<ProjectItem key={'project-' + project.id} {...project} />
					  ))}
			</div>
		</div>
	);
}

export default Projects