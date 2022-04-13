import styled from 'styled-components'
import Image from '../../assets/images/index.png'

const MainFooterWrapper = styled.div`
  img {
    width: 100px;
  }
  background: #1B1C1D url(${Image}) repeat-x left top;
  background-size: 10px 3px;
  border-bottom: 3px solid ${props => props.theme.secondaryColor};
  .sub p {
    color: ${props => props.theme.secondaryColor} !important;
  }
  .u.ui.green.buttons .button, .ui.green.button {
    background: ${props => props.theme.secondaryColor} !important;
  }
  svg {
    color: #fff !important;
    font-size: 18px;
    float: left;
  }
  .footer-socials{
  display: flex !important;
  justify-content: center !important;
  align-content: center !important

}

.list-i > *{
  color: #e2e2e2 !important;
  font-weight: 300 !important;
  letter-spacing: 1px;
  transition: 0.3s ease-in-out !important
}
  
  .list-i > *:hover {
    color: ${props => props.theme.secondaryColor} !important
  }
  
  .list-i > a::after{
    content: '';
    background: ${props => props.theme.secondaryColor} !important;
    height: 1px !important;
    min-width: 100% !important;
    position: relative !important;
    z-index: 100;
    transform: rotateY(90deg) !important;
    transition: 0.5s ease-in-out !important
  }
  
  .ui.list.list-i > a:hover::after {
    transform: rotateY(0deg) !important;
    visibility: visible !important;
  
  }
`;


export {
  MainFooterWrapper
}
