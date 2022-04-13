import { Component } from 'react';
import { Button, Icon, Responsive, Segment } from 'semantic-ui-react';
import { Sidebar } from 'semantic-ui-react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import HomepageHeading from '../Home/HomepageHeading';
import Routes from '../routes';
import Link from 'next/link';
import { MobileMenuWrapperStyle } from '../../styles/mobileMenuStyles/MobileMenuStles';
import { FaBars } from 'react-icons/fa'
import { authRoute } from "../../../lib/config";
class MobileContainer extends Component {
	state = {sidebarOpened: false};

	handleSidebarHide = (e) => {
		if(e.target.id === "sidebar") return;
		this.setState({ sidebarOpened: false })
	};

	handleToggle = () =>{
		this.setState((prev) => { return {sidebarOpened: !prev.sidebarOpened }});
	};

	render() {
		const { children, Header } = this.props;
		const { sidebarOpened } = this.state;

		return (
			<Responsive as={Sidebar.Pushable} maxWidth={Responsive.onlyMobile.maxWidth}>
				<Sidebar as={Menu} animation="push" onHide={this.handleSidebarHide} vertical visible={sidebarOpened}>
					{Routes.map((data, index) => {
						if(data.path.includes('http')) {
							return (
								<a href={data.path}>
									<Menu.Item as={'span'} Key={index}>{data.name}</Menu.Item>
								</a>
							);
						}
						return (
							<Link href={data.path}>
								<Menu.Item Key={index}>{data.name}</Menu.Item>
							</Link>
						);
					})}
				</Sidebar>
				<Sidebar.Pusher dimmed={sidebarOpened}>
					<Segment basic textAlign="center" style={{ padding: '0px' }} vertical>
						<MobileMenuWrapperStyle>
							<Menu className="mobileMenu" pointing secondary size="large">
                <Menu.Item id="sidebar" style={ { top : -12 } } onClick={ this.handleToggle }>
                  <FaBars id="sidebar" style={ { color : '#fff' } }/>
                </Menu.Item>
                <Menu.Item position="right">
                  <a href={ authRoute }>
                    <Button as="a" inverted style={ { marginLeft : '0.5em' } }>
                      Sell Now
                    </Button>
                  </a>
                </Menu.Item>
							</Menu>
						</MobileMenuWrapperStyle>
						{Header ? <Header /> : null}
					</Segment>
					{children}
				</Sidebar.Pusher>
			</Responsive>
		);
	}
}

MobileContainer.propTypes = {
	children: PropTypes.node
};

export default MobileContainer;
