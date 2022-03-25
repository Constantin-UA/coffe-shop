import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import { data } from '../../data';
import './app.scss';

function App() {
	return (
		<div className="app-container">
			<MainHeader data={data.main} />
			<MainAbout data={data.main} />
			<ItemsShow data={data.our.dataCard} />
			<MainFooter />
		</div>
	);
}

export default App;
