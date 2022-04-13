import PropTypes from "prop-types";
import React from "react";
import DesktopContainer from './LandingGroup/desktopView/DesktopContainer';
import MobileContainer from './LandingGroup/mobileView/MobileContainer';
import styled from 'styled-components'

const Wrapper = styled.div`
	@media (max-width: 767px) {
		.webView {
			display: none;
		} 
		
	}
	@media (min-width: 920px) {
	  .mobileView {
	    display: none;
	  }
	}
`;


const ResponsiveContainer = ({ children, Header, NavTextColor, btnColors }) => (
	<Wrapper>
		<div className="mobileView">
			<MobileContainer Header={ Header }>{children}</MobileContainer>
		</div>
		<div className="webView">
			<DesktopContainer Header={ Header } NavTextColor={ NavTextColor } btnColors={ btnColors } >{children}</DesktopContainer>
		</div>
	</Wrapper>
);

ResponsiveContainer.propTypes = {
	children: PropTypes.node,
};
export default ResponsiveContainer;
