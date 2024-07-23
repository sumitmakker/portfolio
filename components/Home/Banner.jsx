import React from 'react'
import { motion } from 'framer-motion';
import { FiArrowDownCircle } from 'react-icons/fi';

function Banner() {
  return (
	<motion.section
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
		className="flex flex-col sm:justify-between items-center sm:flex-row mt-5 md:mt-2"
	>
		<div className="w-full md:w-1/3 text-left">
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.1,
				}}
				className="font-general-semibold mt-3 md:mt-0 text-3xl lg:text-3xl xl:text-4xl text-center sm:text-left text-primary-light"
			>
				Hey, I am Sumit Makker
			</motion.h1>
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.2,
				}}
				className="font-general-medium mt-4 text-xl md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-gray-200"
			>
				Full Stack Web Developer
			</motion.p>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{
					ease: 'easeInOut',
					duration: 0.9,
					delay: 0.3,
				}}
				className="flex justify-center sm:block"
			>
				<a
					download="Sumit-Resume.pdf"
					href="/files/Sumit-Resume.pdf"
					className="font-general-medium flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-secondary-dark hover:bg-ternary-dark text-ternary-light hover:text-white duration-500"
					aria-label="Download Resume"
				>
					<FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
					<span className="text-sm sm:text-lg duration-100">
						Download CV
					</span>
				</a>
			</motion.div>
		</div>
		<motion.div
			initial={{ opacity: 0, y: -180 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
			className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0"
		>
			<img
				src={'/images/developer.svg'}
				alt="Developer"
			/>
		</motion.div>
	</motion.section>
  )
}

export default Banner