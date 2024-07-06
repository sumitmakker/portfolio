// 'use server'
import '../styles/global.css';
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'
import Common from '../components/Common'
import connectDb from '../config/database';

function MyApp({Component,pageProps}) {

	const connect = async () => {
		const response = await connectDb()
		console.log(response);
	}
	useEffect(async() => {
		console.log('yoo ohh yoo');

		connect()
	},[])

  return (
	<AnimatePresence>
		<Common>
			<Component {...pageProps}/>
		</Common>
	</AnimatePresence>
  )
}

export default MyApp