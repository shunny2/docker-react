import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const Form = styled.form``;

export const H1 = styled.h1`
    margin-bottom: 40px;
    font-family: monospace;
    font-size: 24px;    

    @media (min-width: 640px) {
        font-size: 32px;
    }
`;

export const ContentFields = styled.div`
    margin-bottom: 20px;
`;

export const LabelSignUp = styled.label`
    font-size: 14px;    

    @media (min-width: 640px) {
        font-size: 16px;   
    }
`;

export const labelError = styled.label`
    font-size: 12px;
    font-weight: bold;    

    @media (min-width: 640px) {
        font-size: 14px;   
    }
`;

export const Strong = styled.strong`
    cursor: pointer;

    a {
        text-decoration: none;
        font-weight: bold;
        color: #29EBAA;      
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