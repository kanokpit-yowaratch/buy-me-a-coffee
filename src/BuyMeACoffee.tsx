import React from 'react';

interface BuyMeProps {
	text?: string;
	slug: string;
	buttonColor?: string;
}
const bmcUrl = 'https://buymeacoffee.com';
const bmcButtonApi = 'https://img.buymeacoffee.com/button-api';

const BuyMeACoffee: React.FC<BuyMeProps> = (
	{ text = 'Buy Me a Coffee',
		slug = 'kanokpityh',
		buttonColor = '901bd6'
	}) => {
	return (
		<a href={`${bmcUrl}/${slug}`} target="_blank">
			<img src={`${bmcButtonApi}/?text=${encodeURIComponent(text)}&slug=${slug}&button_colour=${buttonColor}&font_colour=ffffff&coffee_colour=FFDD00`} />
		</a>
	);
}

export default BuyMeACoffee;