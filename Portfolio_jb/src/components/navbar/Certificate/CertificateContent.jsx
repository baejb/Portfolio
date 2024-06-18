import { useState } from "react";
import styled from "styled-components";
import image from "../../../img/certificatejb.png";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  min-width: 400px;
  padding: 10% 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease; // 이미지 크기 변화에 대한 부드러운 전환 효과 추가
  cursor: pointer;
  transform: ${(props) => (props.isZoomed ? "scale(1.8)" : "scale(1)")}; // 확대 상태에 따른 크기 변화
`;

const Title = styled.div`
  font-size: 0.8rem;
`;

const CertificateContent = () => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <Container>
      <Image src={image} isZoomed={isZoomed} onClick={toggleZoom} />
      <Title>24.06.18 정보처리기사 취득</Title>
    </Container>
  );
};

export default CertificateContent;
