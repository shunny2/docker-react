import styled from 'styled-components';

export const Footer = styled.footer`
    border: 3px solid #29EBAA;
    margin-top: 64px;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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
        font-size: 36px;
    }
`;