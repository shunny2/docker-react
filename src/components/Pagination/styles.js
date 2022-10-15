import styled, { css } from 'styled-components';

export const Content = styled.div`
    flex-wrap: wrap;
    gap: 16px;
    margin: 1px auto;
    width: 100%;
    min-height: 50vh;

    @media (min-width: 640px) {
        min-height: 60vh;
        width: 60%;
    }
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

export const Image = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 30px;
    cursor: pointer;

    @media (min-width: 640px) {
        margin-left: 40px;
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

export const Buttons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    @media (min-width: 640px) {
        margin-top: 30px;
    }
`;

export const Button = styled.button`
    background-color: transparent;
    color: #3DECB1;
    font-size: 10px;
    border-color: #3DECB1;
    border-radius: 5px;
    font-family: monospace;
    font-weight: 700;
    cursor: pointer;
    padding: 5px 7px;

    ${props =>
        ((props.name === 'btn-view') && css`
            &:hover {
                background-color: #3DECB1;
                color: white;
            }`) ||
        ((props.name === 'btn-edit') && css`
            &:hover {
                background-color: #80D8FF;
                color: white;
            }`) ||
        ((props.name === 'btn-delete') && css`
            &:hover {
                background-color: rgb(241, 45, 45);
                color: white;
            }`)
    }

    @media (min-width: 640px) {
        font-size: 20px;
        padding: 5px 40px;
    }
`;