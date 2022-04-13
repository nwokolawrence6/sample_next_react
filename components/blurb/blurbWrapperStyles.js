import styled from 'styled-components'

const BlurbStyles = styled.div`
    height: 70vh;
    width: 100%;
    display: flex;
    justify-content: ${props => props.space || 'center' };
    align-items: center;
    flex-direction: ${props => props.flexDirections };
    img{
        margin: 3em 0;
    }
    h2{
        margin-top: 100px;
        font: Bold 102px/34px Montserrat;
        letter-spacing: 1.9px;
        color: #9F9F9F;
        opacity: 1;
    }
    p{
        font: Light 26px/41px Montserrat;
        letter-spacing: 1.3px;
        color: #9F9F9F;
        opacity: 1;
        text-align: center;
        line-height: 1.9rem;
        margin-left: 20px;
        margin-right: 20px;
    }
   button {
			border: none;
			color: white;
			padding: 20px 50px;
			background: #cc0227;
			border-radius: 6px;
			font-size: 16px;
			font-family: 'Ubuntu';
			cursor: pointer;
			transition: 0.3s ease-in-out;
			:hover {
				background: red;
			}
			a{
			    color: white;
			    text-decoration: none;
			}
		}
		.txt{
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  flex-direction: column;
		  h2{
		    font: Bold 102px/34px Montserrat;
            letter-spacing: 0;
            color: #CC0227;
            margin: 0.5em 0;
          }
          p{
            margin: 2em 0;
          }
		  button{
		    background: transparent linear-gradient(180deg, #F11E45 0%, #CC0227 100%) 0% 0% no-repeat padding-box;
            border-radius: 5px;
		  }
		  
		}
		@media (max-width: 850px) {
		    flex-direction: column;
		    margin: 5em 0;
		    img{
		      width: 250px !important;
		    }
		    .txt {
		       flex-direction: column;
		       padding: 0 3em;
		        h2{
                    font: Bold 102px/34px Montserrat;
                    letter-spacing: 0;
                    color: #CC0227;
                    margin: 20px 0;
                  }
		      }
		  }

`;
export {
    BlurbStyles
}
