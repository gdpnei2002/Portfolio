import { Container } from "./style";
import perfil from '../../assets/perfil.png';



// function typeWrite(elemento){
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = ' ';
//     textoArray.forEach(function(letra, i){   
      
//     setTimeout(function(){
//         elemento.innerHTML += letra;
//     }, 75 * i)

//   });
// }
// const titulo = document.querySelector('.titulo-principal');
// typeWrite(titulo);


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