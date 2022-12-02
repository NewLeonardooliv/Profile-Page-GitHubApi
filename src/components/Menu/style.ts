import styled from "styled-components";

export const Bar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 17.5rem;
    background: #1e2a3a;
    color: #fff;
    overflow-y: auto;

    img {
        align-items: center;
        max-width: 15rem;
        border-radius: 50%;
    }
`;

export const Name = styled.h2`
    margin: 1.5rem 1.5rem;
    font-weight: bold;
    font-size: 1.5rem;
    color: white;
`;

export const Bio = styled.div`
    margin: 1.5rem 1.5rem;
    font-size: 0.875rem;
`;

export const Line = styled.div`
    margin: 2rem 0 2rem 0;
    width: 100%;
    border-bottom: 0.1px solid #151e29;
`;

export const Nav = styled.div`
    font-weight: bold;
    margin-top: 2rem;

    li {
        margin: 1rem;
        list-style: none;
    }

    a {
        color: rgb(201, 201, 201);
    }

    a:hover {
        color: white;
    }
    
`;

export const AtualPage = styled.li`
    a {
        color: #0d6efd;
    }
`;
