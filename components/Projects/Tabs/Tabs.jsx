import React, { useEffect, useState } from 'react'
import TabDetailItem from './TabDetailItem';
import TabImageItem from './TabImageItem';

function Tabs({project_images}) {
  
	const [tab, setTab] = useState(0);

	return (
		<>
		<div className="mt-10">
			<div className="text-white">
				<div className='flex flex-col items-center'>
					<span className='font-general-medium text-left text-2xl sm:text-3xl font-bold text-primary-light mt-3 lg:mt-8'>Features</span>
				</div>

				<div className="grid lg:grid-cols-12 md:gap-6 mt-8">

					<div className="lg:col-span-7" data-aos="fade-right">
						<div className="flex flex-col justify-center h-100 md:mt-8">
							{
								project_images.map((image_item,index) => <TabDetailItem key={'tab-' + index} image_item={image_item} index={index} tab={tab} onTabItemClick={(tab_index) => setTab(tab_index)}/>)
							}
						</div>
					</div>

					<div className="h-full lg:col-span-5 order-first lg:order-last mb-8 md:mb-0">	
						{
							project_images.map((image_item,index) => tab === index && <TabImageItem key={'tab-' + index} image_item={image_item} tab={tab}/>)
						}
					</div >

				</div >

			</div >
		</div>

		
		</>
	);

}

export default Tabs