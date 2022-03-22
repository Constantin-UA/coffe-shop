import LogoBlack from '../../image/main/Beans-logoB.svg';

import './my-footer.scss';

const MyFooter = () => {
	return (
		<div className="my-footer">
			<ul>
				<li key={'id111'}>
					<img src={require('../../image/Group.png')} alt="coffe-logo" />
					<button>Coffee house</button>
				</li>
				<li key={'id112'}>
					<button>Our coffee</button>
				</li>
				<li key={'id113'}>
					<button>For your pleasure</button>
				</li>
			</ul>
			<img className="blackLogo" src={LogoBlack} alt="coffe-logo-black" />
		</div>
	);
};

export default MyFooter;
