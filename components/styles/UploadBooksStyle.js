import styled from "styled-components";

const UploadBookWrapper = styled.div`
	.active-box {
		border: 2px dashed ${props => props.theme.secondaryColor} !important;
	}
	.container {
		display: flex;
	}
	textarea {
		min-height: 140px;
	}
	.p-inputtext {
		height: 100%;
		text-transform: capitalize;
		line-height: 32px;
		font-size: 18px;
	}
	.p-dropdown-filter-container {
 		width:100%
	}
	.p-focus {
		border-color: #606060 !important;
	}
	.p-dropdown-item {
		text-transform: capitalize;
	}

	.p-steps .p-steps-item.p-highlight .p-steps-number {
    background: ${props => props.theme.secondaryColor};
    color: #ffffff;
    border: 1px solid #fff;
    box-shadow: 0 0 0pt 1pt ${props => props.theme.secondaryColor};
    }
	.step ul{
		display: flex;
		justify-content: center;
	};
	a {
	outline: none;
	span {
		cursor: pointer;
	}
	
	}
	.p-steps::before{
		width: 50%;
		top: 45%;
		left: 26%;
		display: block;
		position: absolute;
	}
`;
const UploadInputWrapper = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  //margin-top: 5em;
  img {
    height: 5em;
    width: 5em;
    border-radius: 50%;
    box-shadow: 0 5px 15px 0 ${props => props.theme.secondaryColor}52
  }
  h1 {
    font-style: normal;
    font-weight: 100;
    line-height: normal;
    font-size: 72px;
    color: #222;
    opacity: 0.5;
  };
  .p-placeholder {
    color: #9f9f9f;
    font-size: 20px;
    }
  .p-inputtext.p-component, .p-dropdown {
    height: 2.5em;
    max-width: 538px;
    background: #ffffff;
    margin: 13px 0px;
    border: none;
    border-bottom: 2px solid ${props => props.theme.secondaryColor};
    padding: 0px 0.5em;
    font-size: 20px;
    transition: 0.3s ease-in-out;
    width: 100%;
  };
  .p-inputtext.p-component:focus {
     border-color: #444444 !important;
  }
  .p-inputtext.p-component:hover{
    opacity: 0.7
  }
  p {
    margin: 2em 0em;
    font-size: 15px;
    font-weight: 800;
    opacity: 0.7;
    transition: 0.5s ease-in-out;
    cursor: pointer
}

p:hover{
  opacity: 0.3
}
  button{
    max-width: 103px;
    height: 2.5em;
    font-size: 17px;
    border: none;
    border-radius: 2em;
    font-weight: 600;
    text-transform: capitalize;
    letter-spacing: 1px;
    background: ${props => props.theme.secondaryColor};
    color: #fff;
    cursor: pointer;
    box-shadow: 5px 10px 15px 0px  ${props => props.theme.secondaryColor}52;
    transition: 0.3s ease-in-out
  }

  button:hover{
    background: ${props => props.theme.secondaryColor};
    box-shadow: 1px 3px 5px 0px  ${props => props.theme.secondaryColor}52

  }
`;

const ImageSelectorContainer = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	flex-direction: column;
	.upload_main{
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	justify-content: center;
	button {
		width: 240px;
		height: 45px;
		margin-top: 31px;
		border: none;
		cursor: pointer;
		background: ${props => props.theme.secondaryColor};
		color: #ffffff;
		text-transform: capitalize;
	}
	}
	div {
	margin-left: 10px;
	margin-right: 10px;
	}
	.or_what {
		line-height: normal;
		font-size: 36px;
		color: #B7B6B6;
	}
	img {
		max-height: 100px;
		margin-top: 45px;
	}
	.drag-drop {
	  max-height: 274px;
	  max-width: 240px;
	  border: 1.5px dashed #C5C1C1;
		box-sizing: border-box;
		border-bottom: none;
		text-align: center;
		p {
			line-height: normal;
			color: #C4C4C4;
			text-overflow: ellipsis;
			overflow: hidden;
			white-space: nowrap;
			padding-left: 12px;
			padding-right: 12px;
		}
	}
	.upload_btn {
		width: 240px;
		height: 45px;
		margin-top: 31px;
		border: none;
		cursor: pointer;
		background: ${props => props.theme.secondaryColor};
		color: #ffffff;
		box-shadow: 1px 4px 3px 0px ${props => props.theme.secondaryColor}66;
		text-transform: capitalize;
	}
	button	{
		outline: none !important;
		}
	.gallery-text {
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 20px;
	cursor: pointer;
	text-decoration-line: underline;
	color: ${props => props.theme.secondaryColor};
	}
`;
// language=LESS
const ImageSelectionList = styled.div`
  .header {
    height: 45px;
    background: ${props => props.theme.secondaryColor};
    text-align: center;
    color: #fff;
    font-size: 30px;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    border-left: 3px solid #D4D3D3;
    border-right: 3px solid #D4D3D3;
    max-height: 300px;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
  }

  b {
    color: #908D8D;
  }

  .book_image {
    height: 212px;
  }

  .footer {
    margin: 10px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    button {
      border: none;
      background: ${props => props.theme.secondaryColor};
      width: 126px;
      border-radius: 5px;
      color: #fff;
    }
    .select_btn {
      background: none;
      color: ${props => props.theme.primaryColor};
      box-shadow: 0px 0px 2px 1px ${props => props.theme.secondaryColor};
    }
  }
`;
const Content = styled.div`
		display: flex;
		flex-direction: column;
		width:177px;
    text-align: center;
		margin: 10px;
		cursor: pointer;
		box-shadow: ${props => props.selected && "4px 0px 6px 0px ${props => props.theme.secondaryColor}"};
`;
const UploadProgress = styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
	.uploadProgress {
		max-width: 14em;
		padding: 14px;
		width: 100px;
		height: 100px;
	}
`;
export {
	UploadBookWrapper,
	UploadInputWrapper,
	ImageSelectorContainer,
	ImageSelectionList,
	Content,
	UploadProgress
};
