import styled from 'styled-components';

const AuthHeaderStyles = styled.div`
	display: flex;
	align-items: center;
	max-width: 100%;
	justify-content: space-between;
	padding: 20px 10rem;
	background: transparent;
	z-index: 10;
	h1 {
		font: bolder 25px 'Ubuntu', sans-serif !important;

		span {
			color: #cc0227;
		}
	}

	section {
		display: flex;
		align-items: center;
		cursor: pointer;
		transition: 0.3s ease-in-out;
		p,a {
			transition: 0.3s ease-in-out;
			color: #777;
		}
		svg {
			color: #444;
			font-size: 45px;
			margin: 0 10px;
			font-weight: 100;
			transition: 0.3s ease-in-out;
		}
		:hover {
			p {
				opacity: 0.4;
			}
			svg {
				color: #cc0227;
				opacity: 1;
			}
		}
	}
	@media (max-width: 820px) {
		flex-wrap: wrap;
		justify-content: center;
		padding: 20px 2em;
		section {
			flex-wrap: wrap;
			p {
				margin: 0;
			}
		}
	}
`;

export default AuthHeaderStyles;
