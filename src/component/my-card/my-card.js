import './my-card.scss';

const MyCard = (props) => {
	return (
		<div className="my-card">
			<div className="card-wrapper">
				<img src={props.imgurl} alt="best" />
				<span>Solimo Coffee Beans 2 kg</span>
				<span className="price">10.73$</span>
			</div>
		</div>
	);
};

export default MyCard;
