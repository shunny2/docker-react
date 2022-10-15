import styled from 'styled-components';

export const Header = styled.header`
    margin-bottom: 8px;
    border: 3px solid #29EBAA;

    @media (min-width: 640px) {
        margin-bottom: 64px;
    }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 0 auto;
    height: 60px;

    @media (min-width: 640px) {
        height: 100px;
    }
`;

export const Logo = styled.div`
    margin: 10px;
    font-family: monospace;
    font-weight: 700;
    cursor: pointer;
`;

export const H1 = styled.h1`
    font-size: 24px;

    @media (min-width: 640px) {
        font-size: 32px;
    }
`;

export const Buttons = styled.div`
    align-items: center;
    margin: 10px;
`;

export const Button = styled.button`
    font-size: 12px;
    font-family: monospace;
    font-weight: 700;
    background-color: rgba(255, 255, 255, 0);
    color: #29EBAA;
    padding: 10px 20px;
    border-color: #29EBAA;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        transition: 0.2s;
        background-color: #29EBAA;
        color: white;
    }

    @media (min-width: 640px) {
        font-size: 20px;
    }
`;