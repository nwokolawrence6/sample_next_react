import styled from 'styled-components';

const AppAdminTopBar  = styled.div`
	a {
	color: #727272 !important;
	font-size: 14px;
	svg {
		font-size: 19px;
		position: absolute;
		right: 57px;
		top: 3px;
	}
	span {
	  margin-left: 5px;
	}
}
`;

const AppTopBarMessage = styled.div`
	svg {
		position: relative;
		left: 5px;
		top: 3px;
		-webkit-animation: spin 4s infinite linear;
		 animation: spin 1ms infinite linear;
	}
	@-moz-keyframes spin {
    from { -moz-transform: rotate(0deg); }
    to { -moz-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
    from { -webkit-transform: rotate(0deg); }
    to { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
    }
		margin: 4px -21px -21px;
	a {
		cursor: pointer;
		background-color: #f82c0099;
		padding-left: 7px;
		padding-right: 7px;
		color: #fff !important;
		border-radius: 4px;
		box-shadow: 0 0 4px 0 #968c8a;
		:hover {
			color: #ffffff;
		}
	}
	.p-messages.p-messages-warn , .p-messages-success{
	  border-radius: 0px;
		background-color: #ffab99;
		margin: 0px;

		.p-messages-wrapper {
			padding: 0px;
			text-align: center;
		}
		.p-messages-summary {
			font-weight: normal;
			${ props => props.isResent ? 'float:left' : null };
		}
		span {
			font-size: 12px !important;

		}
	}
`;
export {
	AppAdminTopBar,
	AppTopBarMessage
}
