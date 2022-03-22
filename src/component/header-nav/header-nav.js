import './header-nav.scss';

const HeaderNav = () => {
	return (
		<div className="headerNav">
			<ul>
				<li>
					<img src={require('../../image/Group.png')} alt="coffe-logo" />
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
