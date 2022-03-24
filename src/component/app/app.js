import { Row, Col, Container } from 'react-bootstrap';
import HeaderNav from '../header-nav/header-nav';
import MainHeader from '../main-header/main-header';
import AboutUs from '../about-us/about-us';
import MaskGroup from '../maskGroup/mask-group';
import MyFooter from '../my-footer/my-footer';
import './app.scss';

function App() {
	return (
		<div className="main-div">
			<div className="main-bg"></div>
			<div className="about-bg"></div>
			<div className="group-bg"></div>
			<Container className="container">
				<Row className="rows main-row">
					<Col className="colums">
						<HeaderNav />
						<MainHeader />
					</Col>
				</Row>
				<Row className="rows about-row">
					<Col className="colums" sm={{ span: 6, offset: 3 }}>
						<AboutUs />
					</Col>
				</Row>
				<Row className="rows mask-row">
					<Col className="colums">
						<MaskGroup />
					</Col>
				</Row>
				<Row className="rows">
					<MyFooter />
				</Row>
			</Container>
		</div>
	);
}

export default App;
