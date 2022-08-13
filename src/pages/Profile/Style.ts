import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: center;

    a {
        text-decoration: none;
    }
`;

export const Bar = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 280px;
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

export const Social = styled.div`
    a {
        width: 32px;
        height: 32px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        background-color: #0d6efd;
        margin: 0.5rem;
    }

    img {
        width: 1rem;
        margin-top: 25%;
        border-radius: 0;
    }
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

export const Contents = styled.div`
    flex: 1;
    margin: 0 3rem 3rem 21rem;
    
    h1 {
        padding: 2rem 0 0 0;
        color: white;
        font-size: 3rem;
    }
    h2 {
        color: #FFFFFFB3;
        font-size: 1rem;
        margin-bottom: 1.5rem;
        font-weight: 300;
        padding: 2rem;
    }
`;

export const Projects = styled.div`
    background: #151e29;

`;