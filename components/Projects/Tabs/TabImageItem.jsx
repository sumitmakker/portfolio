import Image from 'next/image'
import React from 'react'

function TabImageItem({image_item,tab}) {

	return (
		<div className="h-full">
			<a href={image_item.img} data-fancybox data-caption={image_item.caption}>
				<Image className="h-full w-full rounded hidden lg:block" src={image_item.img} width="500" height="200" alt="Element" style={{objectFit : 'contain'}}/>
			</a>

			<a href={image_item.img_wide} className='block lg:hidden' data-fancybox data-caption={image_item.caption}>
				<Image className="h-full w-full rounded" src={image_item.img_wide} width="500" height="200" alt="Element" style={{objectFit : 'contain'}}/>
			</a>
		</div>
	)
}

export default TabImageItem