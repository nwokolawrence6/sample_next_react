import styled from "styled-components";


const ModalWrapper = styled.div`

display: ${props => props.show === true ? "flex" : "none"};
  position: fixed;
  top: 0;
  left: 0;
   width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
    z-index: 999;
    animation: reveal 0.2s ;

@keyframes reveal {
    from{
        opacity : 0;
         width:5%;
        height: 5%;
    }
    to{
        opacity: 1;
         width:100%;
        height: 100%;
    }
}

.modal-main {
  width: ${ props => props.modalWidth ? props.modalWidth : "30%"  };
  position:fixed;
  background: white;
  height: auto;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: ${props => props.padded && "20px 30px"};
  border-radius: 6px;
  .close_btn{
      cursor: pointer;
      background: salmon;
      padding: 3px 8px;
      color: white;
      float: right;
      font-weight: 800;
      border-radius: 100px;
    };
    animation:  drop 0.4s ease-in-out;  
  }
  
  @keyframes drop {
    0%{
        opacity : 0;
        top: -80%
    }
    75%{
        opacity : 0.6;
        top: 62%
    }
    to{
        opacity: 1;
        transform: translate(-50%,-50%);
    }
   }
}
`;
export {
	ModalWrapper
};
