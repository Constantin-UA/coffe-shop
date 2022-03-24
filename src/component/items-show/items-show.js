import ItemCard from '../item-card/item-card';
import Img1 from '../../image/items/item1.png';
import Img2 from '../../image/items/item2.png';
import Img3 from '../../image/items/item3.png';
import './items-show.scss';

const ItemsShow = () => {
	return (
		<div className="items-show">
			<h3>Our Best</h3>
			<div className="items-show-wrapper">
				<ItemCard imgurl={Img1}></ItemCard>
				<ItemCard imgurl={Img2}></ItemCard>
				<ItemCard imgurl={Img3}></ItemCard>
			</div>
		</div>
	);
};
export default ItemsShow;
