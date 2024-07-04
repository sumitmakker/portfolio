import { v4 as uuidv4 } from 'uuid';

export const projects = [
	{
		id: 'test-academy',
		title: 'Test Academy',
		url: 'https://www.testacademy.net',
		category: 'Web Application',
		image: '/images/ta/banner.png',
		publishDate: 'December 07, 2023',
		tags: ['Frontend','Backend'],
		images: [
			{
				id: uuidv4(),
				caption : 'Test Creation',
				title : 'Efficient Test Creation',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/ta/test-creation.png',
				img_wide: '/images/ta/test-creation-wide.png',
			},
			{
				id: uuidv4(),
				caption : 'Test Details',
				title : 'Easy to read details',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/ta/test-details.png',
				img_wide: '/images/ta/test-details-wide.png',
			},
			{
				id: uuidv4(),
				caption : 'Test Attempt',
				title: 'Easy Test Attempt',
				sub_title : 'Facilitate smooth test attempts ensuring a seamless testing experience.',
				img: '/images/ta/test-attempt.png',
				img_wide: '/images/ta/test-attempt-wide.png',
			},
			{
				id: uuidv4(),
				caption : 'Admin Dashboard',
				title: 'Effortless Website Administration',
				sub_title : 'Simple website managemnet for Admin fnjhdkh hfjkh fhdf hfjdsjf fdhdjf.',
				img: '/images/ta/dashboard.png',
				img_wide: '/images/ta/dashboard-wide.png',
			},
		],
		companyInfo: [
			{
				id: uuidv4(),
				title: 'Name',
				details: 'BOXL Technologies Pvt. Ltd.',
			},
			{
				id: uuidv4(),
				title: 'Services',
				details: 'Web Application',
			},
			{
				id: uuidv4(),
				title: 'Website',
				details: 'https://www.testacademy.net',
			},
		],
		tech : [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDb',
			'Express',
			'NodeJS'
		],
		details : 'This test website provides a comprehensive platform for both teachers and students. Teachers can easily create and manage tests, customizing them to fit their specific requirements. Students can attempt these tests online, benefiting from a user-friendly interface that makes the process straightforward and efficient. Additionally, the platform offers access to previous year papers for various exams, allowing students to practice and prepare effectively. The website supports a range of subjects and exam types, ensuring broad applicability. Automated grading and feedback provide instant results and insights.',
	},
	{
		id: 'bubble-queen',
		title: 'Bubble Queen',
		url: 'https://www.bubblequeen.in',
		category: 'Web Application',
		image: '/images/bbq/banner.png',
		publishDate: 'September 21, 2023',
		tags: ['Frontend','Backend'],
		images: [
			{
				id: uuidv4(),
				title: 'Pricing Table',
				caption : 'Pricing Table',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/bbq/pricing.png',
				img_wide: '/images/bbq/pricing-wide.png',

			},
			{
				id: uuidv4(),
				title: 'Schedule a Service',
				caption : 'Schedule a Service',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/bbq/schedule.png',
				img_wide : '/images/bbq/schedule-wide.png'
			},
			{
				id: uuidv4(),
				title: 'Cart',
				caption : 'Cart',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/bbq/cart.png',
				img_wide : '/images/bbq/cart-wide.png'
			},
			{
				id: uuidv4(),
				title: 'Admin Dashboard',
				caption : 'Admin Dashboard',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/bbq/dashboard.png',
				img_wide : '/images/bbq/dashboard-wide.png'
			},
		],
		companyInfo: [
			{
				id: uuidv4(),
				title: 'Name',
				details: 'Bubble Queen',
			},
			{
				id: uuidv4(),
				title: 'Services',
				details: 'Web Application',
			},
			{
				id: uuidv4(),
				title: 'Website',
				details: 'https://www.bubblequeen.in',
			},
		],
		tech : [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDb',
			'Express',
			'NodeJS'
		],
		details : 'This cleaning website offers a comprehensive range of services to meet all cleaning needs. Customers can easily order various services, including Laundry, Dry Cleaning, Steam Pressing, and Home Cleaning, through a user-friendly interface. The website features flexible scheduling options, secure payment gateways, and customer support to ensure a hassle-free experience.',
	},
	{
		id: 'great-india-caravan',
		title: 'Great India Caravan',
		url: 'https://www.greatindiacaravan.com',
		category: 'Web Application',
		image: '/images/gic/banner.png',
		publishDate: 'September 21, 2023',
		tags: ['Frontend','Backend'],
		images: [
			{
				id: uuidv4(),
				title: 'Tours',
				caption : 'Tours',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/gic/tours.png',
				img_wide : '/images/gic/tours-wide.png'				
			},
			{
				id: uuidv4(),
				title: 'Tour Details',
				caption : 'Tour Details',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/gic/tour-details.png',
				img_wide : '/images/gic/tour-details-wide.png'				
			},
			{
				id: uuidv4(),
				title: 'Booking',
				caption : 'Booking',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/gic/booking.png',
				img_wide : '/images/gic/booking-wide.png'	
			},
			{
				id: uuidv4(),
				title: 'Admin Dashboard',
				caption : 'Admin Dashboard',
				sub_title : 'Discover how our guide helps teachers design tests that promote learning.',
				img: '/images/gic/dashboard.png',
				img_wide : '/images/gic/dashboard-wide.png'	
			},
		],
		companyInfo: [
			{
				id: uuidv4(),
				title: 'Name',
				details: 'Bubble Queen',
			},
			{
				id: uuidv4(),
				title: 'Services',
				details: 'Web Application',
			},
			{
				id: uuidv4(),
				title: 'Website',
				details: 'https://www.bubblequeen.in',
			},
		],
		tech : [
			'HTML',
			'CSS',
			'JavaScript',
			'MongoDb',
			'Express',
			'NodeJS'
		],
		details : `This platform is designed to offer travelers a seamless and personalized experience. Users can effortlessly request customized tours, tailored to their unique preferences and interests. The platform features an easy-to-use booking process, making it simple for users to plan their dream vacations in just a few clicks.
		Explore a wide array of destinations with curated itineraries that maximize your travel experience. Additionally, the flexibility to upgrade your tour with exclusive add-ons and premium services, such as accommodations, guided tours, and special activities, allows users to enhance their journey.`,
	},
]