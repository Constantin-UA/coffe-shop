import { Component } from 'react';
import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import { data } from '../../data';
import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choiser: 'main',
		};
	}

	choiseClick = (attribut) => {
		this.setState(({ choiser }) => ({
			choiser: attribut,
		}));
	};
	render() {
		const dataToGo = data[this.state.choiser];
		return (
			<div className="app-container">
				<MainHeader data={dataToGo} choiseClick={this.choiseClick} />
				<MainAbout data={dataToGo} />
				<ItemsShow data={dataToGo} />
				<MainFooter choiseClick={this.choiseClick} />
			</div>
		);
	}
}

export default App;
