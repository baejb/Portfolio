import { ProfileInfo } from "../../../data/navbarData/Profile";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    min-width: 400px;
    height: 100%;
    padding: 30% 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`
const Item = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    > a{
        flex: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre;
    }
`
const Title = styled.div`
    text-align: end;
    flex: 15%;
    font-size: 1.2rem;
    font-weight: 800;
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
            {/* ProfileInfo 배열을 매핑하여 각 항목을 렌더링합니다. */}
            {ProfileInfo.map((info, index) => (
                <Item key={index}>
                    {/* 제목은 그대로 텍스트로 표시합니다. */}
                    <Title>{info.title}:</Title>
                    {/* 링크는 따로 <a> 태그로 렌더링합니다. */}
                    {info.title === "Github" || info.title === "Blog" ? (
                        <a href={info.value} target="_blank" rel="noopener noreferrer">
                            {info.value}
                        </a>
                    ) : (
                        // 그 외의 항목은 그대로 표시합니다.
                        <Value>{info.value}</Value>
                    )}
                </Item>
            ))}
        </Container>
    );
};

export default ProfileContent;
