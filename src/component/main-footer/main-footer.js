import FirstLogoBlack from '../../image/logos/first-logo-black.png';
import SecondLogoBlack from '../../image/logos/second-logo-black.svg';

import './main-footer.scss';

const MainFooter = () => {
	return (
		<div className="main-footer">
			<ul>
				<li>
					<img src={FirstLogoBlack} alt="first-logo" />
					<button>Coffee house</button>
				</li>
				<li>
					<button>Our coffee</button>
				</li>
				<li>
					<button>For your pleasure</button>
				</li>
			</ul>
			<img className="secondLogo" src={SecondLogoBlack} alt="coffe-logo-black" />
		</div>
	);
};

export default MainFooter;