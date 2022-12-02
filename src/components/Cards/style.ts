import styled from "styled-components";

export const Content = styled.div`
	color: var(--white);
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
    align-items: center;
    flex-direction: row;

`

export const Card = styled.div`
	height: 170px;
	width: 420px;

	margin: 45px 90px;
	border-radius: 10px;
	background-color: var(--secundaria);

	cursor: pointer;

	&:hover {
		background-color: #2f425c;
	}
`

export const Head = styled.div`
	font-family: 'Poppins';
	font-size: 1rem;
	font-weight: 500;
	margin: 15px 25px;

`

export const Body = styled.div`
	font-family: 'Bebas Neue';
	font-style: normal;
	font-weight: 400;
	margin: 25px 25px 10px 25px;
	font-size: 40px;
`

export const Foot = styled.div`
	font-family: 'Poppins';
	font-style: normal;
	margin: 15px 25px;
	font-size: 1rem;
`
