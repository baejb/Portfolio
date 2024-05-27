import ProfileImg from'../../../img/user.png';
import IconUI from "../IconUI";

const ProfileIcon = ({ onClick }) => {
    return (
        <IconUI image={ProfileImg} title={'내정보'} onClick={onClick} />
    );
};

export default ProfileIcon;
