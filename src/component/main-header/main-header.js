import './main-header.scss';
import BeansLogoW from '../../image/main/Beans-logoW.svg';

const MainHeader = () => {
	return (
		<>
			<div className="main-container">
				<h1>Everything You Love About Coffee</h1>
				<img src={BeansLogoW} alt="main-logo" />
				<p>We makes every day full of energy and taste</p>
				<p>Want to try our beans?</p>
				<button className="main-btn">More</button>
			</div>
		</>
	);
};

export default MainHeader;
