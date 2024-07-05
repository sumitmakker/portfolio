import React from 'react'

function About() {
  return (
	<div className="max-w-7xl mx-auto px-4 md:px-2">
		<div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
			<div class="w-full sm:w-1/4 mb-7 sm:mb-0">
				<img src="/images/profile.jpeg" class="rounded-lg w-96" alt="" />
			</div>
			<div class="font-general-regular w-full sm:w-3/4 text-left">
				<p class="mb-4 text-center md:text-start text-ternary-light text-lg">As a Full Stack Web Developer, I have extensive experience working on both frontend and backend development. My career began with Android App Development, where I created intuitive mobile applications. I then transitioned to Hybrid App Development using React Native, combining native and web technologies seamlessly.</p>
				<p class="mb-4 text-center md:text-start text-ternary-light text-lg">My journey eventually led me to Website Development, where I have successfully developed and managed projects such as a Test-Based website, a Tour Booking website, and a Cleaning website. I excel in creating robust, scalable, and user-centric applications, utilizing a wide range of technologies and frameworks to solve complex problems and deliver innovative solutions.</p>

				<p class="mb-4 text-center md:text-start text-ternary-light text-lg">I am committed to continuous learning, keeping up with the latest industry trends. My collaborative approach and project management skills enable me to work effectively with cross-functional teams, ensuring seamless integration of all components and delivering exceptional user experiences.</p>
			</div>
		</div>
	</div>
  )
}

export default About