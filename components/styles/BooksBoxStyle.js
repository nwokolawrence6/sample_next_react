import styled from "styled-components";

const BooksBoxWrapper = styled.div`
	//margin: 0px 0px 20px;
	border-radius: 6px;
	box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.23);
	cursor: pointer;
	background: #fff;
	padding: 0.5em;
	margin-bottom: 5em; 
	transition: 0.3s ease-in-out;
	:hover{
	box-shadow: 0 12px 20px -10px rgba(136,136,136,0.32), 0 4px 30px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(34,34,34,0.2);		
	}
		.text_wrapper {
	  text-align: left;
		padding: 7px;
		font-size: 1em;
		color: rgba(0,0,0,.4);
		div strong {
			text-transform: capitalize;
			font-size: 17px;
			font-weight: 300;
			color: #444;
		}
		div a {
			margin-top: 10px;
		}
		.sold {
			font-size: 10px;
			background: rgba(182,182,182,0.18);
			border-left: 2px solid green;
			border-right: 2px solid green;
			border-radius: 3px;
			margin-top: 0.8em;
			color: #444;
			padding: 5px;
			font-weight: 600;
			span {
				float: right;
			}
			
		}
		.price {
			border-top: 1px solid rgba(0,0,0,0.11);
			margin-top: 1em;
			padding-top: 10px;
			color: #444;
			font-weight: 400;
			a{
				color: #0ea432;
				font-size: 18px;
			}
		}
	}
`;
const BookWrapper = styled.div`
		display: flex;
		justify-content: space-evenly;
		flex-wrap: wrap;
		
`;
const BookBoxImage = styled.img`
		width: 195px;
		height: 266px;
		position: relative;
		top: -20px;
		border-radius: 3px;
		margin: 0 1em;
		box-shadow: 0 12px 20px -10px rgba(136,136,136,0.32), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(34,34,34,0.2);
		transition: 0.5s ease;
		:hover {
				box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.23);
				opacity: 0.7;
		}
		
		
`;
const PaginatorWrapper = styled.div`
    .p-highlight {
    		background: ${props => props.theme.secondaryColor} !important;
    }
		display: flex;
		justify-content: center;
	.p-paginator {
	width: 400px;
	background-color: transparent;
	border: none;
	padding: 0;
	box-shadow: 0 1px 3px 0 #d4d4d5,0 0 0 1px #d4d4d5;
	border-radius: 5px;
	}
	
`;
export {
	BooksBoxWrapper,
	BookBoxImage,
	BookWrapper,
	PaginatorWrapper
};
