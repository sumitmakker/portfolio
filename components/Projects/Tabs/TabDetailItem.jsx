import React from 'react'

function TabDetailItem({image_item,index,tab,onTabItemClick}) {
  return (
	<a className={`flex items-center text-lg p-5 rounded-lg transition duration-300 ease-in-out ${ (index == 1 || index == 3) && 'my-6'} ${tab !== index ? 'hover-zoom-in border border-zinc-800' : 'bg-secondary-dark'}`} href="#0" onClick={(e) => { e.preventDefault(); onTabItemClick(index)}}>
		<div>
			<div className={`font-general-regular text-xl font-semibold mb-1 ${tab !== index ? 'text-ternary-light' : 'text-white'}`}>{image_item.title}</div>
			<div className={`text-md ${tab !== index ? 'text-ternary-light' : 'text-ternary-light'}`}>{image_item.sub_title}</div>
		</div>
	</a>
  )
}

export default TabDetailItem