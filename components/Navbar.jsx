import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {FiX, FiMenu } from 'react-icons/fi';
import HireModal from './Reuseable/HireModal';
import logoLight from '../public/images/logo-light.svg';

function Navbar() {

	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		if (!showMenu) {
			setShowMenu(true);
		} else {
			setShowMenu(false);
		}
	}

	return (
		<motion.nav
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			id="nav"
			className='md:mx-5'
		>
			{/* Header */}
			<div className="z-10 block sm:flex sm:justify-between sm:items-center py-6">
				
				{/* Header menu links and small screen hamburger menu */}
				<div className="flex justify-between items-center px-4 sm:px-0">
					<div>
						<Link href="/">
							<Image
								src={logoLight}
								className="w-36 cursor-pointer"
								alt="Dark Logo"
								width={150}
								height={120}
								priority={true}
							/>
						</Link>
					</div>

					{/* Small screen hamburger menu */}
					<div className="sm:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="focus:outline-none"
							aria-label="Hamburger Menu"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								className="h-7 w-7 fill-current text-ternary-light"
							>
								{showMenu ? (
									<FiX className="text-3xl" />
								) : (
									<FiMenu className="text-3xl" />
								)}
							</svg>
						</button>
					</div>
				</div>

				{/* Header links small screen */}
				<div
					className={
						showMenu
							? 'block m-0 mt-5 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none md:hidden'
							: 'hidden'
					}
				>
					<div className="block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
						<Link href="/projects" aria-label="Projects" onClick={toggleMenu}>
							Projects
						</Link>
					</div>
					<div className="block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark">
						<Link href="/about" aria-label="About Me" onClick={toggleMenu}>
							About Me
						</Link>
					</div>
					<div className="block text-left text-lg text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-secondary-dark">
						<Link href="/contact" aria-label="Contact" onClick={toggleMenu}>
							Contact
						</Link>
					</div>
					
				</div>

				{/* Header links large screen */}
				<div className="font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
					<div
						className="block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="Projects"
					>
						<Link href="/projects">Projects</Link>
					</div>
					<div
						className="block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
						aria-label="About Me"
					>
						<Link href="/about">About Me</Link>
					</div>

					<div
						className="block text-left text-lg font-medium text-ternary-light hover:text-secondary-light  sm:ms-4 mb-2 sm:py-2"
						aria-label="Contact"
					>
						<Link href="/contact">Contact</Link>
					</div>
				</div>
				

			</div>
		</motion.nav>
  	)
}

export default Navbar