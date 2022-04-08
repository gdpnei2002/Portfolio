import { Container } from "./style";
import perfil from '../../assets/perfil.png';

export function Foto(){
    return(
        <Container>
           <img src={perfil} alt="" />
        </Container>
    );
}