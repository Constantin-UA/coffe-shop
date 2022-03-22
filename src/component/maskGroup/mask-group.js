import MyCard from '../my-card/my-card';
import Img1 from '../../image/main/best/img1.png';
import Img2 from '../../image/main/best/img2.png';
import Img3 from '../../image/main/best/img3.png';
import './mask-group.scss';

const MaskGroup = () => {
	return (
		<div className="mask-group">
			<h3>Our Best</h3>
			<div className="wrapper">
				<MyCard key={'id1'} imgurl={Img1}></MyCard>
				<MyCard key={'id2'} imgurl={Img2}></MyCard>
				<MyCard key={'id3'} imgurl={Img3}></MyCard>
			</div>
		</div>
	);
};
export default MaskGroup;
