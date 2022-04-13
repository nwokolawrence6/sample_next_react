import styled from 'styled-components';
const AboutPageWrapperStyle = styled.div`
  .join_us {
    color: #cc0227;
  }
  /* margin: -10px 30px 0px; */
  background: #fff;
  /* background: #f5f7ff; */
  /* margin: 0 auto; */
  position: relative;
  top: -6.5em;
  /* box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.14),
    0 2px 12px 2.5px rgba(0, 0, 0, 0.12), 0 4px 4px -5px rgba(0, 0, 0, 0.2); */
  /* border-radius: 6px; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 5em;
  .logo {
    //margin-bottom: 13em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .image {
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
      top: -5em;
      position: relative;
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
  .ui.grid .abt-col2 {
    padding: 0 9vh !important;
    width: 80vw !important;
    margin: 0 auto;
    h2 {
      text-align: center;
      font-weight: 800 !important;
      font-size: 3vh;
    }
  }
  .ui.grid .abt-col2 > h4 {
    color: #444;
    /* opacity: 0.8; */
    font-size: 2.3vh;
    font-weight: 100;
    line-height: 1.8em;
    margin-left: 0em !important;
  }
  .ui.grid .abt-col2 .mission {
    background: ${(props) => props.theme.primaryColor};
    padding: 30px 30px;
    margin-top: 1em;
    border-left: 6px solid ${(props) => props.theme.secondaryColor};
    color: #fff;
    font-size: 14px;
  }
  .ui.basic.segment.about__row2 {
    background: #fff;
    padding: 10em 0;
    img {
      box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.14),
        0 2px 12px 2.5px rgba(0, 0, 0, 0.12), 0 4px 4px -5px rgba(0, 0, 0, 0.2) !important;
      border-radius: 10px !important;
      transition: 0.3s ease-in-out;
      margin-right: 10em !important;
      :hover {
        box-shadow: 0 5px 15px -8px rgba(0, 0, 0, 0.24),
          0 8px 10px -5px rgba(0, 0, 0, 0.2) !important;
      }
    }
  }

  .seg-col3 {
    background: #eff3f6 !important;

    margin: 0 auto;
  }

  .seg-col3 .abt-col3 {
    h2 {
      font-weight: 800;
      font-size: 3.5vh;
      margin-bottom: 2em;
    }
    h4 {
      color: rgb(104, 104, 104);
      font-weight: 100;
      font-size: 2.3vh;
    }
  }

  .seg-col3 .abt-col3 {
    /* width: 70vw !important; */
    padding: 5em 28vh !important;
  }
  .abt-seg {
    height: 25vh;
    width: 70vw;
    align-self: center;
    border-radius: 10px !important;
    background: ${(props) => props.theme.primaryColor} !important;
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    /* flex-direction: column !important; */
    margin-top: 3em !important;
    padding: 0 5em;
    h3 {
      text-align: left !important;
      font-weight: 100;
      line-height: 1.5;
    }
    button {
      color: white;
      background: red;
      border: none;
      padding: 1.5vh 5vh;
      border-radius: 6px;
    }
  }

  /* .abt-seg > h2,
  h3 {
    font-weight: 400 !important;
  } */
  .abt-seg > span {
    font-weight: 100 !important;
    font-size: 20px !important;
    border-top: 1px solid white !important;
    border-bottom: 1px solid white !important;
    text-align: center !important;
    padding: 8px 0px;
    margin: 10px 0px;
    color: white;
    font-style: italic;
  }
  h4 {
    font-size: 20px;
    line-height: 1.7em;
    letter-spacing: 0.3px;
    text-align: justify;
    margin: 0;
    padding: 0;
    position: relative;
    top: -8px;
    margin-left: 3em;
    span {
      color: #222 !important;
      font-weight: bold;
    }
  }
  h5 {
    font-size: 15px;
    color: #fff !important;
    font-weight: 800 !important;
    position: absolute;
    margin-right: 2em;
    margin: 0;
    padding: 0;
    background: red;
    display: inline-flex;
    padding: 10px;
    border-radius: 5px;
  }
  .seg-col3 .abt-col3 {
    h5:nth-child(2) {
      background: #1877f2;
    }
    h5:nth-child(6) {
      background: orange;
    }
  }

  h3 {
    color: ${(props) => props.theme.primaryColor};
    margin-bottom: 1.5em;
    font-size: 2vh !important;
    position: relative;
    span {
      color: #cc0227;
    }
  }
`;

export { AboutPageWrapperStyle };
