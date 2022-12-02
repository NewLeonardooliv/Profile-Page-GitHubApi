import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		--background: #151e29;
        --primaria: #212121;
        --secundaria: #1e2a3a;
		--input: #e8eaee;
        --color: #212121;
		--gray: #515151;
		--lightgray: #8a8a8a;
		--white: #fff
	}

	* {
		outline: none;
		box-sizing: border-box;
	}
	
	body {
		background: var(--background);
		color: var(--color);
		-webkit-font-smoothing: antialiased;
		background-color: var(--background);
	}
	

	body, input, textarea, button {
		font-family: 'Poppins';
		font-weight: 600;
	}

	h1, h2, h3, h4, h5, h6, strong {
		font-family: 'Poppins';
		font-weight: 600;	
	}

	button {
		cursor: pointer;
	}

	a {
		text-decoration: none;
		color: var(--input);
	}
`;


export { GlobalStyle }