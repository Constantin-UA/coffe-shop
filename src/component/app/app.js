import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import { data } from '../../data';
import './app.scss';

function App() {
	return (
		<div className="app-container">
			<MainHeader data={data.pleasure} />
			<MainAbout data={data.pleasure} />
			<ItemsShow />
			<MainFooter />
		</div>
	);
}

export default App;
