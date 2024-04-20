import styled from "styled-components";
import ProfileIcon from "./navbar/ProfileIcon";
import SkillsIcon from "./navbar/SkillsIcon";
import EducationIcon from "./navbar/EducationIcon";
import CertificateIcon from "./navbar/CertificateIcon";
const Container = styled.div`
    width: 50vw; //요소 크기에 맞출지 고민중 
    height: 10vh;
    background: rgba( 255, 255, 255, 0.25 );
    backdrop-filter: blur( 6.5px );
    -webkit-backdrop-filter: blur( 6.5px );
    border-radius: 15px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const NavBar = () => {
    return (
        <Container>
            <ProfileIcon />
            <SkillsIcon />
            <EducationIcon />
            <CertificateIcon/>
        </Container>
    );
};

export default NavBar;