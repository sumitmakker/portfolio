import React from 'react'

function FooterCopyright() {
  return (
	<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-light">
				&copy; {new Date().getFullYear()}
				<span
					className="ml-1 duration-500"
				>
					Sumit Makker
				</span>
				.{' '}
				
			</div>
		</div>
  )
}

export default FooterCopyright