import styled from 'styled-components';
import bgImage from '../../assets/images/bg.jpeg';

const HeadingWrapper = styled.div`

 a.top_header_home {
  background: #cc0227;
	padding: 15px 30px 15px 30px;
	color: #fff;
	top: 15px;
	position: relative;
 }
	//box-shadow: inset 0 0 0 10000px rgba(0,0,0,.6);
	background: url(${ bgImage }) no-repeat top center;
	background-size: cover;
	.header__text h1 {
		background: transparent !important;
	}
	.main {
	  //find_me
		@media (max-width: 1176px) { 
				height: 40vh !important;
		}
		height: 100vh;
		background-size: cover;
		padding-top: 10px;
		display: flex;
		position: relative;
		align-items: center;
		transition: 0.5s ease-in-out;

		.header_content {
			width: 1080px;
			margin-left: auto !important;
			margin-right: auto !important;
			display: flex;
			justify-content: space-between;

			.header__text {
			@media screen and  (max-width: 1119px) {
				  padding: 100px;
				}
				//@media ( min-width: 770px) {
				//  padding-left: 100px;
				//}
				color: #ffffff;

				h1,
				span {
					margin: 0px;
					padding: 0px;
				}
				h1 {
					font-size: 35px;
					margin-bottom: 15px;
					 color: #e2e6e9;
          font-weight: bolder;
				}
				.span {
					text-transform: capitalize;
					font-size: 30px;
					font-weight: 800;
          line-height: 1em;
					color: #FAAB9F;
					/* text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 2px 0 #b9b9b9, 0 3px 0 #aaa,
						0 6px 3px rgba(0, 0, 0, 0.5); */
					//0 0 5px rgba(0,0,0,.1),
					//0 1px 3px rgba(0,0,0,.3),
					//0 3px 5px rgba(0,0,0,.2),
					//0 5px 10px rgba(0,0,0,.25),
					//0 10px 10px rgba(0,0,0,.2),
					//0 20px 20px rgba(0,0,0,.15);
				}
				p {
				font-size: 17px;
				font-weight: bold;
				margin-top: 20px;
				padding-top: 20px;
				color: #bbb7b4;
				}
				button {
					background: linear-gradient(
						140.6deg,
						${ props => props.theme.secondaryColor },
						${ props => props.theme.secondaryColorDark } 65%
					);
					border: none;
					padding: 10px 45px;
					border-radius: 3px;
					height: 3em;

					color: #ffffff;
					text-transform: capitalize;
					font-weight: 500;
					cursor: pointer;
					font-size: 20px;
					transition: 0.5s ease-in-out;
					display: flex;
					align-items: center;

					span {
						position: relative;
						left: -20px;
						transition: 0.5s ease-in-out;
					}

					svg {
						padding: 10px;
						visibility: hidden;
						transition: 0.5s ease-in-out;
						position: relative;
						left: -50px;
						opacity: 0;
					}
					:hover {
						opacity: 0.8;
						span {
							left: 0px;
						}
						svg {
							left: 0px;
							height: 2em;
							width: 2em;
							padding-right: 10px;
							opacity: 1;
							visibility: visible;
						}
					}
				}
			}
			.image_text {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img {
					height: 35em;
					transition: 0.5s ease-in-out;
					animation: spin 5.5s infinite ease-in-out both;
				}
				h1,
				p {
					margin: 0px;
					text-align: right;
				}
			}
		}
		@keyframes spin {
			0% {
				transform: translateX(0);
			}
			50% {
				transform: translateX(30px);
			}
			100% {
				transform: translateX(0px);
			}
		}
	}
	.body_text {
		width: 1127px;
		margin-left: auto !important;
		margin-right: auto !important;
		h1,import default from './theme';

		p {
			color: red;
			text-align: right;
		}
	}

	@media (max-width: 1800px) {
		.main {
			position: relative;
			top: -77px;
		}
	}

	@media (max-width: 767px) {
		.main {
			background-size: cover;
			flex-wrap: wrap;
			top: -5px;
			height: 100%;
			.header_content {
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				.header__text {
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					bottom: -9em;
					padding: 10px 1em;
					div {
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
					}
					h1 {
						text-align: center;
						margin: 0px;
					}
					.span {
						font-size: 30px;
						line-height: 30px;
						text-align: center;
						padding-top: 10px;
					}
					p {
						margin-top: 5px;
						text-align: center;
						font-size: 15px;
						text-wrap: normal;
					}
				}
				.image_text {
					margin-top: 12em;
					div {
						display: none;
					}
					img {
						height: 20em;
					}
				}
				:nth-child(4) {
					align-self: center;
				}
			}
		}
	}
	.home_heading_footer {
	background-color: #081023;
	height: 50px;
	display: flex;
	color: #fffffd;
	justify-content: flex-end;
	align-items: center;
	padding-right: 20px;
	a {
		margin: 3px;
		color: #fffffd;
		font-size: 21px;
	}
	span {
	font-weight: bolder;
		font-size: 15px;
		margin: 10px;
		//:first-child {
		//	margin-right: 10px;
		//}
	}
	}
`;

export { HeadingWrapper };
