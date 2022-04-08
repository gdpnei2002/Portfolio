import { Container } from "./style";


export function Header(){
    return(
        <Container>
             <div className="App">
                <header className="App-header">
                    <div className="App">
                    <div className="topnav" id="myTopnav">
                        <a href="#home">Home</a>
                        <a href="#news">Sobre</a>
                        <a href="#contact">Experiência</a>
                        <a href="#about">Estudos</a>
                        <a href="a">Projetos</a>
                        <a href="10">Contatos</a>
                        <button> claro e escuro</button>
                    </div>
                    </div>
                </header>
             </div>
         </Container>
    );
}