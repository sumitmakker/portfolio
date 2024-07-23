import React from 'react'
import { motion } from 'framer-motion';
import ContactDetails from '../components/Contact/ContactDetails';
import ContactForm from '../components/Contact/ContactForm';
import MetaHead from '../components/Reuseable/MetaHead';

function Contact() {
  return (
	<div className="max-w-7xl mx-auto px-4 md:px-2">
		<MetaHead title={'Contact'}/>

		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.5,
				delay: 0.1,
			}}
			className="container mx-auto flex flex-col-reverse lg:flex-row py-5 lg:py-10 lg:mt-5"
		>
			<ContactForm />

			<ContactDetails />
		</motion.div>
	</div>
  )
}

export default Contact