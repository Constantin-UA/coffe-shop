import FirstLogoBlack from '../../image/logos/first-logo-whait.png';
import './header-nav.scss';

const HeaderNav = (props) => {
	return (
		<div className="header-nav">
			<ul className="ul-nav">
				<li>
					<img src={FirstLogoBlack} alt="coffe-logo" />
					<button onClick={props.getAttrFromClick} aria-label="Home" data-click="main">
						Coffee house
					</button>
				</li>
				<li>
					<button onClick={props.getAttrFromClick} aria-label="coffee" data-click="our">
						Our coffee
					</button>
				</li>
				<li>
					<button onClick={props.getAttrFromClick} aria-label="pleasure" data-click="pleasure">
						For your pleasure
					</button>
				</li>
			</ul>
		</div>
	);
};

export default HeaderNav;
