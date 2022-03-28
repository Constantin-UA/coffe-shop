import { Component } from 'react';
import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import ItemCardAbout from '../item-card-about/item-card-about';
import { data } from '../../data';
import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choiser: 'main',
			itemData: [],
			filter: 'all',
		};
	}

	choiseClick = (attribut) => {
		console.log('nav click');
		this.setState(({ choiser }) => ({
			choiser: attribut,
			itemData: [],
			filter: 'all',
		}));
	};

	onCardClick = (itemData) => {
		this.setState({ itemData });
	};

	onFilterSearch = (filter) => {
		console.log(filter);
		this.setState({ filter });
	};

	render() {
		const dataToGo = data[this.state.choiser];
		return (
			<div className="app-container">
				{this.state.itemData.length > 0 ? (
					<>
						<MainHeader data={data.our} choiseClick={this.choiseClick} />
						<ItemCardAbout data={this.state.itemData} />
					</>
				) : (
					<>
						<MainHeader data={dataToGo} choiseClick={this.choiseClick} />
						<MainAbout data={dataToGo} />
						<ItemsShow
							data={dataToGo}
							onCardClick={this.onCardClick}
							filter={this.state.filter}
							onFilterSearch={this.onFilterSearch}
						/>
					</>
				)}

				<MainFooter choiseClick={this.choiseClick} />
			</div>
		);
	}
}

export default App;
