import styled from 'styled-components';
import background from '../img/Ventura_dark1.png'
import NavBar from '../components/navbar/NavBar';
import '../font.css';
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(${background}); 
    background-size: cover;
    font-family: "KCC-Hanbit";
   
`;
const MainPage = () => {
    return (
        <Container>
            <NavBar/>
        </Container>
    );
};

export default MainPage;