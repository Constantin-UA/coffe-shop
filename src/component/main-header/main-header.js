import HeaderNav from '../header-nav/header-nav';
import SecondLogoBlack from '../../image/logos/second-logo-whait.svg';
import './main-header.scss';

const MainHeader = (props) => {
	const htmlText = (
		<>
			<img src={SecondLogoBlack} alt="main-logo" />
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<button className="main-btn">More</button>
		</>
	);

	return (
		<div className="main-container header-main">
			<HeaderNav />
			<h1>{props.data.main}</h1>
			{htmlText}
		</div>
	);
};

export default MainHeader;
