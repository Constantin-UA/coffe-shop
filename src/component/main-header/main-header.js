import HeaderNav from '../header-nav/header-nav';
import SecondLogoBlack from '../../image/logos/second-logo-whait.svg';
import './main-header.scss';

const MainHeader = (props) => {
	const getAttrFromClick = (e) => {
		props.choiseClick(e.currentTarget.getAttribute('data-click'));
	};
	const htmlText = (
		<>
			<img src={SecondLogoBlack} alt="main-logo" />
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<button className="main-btn">More</button>
		</>
	);
	const bgStyle = 'main-container ' + props.data.bgStyle;
	const title = props.data.title;
	const hasText = props.data.text;
	return (
		<div className={bgStyle}>
			<HeaderNav getAttrFromClick={getAttrFromClick} />
			<h1>{title}</h1>
			{hasText ? htmlText : ''}
		</div>
	);
};

export default MainHeader;
