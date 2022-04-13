import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Link from 'next/link';
import { Container, Menu, Responsive, Segment, Visibility } from 'semantic-ui-react';
import Routes from './routes';
import { Logo, NavBarContainer } from '../styles/AppNavBar';
import theme from '../styles/theme';

class NavBar extends Component {
	state = {};

	handleItemClick = id => {
		this.setState(prevState => ({ activeItem: prevState.activeItem !== id ? id : null }));
	};

	hideFixedMenu = () => this.setState({ fixed: false });
	showFixedMenu = () => this.setState({ fixed: true });

	componentDidMount() {
		this.setState({
			ResponsiveMinWidth: Responsive.onlyTablet.minWidth
		});
	}

	render() {
		const { children, NavTextColor, btnColors } = this.props;
		const { fixed, ResponsiveMinWidth } = this.state;

		return (
			<Responsive minWidth={ResponsiveMinWidth}>
				<Visibility once={false} onBottomPassed={this.showFixedMenu} onBottomPassedReverse={this.hideFixedMenu}>
					<NavBarContainer NavBarColor={NavTextColor} btnColor={btnColors}>
						<Segment inverted textAlign="center" vertical className="navBar">
							<Menu
								fixed={fixed ? 'top' : null}
								pointing={!fixed}
								secondary={!fixed}
								size="	"
								borderless={fixed}
								style={{ borderBottom: 0, background: fixed ? theme.primaryColor : 'transparent' }}
							>
								<Container className="main__menu">
									<Menu.Item style={{ top: fixed ? '0px' : null }} className="logo_holder">
										<Logo fixed={fixed} />
									</Menu.Item>

									{Routes.map((data, index) => {
										return (
											!data.path.includes('http') ? <Link href={data.path}>
												<Menu.Item
													className={`menu__text ${this.state.activeItem === data.name ? ' active' : null}`}
													inverted
													as="a"
													name={data.name}
													position={data.name === 'Home' ? 'right' : null}
													Key={index}
													onClick={() => this.handleItemClick(data.name)}
												>
													{data.icon} {data.name}
												</Menu.Item>
											</Link> : <Menu.Item
												className={`menu__text no_hover ${this.state.activeItem === data.name ? ' active' : null}`}
												inverted
												as='a'
												href={data.path}
												name={data.name}
												position={data.name === 'Home' ? 'right' : null}
												Key={index}
												onClick={() => this.handleItemClick(data.name)}
											>
												<span className='sale_now'>{data.name}</span>
											</Menu.Item>
										);
									})}
								</Container>
							</Menu>
						</Segment>
					</NavBarContainer>
				</Visibility>
				{children}
			</Responsive>
		);
	}
}

NavBar.propTypes = {
	children: PropTypes.node
};

export default NavBar;
