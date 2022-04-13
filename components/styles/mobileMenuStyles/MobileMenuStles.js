import styled from 'styled-components'

const MobileMenuWrapperStyle = styled.div`
  background: ${props => props.theme.primaryColor}!important;

  .mobileMenu {
  z-index: 999999999999999999 !important;
  a{
  z-index: 999999999999999999 !important
  
  }
  border: none !important;
  }

  @media (min-width: 920px) {
    display: none;
  }
`;

export {
  MobileMenuWrapperStyle
};
