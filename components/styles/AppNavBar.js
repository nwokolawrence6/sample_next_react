import styled from 'styled-components';
import logo from '../../assets/images/cloudbooks.svg';

const Logo = styled.div`

		background: url(${logo}) no-repeat;
		background-size: contain;
		height: 100px;
		top: -29px;
		width: 100px;
		position: absolute;
		// -webkit-filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
    // filter: invert(48%) sepia(81%) saturate(2471%) hue-rotate(92deg) brightness(69%) contrast(5666%);
		}
`;
const NavBarContainer = styled.div`
  background: ${(props) =>
    props.NavBarColor ? props.NavBarColor : null} !important;
  .navBar.ui.inverted.segment a {
  }
  .no_hover {
    border: 2px solid #ffffff !important;
    border-radius: 100px !important;
    background: #cc0227 0% 0% no-repeat padding-box !important;
    color: #f5f7ff !important;
  }
  a.no_hover:hover {
    background: none !important;
  }
  .sell_now .sale_now {
    margin-left: 3px;
  }
  .ui.inverted.red.buttons .button,
  .ui.inverted.red.button {
    box-shadow: 0px 0px 0px 2px ${(props) => props.theme.secondaryColor} inset !important;
    transition: 0.5s ease-in-out;
    :hover {
      background: ${(props) => props.theme.secondaryColor};
    }
  }
  .main__menu {
    width: 75vw;
  }
  .fixed .main__menu .item .circular.button:hover {
    color: ${(props) => props.theme.secondaryColor} !important;
  }
  .navBar {
    outline: ${(props) =>
      props.isAuthPath
        ? (props) => props.theme.primaryColor + ' solid 1px'
        : null}!important;
  }
  .logo_holder {
    top: ${(props) => (!props.fixed ? '-8px' : '0px')};
  }

  a {
    //margin: .4em 3em !important;
    margin-right: 10px !important;
    color: #bfbfbf !important;
    font-size: 15px !important;
    font-weight: bolder !important;
    line-height: 7px !important;
    height: 10px;
    text-transform: capitalize !important;
    transition: 0.3s ease-in-out !important;
    :hover {
      background: #ffffff22 !important;
      border-radius: 2px !important;
    }
    svg {
      font-weight: 800 !important;
      margin-right: 5px;
      font-size: 20px;
      color: ${(props) => props.theme.secondaryColor};
    }
  }

  a.active {
    background: #ffffff22 !important;
    border-radius: 2px !important;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;
export { Logo, NavBarContainer };
