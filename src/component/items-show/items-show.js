import ItemCard from '../item-card/item-card';
import ItemsSearch from '../items-search/items-search';
import ItemsFilter from '../items-filter/items-filter';
import LineImage from '../../image/line.png';
import './items-show.scss';
import { Component } from 'react';

class ItemsShow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: [],
		};
	}

	onClickItem = (country, price, image) => {
		this.setState({ itemData: [country, price, image] });
		this.props.onCardClick(this.state.itemData);
	};

	createElement = (dataCard) => {
		return dataCard.map((item) => {
			const { id, ...itemData } = item;
			return <ItemCard key={id} dataCard={itemData} onClickItem={this.onClickItem} />;
		});
	};

	choise = (choiser) => {
		switch (choiser) {
			case 'header-our':
				return (
					<>
						<img className="line" src={LineImage} alt="img" />
						<div className="wrapper-for-search">
							<ItemsSearch />
							<ItemsFilter onFilterSearch={this.onFilterSearch} />
						</div>
					</>
				);
			case 'header-pleasure':
				return <img className="line" src={LineImage} alt="img" />;
			default:
				return <h3>Our Best</h3>;
		}
	};

	onFilterSearch = (filter) => {
		this.props.onFilterSearch(filter);
	};

	startFilterData = (dataCard, filt) => {
		if (filt === 'all') {
			return this.createElement(dataCard);
		} else {
			const newData = dataCard.filter((item) => item.country.toLowerCase() === filt);

			return this.createElement(newData);
		}
	};

	render() {
		const bgClassMain = 'items-show items-show-bg';
		const bgClass = 'items-show';
		const { bgStyle } = this.props.data;
		const filterElement = this.choise(bgStyle);
		const element = this.startFilterData(this.props.data.dataCard, this.props.filter);
		return (
			<div className={bgStyle === 'header-main' ? bgClassMain : bgClass}>
				{filterElement}
				<div className="items-show-wrapper">{element}</div>
			</div>
		);
	}
}
export default ItemsShow;
