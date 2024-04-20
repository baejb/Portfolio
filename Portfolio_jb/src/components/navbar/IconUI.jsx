/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `
const ImgIcon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${props => props.image}); 
    background-size: cover;
    cursor: pointer;
`
const Title = styled.div`
    font-size: 12px;
    color: white;

`
const IconUI = ({image , title}) => {
    return (
        <Container >
            <ImgIcon image={image}/>
            <Title>{title}</Title>
        </Container>
    );
};

export default IconUI;