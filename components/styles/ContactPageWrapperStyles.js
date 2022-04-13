import styled from 'styled-components';

const ContactWrapper = styled.div`
	/* background: #fff; */
	padding: 14em 0;
	position: relative;
	margin: -10px 30px 0px;
	background: #fff;
	/* background: #f5f7ff; */
	/* margin: 0 auto; */
	position: relative;
	top: -10em;
	box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	h1,
	h3 {
		text-align: center;
	}
	h3 {
		font-size: 14px;
	}
	h1 {
		font-size: 40px;
		margin: 1em 0;
		opacity: 0.3;
	}
	label {
		text-transform: uppercase !important;
		font-size: 12px !important;
	}
	.contact-form .ui.form input,
	textarea {
		/* background: #49b97015 !important; */
		border-radius: 0px !important;
		border: none !important;
		border-bottom: 2px solid #6b6b6b50 !important;
		resize: none !important;
	}

	.contact-form .ui.form input {
		height: 50px !important;
		font-size: 14px;
	}

	.contact-form .ui.form button:hover {
		background: ${props => props.theme.secondaryColor} !important;
		color: white;
		box-shadow: 1px 1px 5px 0px #17332175;
	}
	.contact-form .ui.form button {
		background: ${props => props.theme.primaryColor} !important;
		color: white;
		box-shadow: 5px 10px 20px 0px ${props => props.theme.primaryColor}62;
		border-radius: 30px !important;
		transition: 0.3s ease-in-out;
		padding: 17px 50px;
		margin-top: 3em;
	}

	.ui.form .field.btn {
		display: flex;
		justify-content: center;
	}

	.abt-seg {
		height: 250px;
		/* background: ${props => props.theme.primaryColor} !important; */
		display: flex !important;
		justify-content: center !important;
		align-items: center !important;
		flex-direction: column !important;
		margin-top: 7em !important;
		h3 {
			color: #444 !important;
		}
	}

	.abt-seg > h2,
	h3 {
		font-weight: 400 !important;
	}
	.abt-seg > span {
		font-weight: 100 !important;
		font-size: 20px !important;
		border-top: 1px solid #444 !important;
		border-bottom: 1px solid #444 !important;
    text-align: center !important;
    color: #444 !important;

		padding: 8px 0px;
		margin: 10px 0px;
		color: white;
		font-style: italic;
	}
	h3,
	h2 {
		color: ${props => props.theme.primaryColor};
		text-transform: uppercase;
		margin-bottom: 1.5em;
		font-weight: 600;
		font-size: 20px;
		position: relative;
		/* top: -40px; */
		span {
			color: #cc0227;
		}
	}
`;

export { ContactWrapper };
