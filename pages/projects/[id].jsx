import 'react-slideshow-image/dist/styles.css'
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import React, { useEffect, useState } from 'react'
import { projects } from '../../data/projects';
import { FiClock,FiTag,FWor } from 'react-icons/fi';
import { TbWorld } from "react-icons/tb";
import Tabs from '../../components/Projects/Tabs/Tabs';
import Image from 'next/image';
import MetaHead from '../../components/Reuseable/MetaHead';
import { useRouter } from 'next/router';
import { redirect } from 'next/dist/server/api-utils';

function ProjectDetails({project}) {

	const router = useRouter()
	const [isProjectValid,setIsProjectValid] = useState(false)

	useEffect(() => {

		if(!project.title){
			router.push('/')
		}else{
			setIsProjectValid(true)
		}

	},[project])

	Fancybox.bind("[data-fancybox]", {
		// Your custom options
	});

	return (
		isProjectValid ?
		<div className="max-w-7xl mx-auto px-4 md:px-2">

			<MetaHead title={'Project - ' + project.title}/>

			{/* Header */}
			<div className='flex flex-col items-center'>
				<p className="font-general-medium text-left text-3xl sm:text-5xl font-bold text-primary-light mt-10 md:mt-20 mb-7">
					{project.title}
				</p>
				
				<div className="grid md:grid-cols-2 gap-6">
					<div className="flex items-center">
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

				<a href={project.url} target='_blank' className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-7 mb-6 sm:mb-0 text-lg py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-dark hover:bg-ternary-dark text-ternary-light hover:text-white duration-500" aria-label="Download Resume">
					<TbWorld className="w-5 h-5 text-ternary-light me-3" />
					<span className="text-sm sm:text-lg duration-100">Visit Website</span>
				</a>

			</div>

			<a href={project.image} data-fancybox>
				<Image className='mx-auto rounded mt-3 lg:mt-10 mb-10 md:mt-0' src={project.image} alt="Project Banner Image" width={400} height={200} style={{maxWidth : '600px',width : '100%'}}/>
			</a>

			<div className="flex justify-center font-general-regular text-ternary-light">
				<span className="ml-2">
					Tech used &nbsp;:&nbsp; {project.tech.join(', ')}
				</span>
			</div>

			<div className="text-center mt-10 md:mt-8">
				<p className="font-general-regular mb-5 text-lg text-ternary-light">{project.details}</p>
			</div>

			<Tabs project_images={project.images}/>

		</div>
		: <div></div>
	)
}

export async function getServerSideProps({ query }) {
	const { id } = query;

	return {
		props: {
			project: projects.filter(
				(project) => project.id === id
			)[0] ? projects.filter(
				(project) => project.id === id
			)[0] : {},
		},
	};
}

export default ProjectDetails