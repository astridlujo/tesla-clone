import React from 'react';
import styled from 'styled-components';

const Section = ({ title, description, backgroundImage, leftButtonText, rightButtonText }) => {
    return (
        <Container bgImage={backgroundImage} >
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>

            <ButtonGroup>
                <LeftButton>{leftButtonText}</LeftButton>
                {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
            </ButtonGroup>

            <DownArrow src="/images/down-arrow.svg" />
        </Container>
    )
}

export default Section;

const Container = styled.div`
    background-image: ${props => `url('/images/${props.bgImage}')`};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
    flex-grow: 1;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    border-radius: 100px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    opacity: 0.85;
    margin: 8px;
    cursor: pointer;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    color: black;
    opacity: 0.85;
`

const DownArrow = styled.img`
    height: 40px;
    animation: animateDown infinite 1.5s;
    margin-bottom: 40px;
`