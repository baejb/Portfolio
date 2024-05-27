import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled ,{css}from 'styled-components';
import background from '../img/Ventura_dark1.png'
import ProfileImgName from '../components/LockScreen/ProfileImgName';

const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background-image: url(${background}); 
    background-size: cover;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    
    ${props =>
        props.$cursorclick &&
        css`
            cursor: pointer;
        `}
   
   
`;
const ProfileDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 4%;
    position: absolute;
    top: 20%;

`

const Introduce = styled.div`
    position: absolute;
    top: 60%;
    width: 45vw;
    min-width: 250px;
    background: rgba( 255, 255, 255, 0.25 );
    box-shadow: 0 2px 8px 0 rgba( 128, 128, 128, 0.37 );
    backdrop-filter: blur( 1px );
    border-radius: 20px;
    color: white;
    padding: 2%;
    font-size: 14px;
    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    }
`
const NextPageExplain = styled.div`
    position: absolute;
    top: 85%;
    font-size: 12px;
    color: white;
    padding: 2%;
    animation: fadeIn 1s ease-in-out;
    @keyframes fadeIn {
        from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
    }
`
const LockScreenPage = () => {
    const navigator = useNavigate();
    const [introVisible, setIntroVisible] = useState(false);
    const [explainVisible, setExplainVisible] = useState(false);
    const handleClick = () => {
        if(explainVisible){
            navigator('/main');
        }
    };
  
    useEffect(()=>{
        const timer = setTimeout(() => {
            setIntroVisible(true);
        }, 5000);
        const timer1 = setTimeout(() => {
            setExplainVisible(true);
        }, 7000);
        return () => {
            clearTimeout(timer); 
            clearTimeout(timer1); 
        };
    },[]);
 
    return (
        <Container onClick={handleClick} $cursorclick={explainVisible}  >
        <ProfileDiv>
            <ProfileImgName/>
        </ProfileDiv>
             {introVisible &&
             <Introduce>
              
                안녕하세요 ! 소통을 사랑하는 프론트엔드 개발자 배정빈입니다.<br/>
                다양한 분야의 사람들과 하나의 비전을 위해 협력하고 실현해나가는 과정을 좋아합니다. <br/>
                소통을 사랑하는 만큼 사용자와 가장 먼저 소통할 수 있는 프론트엔드 개발은 제 가슴을 
                뛰게 하는 일입니다 ! <br/>
                앞으로도 사용자에게 더 좋은 경험을 제공하기 위한 개발자가 되기 위해 노력할 것입니다.  

             </Introduce>
            }
            {explainVisible && 
            <NextPageExplain>
                다음 페이지로 이동하려면 화면을 클릭해주세요.
            </NextPageExplain>
            }
        </Container>
    );
};

export default LockScreenPage;