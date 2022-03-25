import FirstLogoBlack from '../../image/logos/first-logo-black.png';
import SecondLogoBlack from '../../image/logos/second-logo-black.svg';

import './main-footer.scss';

const MainFooter = (props) => {
	const getAttrFromClick = (e) => {
		props.choiseClick(e.currentTarget.getAttribute('data-click'));
	};
	return (
		<div className="main-footer">
			<ul>
				<li>
					<img src={FirstLogoBlack} alt="first-logo" />
					<button onClick={getAttrFromClick} aria-label="Home" data-click="main">
						Coffee house
					</button>
				</li>
				<li>
					<button onClick={getAttrFromClick} aria-label="coffee" data-click="our">
						Our coffee
					</button>
				</li>
				<li>
					<button onClick={getAttrFromClick} aria-label="pleasure" data-click="pleasure">
						For your pleasure
					</button>
				</li>
			</ul>
			<img className="secondLogo" src={SecondLogoBlack} alt="coffe-logo-black" />
		</div>
	);
};

export default MainFooter;
