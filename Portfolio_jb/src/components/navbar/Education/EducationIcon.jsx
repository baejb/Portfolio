import IconUI from "../IconUI";
import EducationImg from "../../../img/education.png"
const EducationIcon = ({onClick}) => {
    return (
        <IconUI image={EducationImg} title={'학력/활동'} onClick={onClick}/>
    );
};

export default EducationIcon;