import styled from "styled-components";
import Profile from "../../img/profile.png"


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  object-position: top;
  box-shadow: 1px 1px 8px #80808097;
`;
const ProfileImg = ({ width = "150px", height = "150px" }) => {
    return (
      <Container style={{ width, height }}>
        <Image src={Profile} />
      </Container>
    );
  };

export default ProfileImg;
