import React from "react";

import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";

const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className="container">
				<Hero/>
				<div className="row">
					<Card url="https://fastly.picsum.photos/id/814/500/325.jpg?hmac=Is47wBRlWrUdcZTz0u5P9ru3wp1dPXJbQZDuATCxo10"/>
					<Card url="https://fastly.picsum.photos/id/7/500/325.jpg?hmac=gdvw-mZAs1vZf2t20WnOydNK3tp5ecoDUKl8bmK1JiE"/>
					<Card url="https://fastly.picsum.photos/id/152/500/325.jpg?hmac=53_xgjsROyT8eHmzu-k499P1_XqjYBnqeypWNlGCCEU"/>
					<Card url="https://fastly.picsum.photos/id/1065/500/325.jpg?hmac=PcdmB0Uhe3mWgmVG0cMtk0u1FfSzt29p4p-WZd4oWcI"/>
				</div>
			</div>
			<Footer/>
		</div>
	)
};

export default Home;