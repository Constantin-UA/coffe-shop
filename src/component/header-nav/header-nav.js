import './header-nav.scss';

const HeaderNav = () => {
	return (
		<div className="headerNav">
			<ul>
				<li key={'id11'}>
					<img src={require('../../image/Group.png')} alt="coffe-logo" />
					<button>Coffee house</button>
				</li>
				<li key={'id12'}>
					<button>Our coffee</button>
				</li>
				<li key={'id13'}>
					<button>For your pleasure</button>
				</li>
			</ul>
		</div>
	);
};

export default HeaderNav;
