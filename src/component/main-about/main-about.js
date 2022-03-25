import SecondLogoBlack from '../../image/logos/second-logo-black.svg';
import GirlImage from '../../image/girl.png';
import CupImage from '../../image/cup.png';

import './main-about.scss';

const MainAbout = ({ data }) => {
	const text = {
		text1: `
	Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
	`,
		text2: `
	Afraid at highly months do things on at. Situation recommend objection do intention so questions.
	As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
	Children me laughing we prospect answered followed. At it went is song that held help face.
	`,
		text3: `
	Now residence dashwoods she excellent you. Shade being under his bed her, Much read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are most gave hope. Secure active living depend son repair day ladies now.
	`,
	};
	const style = data.about.style;
	const title = data.about.title;
	const GirlCupImg = style === 'about-our' ? GirlImage : CupImage;
	return (
		<>
			<div className="about-wrapper">
				{style === 'about-main' ? '' : <img className="girl" src={GirlCupImg} alt="img" />}
				<div className={style}>
					<h2>{title}</h2>
					<img className="logo" src={SecondLogoBlack} alt="coffe-logo-black" />
					<p>{style === 'about-main' ? text.text1 + ' ' + text.text2 : text.text1}</p>
					<p>{style === 'about-main' ? text.text3 : text.text2}</p>
				</div>
			</div>
		</>
	);
};

export default MainAbout;
