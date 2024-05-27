import { useState } from "react";
import styled from "styled-components";
import { CertificateIcon, EducationIcon, ProfileIcon, SkillsIcon } from "./index";
import Modal from "../common/Modal";
import useModal from "../../hooks/useModal";

import ProfileContent from "./Profile/ProfileContent";
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
const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
`
const NavBar = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const [modalContent, setModalContent] = useState(null); // 모달 내용 상태

    const handleIconClick = (iconType) => {
        switch (iconType) {
            case "Profile":
                setModalContent(<ProfileContent/>);
                break;
            case "Skills":
                setModalContent(<div>스킬</div>);
                break;
            case "Education":
                setModalContent(<div>에듀</div>);
                break;
            case "Certificate":
                setModalContent(<div>자격</div>);
                break;
            default:
                setModalContent(null);
        }
        openModal(); // 모달 열기
    };

    return (
    <Wrapper>
        <Container>
            <ProfileIcon onClick={() => handleIconClick("Profile")} />
            <SkillsIcon onClick={() => handleIconClick("Skills")} />
            <EducationIcon onClick={() => handleIconClick("Education")} />
            <CertificateIcon onClick={() => handleIconClick("Certificate")} />
        </Container>
        <Modal isOpen={isOpen} closeModal={closeModal}>
        {modalContent}
       
        </Modal>
    </Wrapper>
    );
};

export default NavBar;