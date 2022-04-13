import styled from "styled-components"

const SupportWrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

  .heading {
    display: flex;
    justify-content: center;
    svg {
      font-size: 75px;
      margin-right: 10px;
      color: ${props => props.theme.primaryColor};
    }
   aside{
     h1{
      font-size: 40px;
      margin: 0;
      font-weight: 100;
    }
    p{
      margin: 0;
      font-size: 14px;
      font-weight: 600;
      color: #898989;
    }
   }
  }
  section {
      display: flex;
      justify-content: space-around;
      padding: 5px 1em;
      color: rgba(0, 0, 0, 0.87);
      width: 90%;
      border: 0;
      min-width: 0;
      word-wrap: break-word;
      font-size: .875rem;
      background: #fff;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
      margin: 3em 15px;
      border-radius: 6px;
      .sec1, .sec2{
      display: flex;
      flex-direction: column;
      margin-top: 3em;
      margin-bottom: 3em;
      .p-dropdown {
        border: none;
        width: auto !important;
        background: transparent !important;
        border-bottom: 1px solid #afb2ba !important;
        margin-bottom: 29px !important;
      }
      h2{
        margin-top: 3em;
        font-size: 20px;
        font-weight: 800; 
        color: ${props => props.theme.primaryColorLight};
      }
      em {
        font-size: 12px;
        color: #afafaf;
      }
      .upload{
        margin-top: 2em;
        border: 1px dashed #b9b9b9;
        padding: 0.5em;
        text-align: center;
        cursor: pointer;
        color: grey;
        opacity: 0.7;
        transition: 0.3s ease-in-out;
        strong{
        color: ${props => props.theme.primaryColorLight};
        }
        svg{
          font-size: 18px;
          font-weight: 800;
          transform: rotate(25deg);
        }
        :hover{
          border: 1px dashed ${props => props.theme.primaryColor};
          background: #f6f6f6;
          opacity: 1;
        }
      }
      label {
      padding: 5px 0;
      color: ${props => props.theme.primaryColorLight};
      span{
          color: red;
          font-size: 11px;
          position: relative;
          bottom: 5px;
        }
      }
      input {
        margin-bottom: 2em;
        border: none;
        border-bottom: 1px solid ${props => props.theme.primaryColor}52;
      }
      textarea{
        margin: 2em 0;
        padding: 0.5em;
        border: 1px solid ${props => props.theme.primaryColor}52;
      }
      div {
      button{
        margin: 30px 20px;
        padding: 1px 0;
        background: none;
        border: 1px solid ${props => props.theme.primaryColor};;
        height: 40px;
        border-radius: 3px;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        span {
          background: ${props => props.theme.primaryColor};
          padding: 7px 30px;
          color: #FFFFFF;
          text-transform: capitalize;
          font-weight: 800;
          transition: 0.3s ease-in-out;
        }
        :hover{
 
          border: 1px solid ${props => props.theme.secondaryColorDark};
          background:${props => props.theme.secondaryColorDark};
           box-shadow: ${props => props.sprayBoxShadow};
          font-weight: 800 !important;
          border-radius: 3px;
          span{
             background: none;
          }
          
        }
      }
    }
      }

  }
  
  @media (max-width: 820px) {
  .heading {
   svg {
      font-size: 50px;
    }
    aside{
   
      h1{
      font-size: 30px;
      }
       p{
      font-size: 12px;
      font-weight: 400;
    }
    }
  }
  
  section{
    flex-wrap: wrap;
  }
    
  }
  @media (max-width: 620px) {
  section {
    width: 100%;
    .sec1, .sec2 {
    width: 100%;
    em {
      font-size: 9px;
    }
    }
    
  }
  .heading {
    svg {
      font-size: 30px;
    }
    aside{
     
      h1{
      font-size: 14px;
      }
       p{
      font-size: 9px;
      font-weight: 400;
    }
    }
  }
  
  section{
    flex-wrap: wrap;
  }
    
  }
`;

export {
  SupportWrapper
}
