import './item-card.scss';

const ItemCard = (props) => {
	const { name, country, price, image } = props.dataCard;
	const onClick = () => {
		props.onClickItem(country, price, image);
	};
	return (
		<div className="item-card" onClick={onClick}>
			<img src={image} alt="best" />
			<span>{name}</span>
			<span className="country">{country}</span>
			<span className="price">{price}</span>
		</div>
	);
};

export default ItemCard;
