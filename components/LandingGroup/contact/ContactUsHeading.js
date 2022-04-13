import PropTypes from 'prop-types';
import React from 'react';
import { Segment, Header } from 'semantic-ui-react';
import NavBar from '../NavBar';
import LOGO from "../../../assets/new-illustrations/cloudbooks.png";
import { AboutHeader } from "../../styles/AboutHeaderWrapper";

const ContactUsHeading = ({ text }) => (
	<AboutHeader>
		<NavBar NavTextColor={'tranparant'} />
		<div className="about-header blur">
			<Segment basic>
				<Header inverted as="h1">
					{' '}
					Contact Us{' '}
				</Header>
			</Segment>
		</div>
		<div className="logo">
			<div className="image">
				<img src={ LOGO } alt=""/>
			</div>
		</div>
	</AboutHeader>
);

ContactUsHeading.propTypes = {
	mobile: PropTypes.bool
};

export default ContactUsHeading;

// import PropTypes from 'prop-types';
// import React from 'react';
// import { AboutHeader } from '../../../components/styles/AboutHeaderWrapper';
// import { Segment, Header } from 'semantic-ui-react';

// const ContactUsHeading = () => (
// 	<AboutHeader>
// 		<Segment basic>
// 			<Header textAlign="center" as="h1">
// 				{' '}
// 				Contact Us
// 			</Header>
// 		</Segment>
// 	</AboutHeader>
// );

// export default ContactUsHeading;
