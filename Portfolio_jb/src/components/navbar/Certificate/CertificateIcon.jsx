import IconUI from "../IconUI";
import CertificateImg from '../../../img/certificate.png'
const CertificateIcon = ({ onClick }) => {
    return (
        <IconUI image={CertificateImg} title={'자격증'} onClick={onClick}/>
    );
};

export default CertificateIcon;