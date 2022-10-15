import styled from 'styled-components';

export const Header = styled.header`
    border: 3px solid #29EBAA;
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

export const Image = styled.img`
    width: 50px;
    margin: 10px;
`;