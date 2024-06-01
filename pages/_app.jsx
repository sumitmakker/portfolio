import '../styles/global.css';
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Common from '../components/Common'

function MyApp({Component,pageProps}) {
  return (
	<AnimatePresence>
		<Common>
			<Component {...pageProps}/>
		</Common>
	</AnimatePresence>
  )
}

export default MyApp