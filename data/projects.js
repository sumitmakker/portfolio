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
		details : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	},
	{
		id: 'bubble-queen',
		title: 'Bubble Queen',
		category: 'Web Application',
		image: '/images/bbq/banner.png',
		publishDate: 'September 21, 2023',
		tags: ['Frontend','Backend'],
		images: [
			{
				id: uuidv4(),
				title: 'Schedule a Service',
				img: '/images/bbq/schedule.png',
			},
			{
				id: uuidv4(),
				title: 'Cart',
				img: '/images/bbq/cart.png',
			},
			{
				id: uuidv4(),
				title: 'Admin Dashboard',
				img: '/images/bbq/dashboard.png',
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
		details : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	},
	{
		id: 'great-india-caravan',
		title: 'Great India Caravan',
		category: 'Web Application',
		image: '/images/gic/banner.png',
		publishDate: 'September 21, 2023',
		tags: ['Frontend','Backend'],
		images: [
			{
				id: uuidv4(),
				title: 'Tour Details',
				img: '/images/gic/tour-details.png',
			},
			{
				id: uuidv4(),
				title: 'Booking',
				img: '/images/gic/booking.png',
			},
			{
				id: uuidv4(),
				title: 'Admin Dashboard',
				img: '/images/gic/dashboard.png',
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
		details : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.',
	},
]