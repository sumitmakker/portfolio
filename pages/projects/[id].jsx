import React from 'react'
import { projects } from '../../data/projects';
import { FiClock,FiTag } from 'react-icons/fi';
import Image from 'next/image';

function ProjectDetails({project}) {
  return (
	<div className="container mx-auto">
		{/* Header */}
		<div>
			<p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-light mt-14 sm:mt-20 mb-7">
				{project.title}
			</p>
			<div className="flex">
				<div className="flex items-center mr-10">
					<FiClock className="text-xl text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-light">
						{project.publishDate}
					</span>
				</div>
				<div className="flex items-center">
					<FiTag className="w-4 h-4 text-ternary-light" />
					<span className="font-general-regular ml-2 leading-none text-primary-light">
						{project.tags.join(', ')}
					</span>
				</div>
			</div>
		</div>

		{/* Gallery */}
		<div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">

			<div className="mb-10 sm:mb-0" key={project.id}>
				<Image src={project.image} className="rounded-xl cursor-pointer shadow-lg sm:shadow-none" alt={project.title} key={project.id} layout="responsive" width={100} height={90}
				/>
			</div>

			{project.images.map((imageItem) => {
				return (
					<div className="mb-10 sm:mb-0" key={imageItem.id}>
	  
						<Image src={imageItem.img} className="rounded-xl cursor-pointer shadow-lg sm:shadow-none" alt={imageItem.title} key={imageItem.id} layout="responsive" width={100} height={90} />
					</div>
				);
			})}
		</div>

		{/* Info */}
		<div className="block sm:flex gap-0 sm:gap-10 mt-14">
			<div className="w-full sm:w-1/3 text-left">
				{/* Single project client details */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-secondary-light mb-2">
						About Client
					</p>
					<ul className="leading-loose">
						{project.companyInfo.map(
							(info) => {
								return (
									<li
										className="font-general-regular text-ternary-light"
										key={info.id}
									>
										<span>{info.title}: </span>
										{info.title === 'Website' ? <a
											href={info.details}
											target='_blank'
											className={
												info.title === 'Website' ||
												info.title === 'Phone'
													? 'hover:underline hover:text-indigo-400 cursor-pointer duration-300'
													: ''
											}
											aria-label="Project Website and Phone"
										>{info.details}</a> : <span>{info.details}</span>
									}
									
									</li>
								);
							}
						)}
					</ul>
				</div>

				{/* Single project objectives */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
						Objective
					</p>
					<p className="font-general-regular text-ternary-light">
						{project.objective}
					</p>
				</div>

				{/* Single project technologies */}
				<div className="mb-7">
					<p className="font-general-regular text-2xl font-semibold text-ternary-light mb-2">
						Tech Used
					</p>
					<p className="font-general-regular text-ternary-light">
						{project.tech.join(
							', '
						)}
					</p>
				</div>

			</div>

			{/*  Single project right section details */}
			<div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
				<p className="font-general-regular mb-5 text-lg text-ternary-light">{project.details}</p>
			</div>
		</div>

	</div>
  )
}

export async function getServerSideProps({ query }) {
	const { id } = query;
	console.log(id);
	return {
		props: {
			project: projects.filter(
				(project) => project.id === id
			)[0],
		},
	};
}

export default ProjectDetails