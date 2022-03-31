import { Component } from 'react';
import './item-card.scss';

class ItemCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			itemData: [props.dataCard.country, props.dataCard.price, props.dataCard.image],
		};
	}
	onClick = () => {
		this.props.onClickItem(this.state.itemData);
	};
	render() {
		const { name, country, price, image } = this.props.dataCard;
		return (
			<div className="item-card" onClick={this.onClick}>
				<img src={image} alt="best" />
				<span>{name}</span>
				<span className="country">{country}</span>
				<span className="price">{price}</span>
			</div>
		);
	}
}

export default ItemCard;
