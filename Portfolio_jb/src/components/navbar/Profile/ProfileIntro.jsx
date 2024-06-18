import styled from "styled-components";

const Intro = styled.div`
    font-size:0.9rem;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

`
const Text = '"3년 동안 웹 프론트엔드 개발을 하고있는 개발자 배정빈입니다."'
const ProfileIntro = () => {
    return (
        <Intro>
            {Text}
        </Intro>
    );
};

export default ProfileIntro;