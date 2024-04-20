import styled from "styled-components";
import { useState, useEffect} from "react";
import profile from '../../img/profile.png';
const ProfileImg = styled.div`
    width: 10vw;
    height: 10vw;
    min-width: 100px;
    min-height: 100px;
    border-radius: 50%;
    background-image: url(${profile});
    background-size: cover;
    margin-bottom: 20px;
`
const Name = styled.div`
    color: white;
    text-shadow: 1px 2px 8px  black;
    font-size: 22px;
    margin-bottom: 10px;
    text-align: center;
`
const PassWord = styled.div`
    min-width: 100px;
    width: 10vw;
    height: 3.5vh;
    border-radius: 10px;
    background-color: #ffffff30;
    border: none;
    font-size: 12px;
    color: #ffffffdb;
    display: flex;
    align-items:center;
    padding-left: 10px;
    font-weight: bolder;
    
`
const ProfileImgName = () => {
    const [password, setPassword] = useState('');

    useEffect(() => {
       
        const interval = setInterval(() => {
            // password 상태의 길이가 4보다 작을 때만 "*"을 추가하도록 조건 추가
                
            if (password.length < 8) {
                setPassword(prevPassword => prevPassword + '* ');
            }
        }, 1000);
        return () => {
            clearInterval(interval); 
        };
    }, [password.length]);
    return (
        <>
        <ProfileImg />
             <Name>배정빈</Name>
            {password.length ===0 ?<PassWord>암호 없음</PassWord>   :
            <PassWord>{password}</PassWord> 
            }
        </>
    );
};

export default ProfileImgName;