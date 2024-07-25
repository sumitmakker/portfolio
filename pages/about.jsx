import React from 'react'
import MetaHead from '../components/Reuseable/MetaHead'

function About() {
  return (
	<div>

		<MetaHead title={'About Me'}/>

		<div className="flex items-center flex-col lg:flex-row sm:gap-8 mt-10 sm:mt-20">
			<div className="mb-7 sm:mb-0">
				<img src="/images/profile.jpeg" className="rounded-lg w-100" alt="" style={{maxWidth : '250px'}}/>
			</div>
			<div className="font-general-regular w-full text-left">
				<p className="mb-3 text-center lg:text-start text-ternary-light text-lg">As a Full Stack Web Developer, I have extensive experience working on both frontend and backend. My career began with Android App Development, where I created intuitive mobile applications. I then transitioned to Hybrid App Development using React Native, combining native and web technologies.</p>
				<p className="text-center lg:text-start text-ternary-light text-lg">My journey eventually led me to Website Development, where I have successfully developed and managed projects such as a Test-Based website, a Tour Booking website, and a Cleaning website. I excel in creating robust, scalable, and user-centric applications, utilizing a wide range of technologies and frameworks to solve complex problems and deliver innovative solutions.</p>
			</div>
		</div>
	</div>
  )
}

export default About