import { Component , Fragment } from 'react';
import { Responsive , Visibility } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import NavBar from '../NavBar';

class DesktopContainer extends Component {
    state = {
        ResponsiveMinWidth : null
    };

    hideFixedMenu = () => this.setState( { fixed : false } );
    showFixedMenu = () => this.setState( { fixed : true } );

    componentDidMount() {
        this.setState( {
            ResponsiveMinWidth : Responsive.onlyTablet.minWidth
        } );
    }

    render() {
        const { children , Header , NavTextColor , btnColors } = this.props;
        const { ResponsiveMinWidth } = this.state;

        return (
            <Fragment>
                {/* <NavBar NavTextColor={NavTextColor} btnColors={btnColors} /> */ }
                <Responsive minWidth={ ResponsiveMinWidth }>
                    <Visibility once={ false } onBottomPassed={ this.showFixedMenu }
                                onBottomPassedReverse={ this.hideFixedMenu }>
                        { Header ? <Header/> : null }
                    </Visibility>

                    { children }
                </Responsive>
            </Fragment>
        );
    }
}

DesktopContainer.propTypes = {
    children : PropTypes.node
};
export default DesktopContainer;
