import styled from "styled-components";

export const Button = styled.button`
    display: block;
    padding: 2px 5px;
    margin: 35px auto;
    width: 140px;
    height: 35px;
    background-color: transparent;
    color: #29EBAA;
    border-color: #29EBAA;
    border-radius: 5px;
    font-size: 16px;
    font-family: monospace;
    font-weight: 700;
    cursor: pointer;

    &:hover {
        transition: 0.2s;
        background-color: #29EBAA;
        color: white;
    }

    @media (min-width: 640px) {
        margin: 50px auto;
        font-size: 18px;
        width: 200px;
        height: 50px;
    }
`;