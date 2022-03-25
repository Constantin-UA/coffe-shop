import nextId from 'react-id-generator';

import Img1 from './image/items/item1.png';
import Img2 from './image/items/item2.png';
import Img3 from './image/items/item3.png';
export const data = {
	main: {
		title: 'Everything You Love About Coffee',
		bgStyle: 'header-main',
		text: true,
		about: {
			style: 'about-main',
			title: 'About Us',
		},
		dataCard: [
			{
				name: 'Solimo Coffee Beans 2 kg',
				country: 'Brazil',
				price: '10.73$',
				image: Img1,
				id: nextId(),
			},
			{
				name: 'Solimo Coffee Beans 2 kg',
				country: 'Brazil',
				price: '10.73$',
				image: Img2,
				id: nextId(),
			},
			{
				name: 'Solimo Coffee Beans 2 kg',
				country: 'Brazil',
				price: '10.73$',
				image: Img3,
				id: nextId(),
			},
		],
	},
	our: {
		title: 'Our coffee',
		bgStyle: 'header-our',
		text: false,
		about: {
			style: 'about-our',
			title: 'About our beans',
		},
		dataCard: [
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Brazil',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Kenya',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Columbia',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Brazil',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Brazil',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
			{
				name: 'AROMISTICO Coffee 1 kg',
				country: 'Brazil',
				price: '6.99$',
				image: Img3,
				id: nextId(),
			},
		],
	},
	pleasure: {
		title: 'For your pleasure',
		bgStyle: 'header-pleasure',
		text: false,
		about: {
			style: 'about-pleasure',
			title: 'About our goods',
		},
	},
};
