import { Container } from "./style";
import perfil from '../../assets/perfil.png';

export function Foto(){
    return(
        <Container>
           <img src={perfil} alt="" />
          
           <div className="imagem">
                <div className="texto">
                    <p> 
                    &lt;José Neilson <br />
                        Desenvolvedor Full Stack /&gt; 
                    </p>
                    
                </div>
            </div>
        </Container>
    );
}