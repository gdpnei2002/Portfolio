import { Container } from "./style";


export function Xp(){
    return(
        <Container>
        <hr />
            <h1 id="xp">Experiências:</h1>
           <p  className="titulo">
                Desenvolvedor Full-Stack
            </p>
            <p  className="tempo">
                Dez.2021 - Atualmente
           </p>
           <p  className="tipo">
                Freelancer
            </p>
            <p  className="detalhes">
            Faço de forma independente landing pages em HTML | CSS | JS | REACT | ANGULAR com objetivo de aumentar a visibilidade de seus produtos ou serviços. <br /><br />
            Experiência em criação de CRM's para empresas no ramo de saúde e imobiliário. <br /><br />
            </p>
           <p  className="titulo">
                Desenvolvedor Full-Stack
            </p>
            <p  className="tempo">
                Set.2022 - Atualmente
           </p>
           <p  className="tipo">
                Thinker
            </p>
            <p  className="detalhes">
            Hoje participo da equipe de desenvolvimento da empresa <a href="https://thinkam.net/home" target="_blank" rel="noreferrer"> Think A.M. </a> tenho como foco desenvolver landing pages e sistemas de CRM's.
            </p>
        <hr />
        </Container>
    );
}