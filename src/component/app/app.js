import { Row, Col, Container } from 'react-bootstrap';
import HeaderNav from '../header-nav/header-nav';
import MainHeader from '../main-header/main-header';
import AboutUs from '../about-us/about-us';
import MaskGroup from '../maskGroup/mask-group';
import MyFooter from '../my-footer/my-footer';
import './app.scss';

function App() {
	return (
		<Container className="container">
			<Row className="rows main-row">
				<Col className="colums">
					<HeaderNav />
					<MainHeader />
				</Col>
			</Row>
			<Row className="rows">
				<Col className="colums" md={{ span: 6, offset: 3 }}>
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
	);
}

export default App;
