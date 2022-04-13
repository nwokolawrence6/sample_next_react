import styled from 'styled-components'


const ResponseTicketWrapper = styled.div`
 padding: 20px 0;
 h1 {
   text-align: center;
   padding: 10px 0;
   border-bottom: 1px solid #00000030
 }

  .response-body {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 10px 20px;
    margin-bottom: 9em;
    h4 {
      margin: 0;
      border-bottom: 1px solid #00000010
    }
    .ticket__message {
    width: 50%;
    background: #f2f2f2;
    padding: 20px 40px;
    border-radius:0  40px    40px  40px ;
    margin-top: 2em;
    box-shadow: 5px 5px 8px -10px rgba(0, 0, 0, 0.28), 2px 8px 8px -10px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 0, 0, 0.2);


  }
    .ticket__response {
    width: 50%;
    align-self: flex-end;
    background:#e4f5f0;
    padding: 20px 40px;
    border-radius:  40px  40px 0  40px;
    margin-top: 2em;
    box-shadow: 5px 5px 8px -10px #068c8733, 2px 8px 8px -10px #068c8733, 0 7px 8px -5px #068c8733;
   }
  }

.type {
  position: fixed;
  bottom:0;
  padding: 0px 10px;
  padding-bottom: 3em;
  background: #eaeaea;
  width: 82.32%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  h2 {
    margin: 0.5em 0;
    border-bottom: 1px solid #00000020;
    text-align: center;
    padding: 5px 0;
    width: 100%;
  }

  .text-area {
    display: flex;
    align-items: center;
    textarea {
    font-size: 14px;
    width: 40em;
    padding: 10px;
    height: 60px;
    border: none;
    border-bottom: 2px solid ${props => props.theme.primaryColor}82;

  }

  .p-inputtext:enabled:focus:not(.p-error) {
    border-color: ${props => props.theme.primaryColor}
    }
  .send {
      font-size: 18px;
      margin-left: 10px;
      padding: 3px 10px;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      border-radius: 2px;
      text-transform: uppercase;
      :hover {
        background: #44444432

      }
      svg {
        position: relative;
        top: 3px;
        left: 2px;
      }
  }
  .attachement {
      font-size: 14px;
      margin-right: 10px;
      padding: 3px 10px;
      cursor: pointer;
      svg {
        position: relative;
        top: 3px;
        right: 2px;
        font-size: 40px;
        font-weight: 800;
        border: 1px dashed #44444432;
        padding: 3px;
        transition: 0.3s ease-in-out;

        :hover {
          border: 1px dashed #444444;
          background: #44444432
        }
      }

      .tooltip{
            visibility: hidden;
            width: 90px;
            background-color: #fff;
            color: #000;
            text-align: center;
            border-radius: 2px;
            padding: 5px 5px;
            position: absolute;
            box-shadow: 0 2px 10px 0 #00000032;
            z-index: 1;
            top: 1.6em;
            left: 12.5em;
            transition: 0.3s ease-in-out;
            opacity: 0;
        };

  }

  .attachement:hover .tooltip{
        visibility: visible;
        opacity: 1 ;
        top: 5.6em;
        };
  }

}

`;



export {
  ResponseTicketWrapper
}