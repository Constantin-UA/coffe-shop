import ItemCard from '../item-card/item-card';
import './items-show.scss';

const ItemsShow = (props) => {
	const { data } = props;
	const element = data.map((item) => {
		const { id, ...itemData } = item;
		return <ItemCard key={id} dataCard={itemData} />;
	});
	return (
		<div className="items-show">
			<h3>Our Best</h3>
			<div className="items-show-wrapper">{element}</div>
		</div>
	);
};
export default ItemsShow;
