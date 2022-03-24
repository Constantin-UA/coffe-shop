import FirstLogoBlack from '../../image/logos/first-logo-whait.png';
import './header-nav.scss';

const HeaderNav = () => {
	return (
		<div className="header-nav">
			<ul className="ul-nav">
				<li>
					<img src={FirstLogoBlack} alt="coffe-logo" />
					<button>Coffee house</button>
				</li>
				<li>
					<button>Our coffee</button>
				</li>
				<li>
					<button>For your pleasure</button>
				</li>
			</ul>
		</div>
	);
};

export default HeaderNav;
