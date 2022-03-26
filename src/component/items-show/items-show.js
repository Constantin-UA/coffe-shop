import ItemCard from '../item-card/item-card';
import ItemsSearch from '../items-search/items-search';
import ItemsFilter from '../items-filter/items-filter';
import LineImage from '../../image/line.png';
import './items-show.scss';

const ItemsShow = (props) => {
	const onClickItem = (country, price, image) => {
		const itemData = [country, price, image];
		props.onCardClick(itemData);
	};
	let bgClass = 'items-show items-show-bg';
	const { data } = props;
	const { dataCard } = data;
	const element = dataCard.map((item) => {
		const { id, ...itemData } = item;
		return <ItemCard key={id} dataCard={itemData} onClickItem={onClickItem} />;
	});

	const choise = (chiser) => {
		switch (chiser) {
			case 'header-our':
				bgClass = 'items-show';
				return (
					<>
						<img className="line" src={LineImage} alt="img" />
						<div className="wrapper-for-search">
							<ItemsSearch />
							<ItemsFilter />
						</div>
					</>
				);
			case 'header-pleasure':
				bgClass = 'items-show';
				return <img className="line" src={LineImage} alt="img" />;
			default:
				return <h3>Our Best</h3>;
		}
	};
	const filterElement = choise(data.bgStyle);
	return (
		<div className={bgClass}>
			{filterElement}
			<div className="items-show-wrapper">{element}</div>
		</div>
	);
};
export default ItemsShow;
