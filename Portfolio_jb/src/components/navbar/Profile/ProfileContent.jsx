import { ProfileInfo } from "../../../data/navbarData/Profile";
import styled from "styled-components";
import ProfileImg from "../../common/ProfileImg";
import ProfileIntro from "./ProfileIntro";
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-width: 400px;
    padding: 10% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    
`
const ItemDiv = styled.div`
    width:100%;
    background-color: #ffffffc8;
    border-radius: 10px;
    padding: 10px;
    box-shadow: inset 1px 1px 6px #909090;
`
const Item = styled.div`
    width: 100%;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    > a{
        flex: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #ea8484;
    }
`
const MiddleTitle = styled.div`
    text-align: end;
    flex: 15%;
    font-size: 1rem;
    font-weight: 700;
    
`
const Value = styled.div`
    flex: 70%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`
const ProfileContent = () => {
    return (
        <Container>
            <ProfileImg width="120px" height="120px"/>
            <ProfileIntro/>
            <ItemDiv>
            {ProfileInfo.map((info, index) => (
                <Item key={index}>
                    <MiddleTitle>{info.title}:</MiddleTitle>
                    {info.title === "깃허브" || info.title === "블로그" ? (
                        <a href={info.value} target="_blank" rel="noopener noreferrer">
                            {info.value}
                        </a>
                    ) : (
                        <Value>{info.value}</Value>
                    )}
                </Item>   
            ))}
            </ItemDiv>
        </Container>
    );
};

export default ProfileContent;
