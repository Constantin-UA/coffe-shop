import './item-card.scss';

const ItemCard = (props) => {
	const { name, country, price, image } = props.dataCard;
	return (
		<div className="item-card">
			<img src={image} alt="best" />
			<span>{name}</span>
			<span className="country">{country}</span>
			<span className="price">{price}</span>
		</div>
	);
};

export default ItemCard;
