import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

function Project(props) {
  return (
	<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
			key={'project-item-' + props.id}
		>
			<Link
				href="/projects/[id]"
				as={'/projects/' + props.id}
				aria-label="Single Project"
				passHref
			>
				<div className="grid-item hover-scale-up rounded-lg shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-dark">
					<div>
						<Image
							src={props.image}
							className="banner-img rounded-t-lg border-none "
							alt="Project Banner Image"
							width={100}
							height={100}
							style={{width : '100%'}}
							priority={true}
							unoptimized
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-xl md:text-2xl text-ternary-light mb-2">
							{props.title}
						</p>
						<span className="text-lg text-ternary-light">
							{props.category}
						</span>
					</div>
				</div>
			</Link>
		</motion.div>
  )
}

export default Project