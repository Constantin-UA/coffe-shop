import FirstLogoBlack from '../../image/logos/first-logo-black.png';
import SecondLogoBlack from '../../image/logos/second-logo-black.svg';

import './main-footer.scss';

const MainFooter = (props) => {
	const onClick = (e) => {
		props.choiseClick(e.currentTarget.getAttribute('data-click'));
	};
	const dataButton = [
		{ dataAtr: 'main', aria: 'home', label: 'Coffe house' },
		{ dataAtr: 'our', aria: 'coffee', label: 'Our coffee' },
		{ dataAtr: 'pleasure', aria: 'pleasure', label: 'For your pleasure' },
	];

	const buttons = dataButton.map((item, idx) => {
		return (
			<li className="footer-li">
				{idx === 0 ? <img src={FirstLogoBlack} alt="first-logo" /> : ''}
				<button onClick={onClick} aria-label={item.aria} data-click={item.dataAtr}>
					{item.label}
				</button>
			</li>
		);
	});

	return (
		<div className="main-footer">
			<ul className="footer-ul">{buttons}</ul>
			<img className="secondLogo" src={SecondLogoBlack} alt="coffe-logo-black" />
		</div>
	);
};

export default MainFooter;
