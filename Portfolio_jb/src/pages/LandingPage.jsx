import {styled} from 'styled-components';
import '../font.css';
const Container = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Title = styled.div`
    font-size: 75px;
    font-family: 'DNFBitBitv2';
    color: #39AD7C;
    
    > div{
        color: #b2ddcb;
    }


`
const ProgressBarDiv = styled.div`
    width: 80%;
    height: 25px;
    background-color: #ffffff5e;
    border-radius: 50px;
   
`
const ProgressBar = styled.div`
    /* width: ${({ progress }) => progress}%;. */
    height: 25px; 
    background-color: #ffffff;
    animation: progressAnimation 3s ease-in-out forwards; 
    border-radius: 50px;
    @keyframes progressAnimation {
        0% {
            width: 0%; /* 시작 지점 */
        }
        100% {
            width: 100%; /* 끝 지점 */
        }
    }
`
const LandingPage = () => {
    return (
        <Container>
            <Title>
                FrontEnd-Developer, 배정빈
                <div>포트폴리오 로딩중 </div>  
            </Title>
            <ProgressBarDiv>
                <ProgressBar />
            </ProgressBarDiv>
        </Container>
    );
};

export default LandingPage;