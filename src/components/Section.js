import React from 'react';
import styled from 'styled-components';

const Section = () => {
    return (
        <Container >
            <ItemText>
                <h1>Model S</h1>
            </ItemText>
        </Container>
    )
}

export default Section;

const Container = styled.div`
    background-image: url('/images/model-s.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
`
const ItemText = styled.div`

`