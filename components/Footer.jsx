import React from 'react'
import {
	FiGithub,
	FiLinkedin,
	FiGlobe,
} from 'react-icons/fi';
import FooterCopyright from './FooterCopyright';

function Footer() {

	const socialLinks = [
		{
			id: 1,
			icon: <FiGlobe />,
			url: 'https://www.sumitmakker.com',
		},
		{
			id: 2,
			icon: <FiGithub />,
			url: 'https://github.com/sumitmakker',
		},
		{
			id: 3,
			icon: <FiLinkedin />,
			url: 'https://www.linkedin.com/in/sumit-makker',
		},
	];

	return (
		<div className="mx-auto">
			<div className="pt-10 md:pt-20 pb-8 mt-16 md:mt-20 border-t-2 border-secondary-dark">
				{/* Footer social links */}
				<div className="font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28">
					<p className="text-2xl text-primary-light mb-5">
						Follow me
					</p>
					<ul className="flex gap-4 sm:gap-8">
						{socialLinks.map((link) => (
							<a
								href={link.url}
								target="__blank"
								key={'link-' + link.id}
								className="text-gray-400 hover:text-indigo-400 cursor-pointer rounded-lg bg-secondary-dark shadow-sm p-4 duration-300"
							>
								<i className="text-xl sm:text-2xl md:text-3xl">
									{link.icon}
								</i>
							</a>
						))}
					</ul>
				</div>

				<FooterCopyright />
			</div>
		</div>
	)
}

export default Footer