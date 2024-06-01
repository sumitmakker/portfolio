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
		<section className="py-5 sm:py-10 mt-5 sm:mt-20">
			<div className="text-center">
				<p className="font-general-medium text-2xl sm:text-4xl mb-1 text-primary-light">
					Projects portfolio
				</p>
			</div>

			<div className="mt-10 sm:mt-16">
				
				<div className="flex justify-between border-b border-secondary-dark pb-3 gap-3">
					<div className="flex justify-between gap-2">
						<span className="hidden sm:block  bg-secondary-dark p-2.5 shadow-sm rounded-xl cursor-pointer">
							<FiSearch className="text-ternary-light w-5 h-5"></FiSearch>
						</span>
						<input
							onChange={(e) => {
								setSearchProject(e.target.value);
							}}
							className="
                                ont-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-dark
                                text-ternary-light
                                "
							id="name"
							name="name"
							type="search"
							required=""
							placeholder="Search Projects"
							aria-label="Name"
						/>
					</div>

					<ProjectsFilter setSelectProject={setSelectProject} />
				</div>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
				{selectProject
					? selectProjectsByCategory.map((project, index) => {
							return <ProjectItem key={project.id} {...project} />;
					  })
					: projects.map((project, index) => (
							<ProjectItem key={project.id} {...project} />
					  ))}
			</div>
		</section>
	);
}

export default Projects