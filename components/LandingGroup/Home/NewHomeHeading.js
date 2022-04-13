import React, { Component, Fragment } from 'react';
import dynamic from 'next/dynamic';
import { HeadingWrapper } from '../../styles/NewHomeHeadingStyles';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import NavBar from '../NavBar';
import { authRoute } from "../../../lib/config";
const ReactTypingEffect = dynamic(
	{
		loader: () => import('react-typing-effect')
	},
	{
		ssr: false
	}
);
const text = ['Digital Book Store', 'Best selling platform', 'Authors best choice'];
class NewHomeHeading extends Component {
	render() {
		return (
			<Fragment>
				<HeadingWrapper>
					<NavBar NavTextColor={'tranparant'} btnColors={'#fff'} />
					<div className="main">
						<div className="header_content">
							<div className="header__text">
								<div>
									<h1>Authors Companion</h1>
									<ReactTypingEffect speed={ 20 } className="span" text={ text }/>
									<p>
										An online digital platform for the publishing, marketing and distribution  of
										<br/>textbooks, monographs and related articles.<br/>
									</p>
									<a className="top_header_home" href={ authRoute }>
											<span>Sell Now</span>
									</a>
								</div>
							</div>
							<div className="image_text">
							</div>
						</div>
					</div>
					<div className="home_heading_footer">
						<span>Follow Us</span>
						<a href="https://www.instagram.com/cloudbooksonline"><FaInstagram/></a>
						<a href="https://twitter.com/cloudbookonline"><FaTwitter/></a>
						<a href="https://www.linkedin.com/in/officalcloudbooks"><FaLinkedinIn/></a>
						<a href="https://fb.me/officalcloudbooks"><FaFacebookF/></a>
					</div>
				</HeadingWrapper>
			</Fragment>
		);
	}
}

export default NewHomeHeading;
