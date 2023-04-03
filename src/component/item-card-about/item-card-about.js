import SecondLogoBlack from '../../image/logos/second-logo-black.svg';
import Aromistico from '../../image/aromistico.webp';
import './item-card-about.scss';

const ItemCardAbout = (props) => {
	const country = props.data[0],
		price = props.data[1];
	//const	image = props.data[2];

	return (
		<div className="item-card-about">
			<img className="aromistico" src={Aromistico} alt="img" />
			<div className="card-desc-wrapper">
				<h2 className="title">About it</h2>
				<img className="logo" src={SecondLogoBlack} alt="coffe-logo-black" />
				<p>
					<span className="card-desc">Country: </span>
					{country}
				</p>
				<p>
					<span className="card-desc">Description: </span>Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
					enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat.
				</p>
				<p>
					<span className="card-desc">Price: </span>
					<span className="card-price">{price}</span>
				</p>
			</div>
		</div>
	);
};

export default ItemCardAbout;
