import styled from 'styled-components';
// import BG from '../../assets/images/topgb.jpg';
import BG from '../../assets/images/bg.jpeg';

const AboutHeader = styled.div`
  .logo {
    //margin-bottom: 13em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .image {
      position: absolute;
      top: 22.3em;
      z-index: 9;
      background: #fff;
      height: 165px;
      width: 165px;
      box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
        0 8px 10px -5px rgba(0, 0, 0, 0.2);
      padding-top: 3px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 161px;
      }
    }
    .txt {
      position: relative;
      top: -30px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      svg {
        font-size: 40px;
        cursor: pointer;
        color: #888;
        transition: 0.3s ease-in-out;
        padding: 10px;
        border-radius: 2px;
        :hover {
          background: #44444432;
          color: ${(props) => props.theme.secondaryColor};
        }
      }
      p {
        margin-top: 2em;
        position: relative;
        display: inline-block;
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        border-bottom: 3px dotted ${(props) => props.theme.secondaryColor}82;
        letter-spacing: 2px;
      }
      em {
        text-align: center;
        padding-top: 2em;
        font-size: 14px;
        line-height: 1.7em;
        opacity: 0.7;
      }
    }
  }
  .about-header .ui.basic.segment {
    display: block !important;
    width: 72vw;
    p {
      color: #1877f2;
      font-weight: 100;
      font-size: 2.5vh;
    }
    span {
      font-weight: 100;
      line-height: 1.7;
      position: relative;
      top: 1em;
      font-size: 2vh;
    }
    h2 {
      color: #ffffff;
      font-size: 5vh;
    }
  }

  .about-header {
    height: 90vh;
    background-image: url(${BG}) !important;
    box-shadow: inset 0 0 0 10000px rgba(0, 0, 0, 0.6);
    background-repeat: no-repeat;
    transform: translate3d(0px, 0px, 0px);
    background-size: cover;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    position: relative;
    top: -90px;
    z-index: -2;
  }
  h1 {
    color: ${(props) => props.theme.primaryColor};
    text-transform: uppercase;
    margin-bottom: 1.5em;
    font-weight: 600;
    font-size: 15px;
    position: relative;
    top: -40px;
    span {
      color: #cc0227;
    }
  }
`;

export { AboutHeader };
