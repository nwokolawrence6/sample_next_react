import React, { Component } from "react";
import Footer from "./LandingGroup/Footer";
// import withData from "../lib/apollo"
class Page extends Component {
	render() {
		return (
			<div>
				{this.props.children}
				<Footer />
			</div>
		);
	}
}

export default Page;
