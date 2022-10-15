import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 0;
`;

export const Content = styled.div`
    margin-top: 16px;
`;

export const Card = styled.div`
    margin: 20px auto;
    padding: 20px 30px;
    width: 350px;
    border: 3px solid #3DECB1;
    border-radius: 7px;

    @media (min-width: 640px) {
        width: 600px;
        margin: 30px auto;
        padding: 30px 40px;
    }
`;

export const Loading = styled.div`
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`;

export const Image = styled.img`
    width: 20%;
    margin-left: 40px;

    @media (min-width: 640px) {
        width: 30%;
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const H2 = styled.h2`
    display: flex;
    flex-wrap: wrap;
    max-width: 350px;
    font-family: Noto Sans;
    font-weight: 700;
    font-size: 14px;

    @media (min-width: 640px) {
        font-size: 28px;
        max-width: 500px;
    }
`;

export const Line = styled.div`
    background-color: #3DECB1;
    height: 1.5px;

    @media (min-width: 640px) {
        height: 2px;
    }
`;

export const Description = styled.p`
    margin-top: 20px;
    font-size: 12px;
    max-width: 350px;
    font-family: Noto Sans;
    font-weight: 500;

    @media (min-width: 640px) {
        font-size: 20px;
        max-width: 500px;
    }
`;