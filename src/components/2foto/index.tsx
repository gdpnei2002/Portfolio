import { Container } from "./style";
import perfil from '../../assets/perfil.png';

export function Foto(){
    return(
        <Container>
           <img id="inicio" src={perfil} alt="" />
          
           <div className="imagem">
                <div className="texto">
                    <p> 
                    ⠀&lt;José Neilson 

                    </p>
                    
                </div>
            </div>
        </Container>
    );
}