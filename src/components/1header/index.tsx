import { Container } from "./style";


export function Header(){
    return(
        <Container>
             <div className="App">
                <header className="App-header">
                    <div className="App">
                    <div className="topnav" id="myTopnav">
                        <a href="#.">Inicio</a>
                        <a href="#sobre">Sobre</a>
                        <a href="#xp">Experiência</a>
                        <a href="#es">Estudos</a>
                        <a href="#pro">Projetos</a>
                        <a href="#con">Contatos</a>
                    </div>
                    </div>
                </header>
             </div>
         </Container>
    );
}