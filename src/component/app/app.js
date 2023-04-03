import { Component } from 'react';
import MainHeader from '../main-header/main-header';
import MainAbout from '../main-about/main-about';
import ItemsShow from '../items-show/items-show';
import MainFooter from '../main-footer/main-footer';
import ItemCardAbout from '../item-card-about/item-card-about';
import { data, dataCard } from '../../data';
import 'animate.css';
import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			choiser: 'main',
			itemData: [],
			filter: 'all',
			term: '',
			cardArr: dataCard,
		};
	}

	choiseClick = (attribut) => {
		this.setState(({ choiser }) => ({
			choiser: attribut,
			itemData: [],
			filter: 'all',
			term: '',
		}));
	};

	onCardClick = (itemData) => {
		this.setState({ itemData });
	};

	onFilterSearch = (filter) => {
		this.setState({ filter });
	};

	onSearch = (term) => {
		this.setState({ term });
	};

	searchEmp = (items, term) => {
		if (term.length === 0) return items;
		return items.filter((item) => {
			return item.name.toLowerCase().indexOf(term) > -1;
		});
	};

	render() {
		const dataToGo = data[this.state.choiser];
		return (
			<div className="app-container">
				{this.state.itemData.length > 0 ? (
					<div className="app-animate-box animate__animated animate__fadeIn">
						<MainHeader data={data.our} choiseClick={this.choiseClick} />
						<ItemCardAbout data={this.state.itemData} />
					</div>
				) : (
					<div className="app-animate-box animate__animated animate__fadeIn">
						<MainHeader data={dataToGo} choiseClick={this.choiseClick} />
						<MainAbout data={dataToGo} />
						<ItemsShow
							data={dataToGo}
							cardArr={this.searchEmp(this.state.cardArr, this.state.term)}
							onCardClick={this.onCardClick}
							filter={this.state.filter}
							onSearch={this.onSearch}
							onFilterSearch={this.onFilterSearch}
						/>
					</div>
				)}

				<MainFooter choiseClick={this.choiseClick} />
			</div>
		);
	}
}

export default App;
