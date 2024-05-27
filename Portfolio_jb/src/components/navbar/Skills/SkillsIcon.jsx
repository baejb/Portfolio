import IconUI from "../IconUI";
import SkillsImg from "../../../img/skills.png"
const SkillsIcon = ({onClick}) => {
    return (
     <IconUI image={SkillsImg} title={'기술스택'} onClick={onClick}/>
    )
};

export default SkillsIcon;