import styled from "styled-components";
import React from "react";

const BookDetailsWrapper = styled.div`
	.edit_icon {
		font-size: 13px;
		color: #808186;
		cursor: pointer;
		right: 100px;
		top: 4px;
	}
	section {
			margin-top: 2em;
		}
	.close_modal {
		color: #c30707;
		font-weight: bolder;
		cursor: pointer;
		font-size: 14px;
	}
	.input_wrapper {
		text-transform: capitalize;
		display: flex;
		justify-content: space-between;
   .p-button {
   		background: #f6f6f6;
   		color: #0f0f10;
   		:active {
   			background: rgba(44,164,86,0.65);
   		}
   		:hover {	
   			background: ${props => props.theme.secondaryColor};
   		}
   		:focus {	
   			background: ${props => props.theme.secondaryColor};
   			color: #ffffff;
   		}
   }
	}
	.hidden {
		visibility: hidden;
		position: absolute;
		height: 0px;
		display: inline;
	}
	.search_wrapper {
		
	}
	.p-dropdown:focus {
		border-bottom: 2px solid ${props => props.theme.secondaryColor};
	}

	.book_info { 
		display: flex;
		box-shadow:  0 5px 5px 0 rgba(15,15,16,0.23);
		background: #fff;
		align-items: center;
		padding: 1em;
		
		.desc { 
			padding: 1em;
			background: rgba(170,170,170,0.1);
			border-left: 2px solid ${props => props.theme.secondaryColor};
			p {
				text-transform: none;
			}
		}
	
		h3 span { 
			color: #b2b2b2;
			font-weight: bold;
		}
		h1, p, h3 { 
		margin: 0px;
		padding: 0px;
		margin-bottom: .5em;
		text-transform: capitalize;
		}
		img { 
			height: 300px;
			margin-right: 2em;
		}
		section { 
			display: flex;
			flex-direction: column;
			width: 100%;
			.input_wrapper{
				display: flex;
				
			}
		} 
		.boot_title_editable {
			border: none;
			font-size: 14px;
			font-weight: 900;
			color: #000;
			height: 2.5em;
			background: #ececec;
			margin: 13px 0px;
			border-bottom: 2px solid ${props => props.theme.secondaryColor};
			padding: 0px 0.5em;
			transition: 1s ease-in-out;
		}
		.book_title {
			font-size: 14px;
			font-weight: 900;
			border: none;
			background: none;
			color: #000;
		}
		
	}
	
	@media (max-width: 820px) {
		.book_info{
			flex-wrap: wrap;
			justify-content: center;
			padding: 0.5em;
			img {
				margin: 0px;
			}
			section{
				flex-wrap: wrap;
				text-align: center;
				width: 100%;
				.input_wrapper {
					flex-wrap: wrap;
					justify-content: center;
					margin-bottom: 20px;
				}
			}
		}
	}
	.filters { 
		display: flex;
		border-top: 1px solid rgba(128,128,128,0.25);
		margin-top: 3em;
		padding-top: 2em;
		.p-dropdown { 
			width: 150px !important;
			margin: 0em 1em;
			border: none;
			border-bottom: 2px solid ${props => props.theme.secondaryColor};
		}
		.p-autocomplete { 
			input {
				border: none;
				border-bottom: 2px solid ${props => props.theme.secondaryColor};
			}
		}
		.search{ 
			margin-left: auto;
			input {
				border: none;
				border-bottom: 2px solid ${props => props.theme.secondaryColor};
			}
		}
	}
	
		@media (max-width: 820px) {
		.filters{
			flex-wrap: wrap;
			justify-content: center;
			align-items: center;
			.p-inputgroup{
				margin-left: 0px;
				margin-top: 2px;
			}
			.p-dropdown{
				margin: 5px;
			}
			
		}
	}
	
	.p-inputgroup {
			margin-left: auto;
			.p-inputgroup-addon {
				border: none;
				background: #fff;
				border-bottom: 2px solid ${props => props.theme.secondaryColor}
			}
	}
	.book_buyers {
		margin-top: 2em;
		height: 55vh;
		overflow-y: scroll;
		box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
			transition: 0.3s ease-in-out;
			:hover{
				box-shadow: ${props => props.sprayBoxShadow};
			}
		img {
			height: 60px;
			width: 60px
		}
		
		thead {
			tr {
				background: #cfcfcf;
			}
		}
		table {
			box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);
			transition: 0.3s ease-in-out;
			:hover{
				box-shadow: ${props => props.sprayBoxShadow};
			}
		}
	}
`;
const EditeBookDetailWrapper = styled.div`
	input {
		height: 1.5em;
		width: 100%;
		max-width: 538px;
		background: #ffffff;
		margin: 10px 0px;
		border: none;
		border-bottom: 2px solid ${props => props.theme.secondaryColor};
		padding: 0px 0.5em;
		font-size: 20px;
		transition: 0.3s ease-in-out;
	}
	.footer {
    margin: 10px;
    height: 40px;
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    button {
      border: none;
      background: ${props => props.theme.secondaryColor};
      width: 126px;
      border-radius: 5px;
      color: #fff;
      margin-bottom: 10px;
    }
    .select_btn {
      background: none;
      color: green;
      box-shadow: 0px 0px 2px 1px ${props => props.theme.secondaryColor};
    }
  }
  .scrollView {
  	overflow-y: scroll;
		height: 400px;
  }
`

export {
	BookDetailsWrapper,
	EditeBookDetailWrapper
};
