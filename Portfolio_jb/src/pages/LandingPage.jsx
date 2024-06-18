import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    width: 100%;
    font-size: 80px;
    font-family: 'DNFBitBitv2';
    color: #39AD7C;    
    
`
const AnimationTitle = styled.div`
    color: #b2ddcb;
    animation: waveAnimation 1s infinite ease-in-out;
    margin-top: 5%;
    text-align: center;
    font-size: 50px;
    @keyframes waveAnimation {
    0% {
        transform: translateY(-2px);
    }
    50% {
        transform: translateY(2px);
    }
    100% {
        transform: translateY(-2px);
    }
    }
`
const ProgressBarDiv = styled.div`
    width: 80%;
    height: 20px;
    background-color: #ffffff5e;
    border-radius: 50px;
   
`
const ProgressBar = styled.div`
    /* width: ${({ progress }) => progress}%;. */
    height: 20px; 
    background-color: #ffffff;
    animation: progressAnimation 3s ease-in-out forwards; 
    border-radius: 50px;
    @keyframes progressAnimation {
        0% {
            width: 1%; /* 시작 지점 */
        }
        100% {
            width: 100%; /* 끝 지점 */
        }
    }
    
`


const LandingPage = () => {
    const navigate = useNavigate();
 
    useEffect(()=>{
        const timer  = setTimeout(()=>{
            navigate('/intro');
        }, 4000)
        return ()=> clearTimeout(timer);
    },[navigate]);

    return (
        <Container>
            <Title>
                FrontEnd-Developer, 배정빈
                <AnimationTitle>포트폴리오 부팅중 ... </AnimationTitle>  
            </Title>
            <ProgressBarDiv>
                <ProgressBar />
            </ProgressBarDiv>
        </Container>
    );
};

export default LandingPage;