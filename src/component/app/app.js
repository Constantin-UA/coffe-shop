import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import './app.scss';

function App() {
	const headerText = {
		main: 'Everything You Love About Coffee',
		our: 'Our coffee',
		pleasure: 'For your pleasure',
	};
	return (
		<div className="app-container">
			<MainHeader data={headerText} />
			<MainAbout />
			<ItemsShow />
			<MainFooter />
		</div>
	);
}

export default App;
