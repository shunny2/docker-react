import styled from 'styled-components';

export const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 80vh;

    @media (min-width: 640px) {
        min-height: 78vh;
    }
`;

export const Content = styled.div`
    text-align: center;
    padding: 30px 20px;
    border: 3px solid #29EBAA;
    width: 350px;
    height: 500px;
    border-radius: 5px;

    @media (min-width: 640px) {
        width: 500px;
        height: 600px;
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

export const H1 = styled.h1`
    margin-bottom: 25px;
    font-family: monospace;
    font-size: 18px;

    @media (min-width: 640px) {
        margin-bottom: 40px;
        font-size: 32px;
    }
`;

export const Form = styled.form``;

export const ContentFields = styled.div`
    margin-bottom: 10px;

    @media (min-width: 640px) {
        margin-bottom: 20px;
    }
`;

export const labelError = styled.label`
    font-size: 12px;
    font-weight: bold;

    @media (min-width: 640px) {
        font-size: 14px;   
    }
`;