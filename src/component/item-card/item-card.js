import './item-card.scss';

const ItemCard = (props) => {
	return (
		<div className="item-card">
			<div className="item-card-wrapper">
				<img src={props.imgurl} alt="best" />
				<span>Solimo Coffee Beans 2 kg</span>
				<span className="price">10.73$</span>
			</div>
		</div>
	);
};

export default ItemCard;
