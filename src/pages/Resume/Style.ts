import styled from "styled-components";

export const List = styled.span`
    width: 25%;

    font-size: 0.75rem;
    li {
        color: white;
        padding-left: 0;
        margin: 0.5rem;
        list-style: none;
        text-align: right;
    }
    a {
        color: white;
    }
`;

export const Title = styled.span`
    flex: 1 0 0%;
    display: flex;

    h1 {
        margin: 0 10% 0 0 ;
        text-align: left;
        color: white;
        text-transform: uppercase;
        font-size: 2rem;
        letter-spacing: 0.2rem;
    }
`;