import { Container } from "./style";
import linkedin from '../../assets/linkedin.png';
import gmail from '../../assets/gmail.png';
import whatsapp from '../../assets/whatsapp.png';
import github from '../../assets/github.png';


export function Contato(){
    return(
        <Container>

            <a href="https://www.linkedin.com/in/jose-neilson-4380b6206/"><img src={linkedin} alt="" /></a>
            <a href="https://github.com/gdpnei2002"><img src={github} alt="" /></a>
            <a href="mailto:joseneilson25@gmail.com"><img src={gmail} alt="" /></a>
            <p>81992812121</p>
            <img src={whatsapp} alt="" />
           
        </Container>
    );
}