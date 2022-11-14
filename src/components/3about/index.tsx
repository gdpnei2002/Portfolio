import { Container } from "./style";
import perfil from '../../assets/perfilrosto.jpeg';


export function About(){
    return(
        <Container>
            <img id="sobre" src={perfil} alt="" />
            <div>
            <h1>Sobre mim</h1>
                <p  className="">
                    Meu nome é José Neilson, graduado no curso de Analise e Desenvolvimento de Sistemas na faculdade,
                    busco oportunidade para aplicar os meus conhecimento e adquirir experiência nas áreas de desenvolvimento de software e web.
                    <br /><br />
                    Atualmente aplico o meu conhecimento em desenvolvimentos na <a href="https://thinkam.net/home" target="_blank" rel="noreferrer"> Think A.M. </a> desenvolvendo aplicações web, com objetivo de facilitar os controles comerciais (serviços/vendas) de um determinado estabelecimento. <br />
                    Desenvolvi front-end de CRM's para alguns sistemas de vendas e criações de landing pages.<br />
                    Nas horas vagas faço serviços de freelance com mesmo objetivo.
                </p>
                <h1 id="skills">Skills:</h1>
                <p  className="titulo">Front-End:</p>
                    <p className="skills">HTML5, CSS3, JS, REACT, REACT NATIVE, NEXT E ANGULAR</p>
                <p  className="titulo">Estilizações:</p>
                    <p className="skills">STYLED COMPONENTS, SASS, CHAKRA UI.</p>
                <p  className="titulo">Back-End:</p>
                    <p className="skills">NODE, DOCKER, API'S, MY SQL, LARAVEL.</p>
                {/* <a target="_blank"  href="https://drive.google.com/file/d/1631ZQ6xdGRponXct4cKfZ_sgO7ps6iEt/view?usp=sharing" rel="noreferrer"><button className="curriculo">Currículo</button></a> */}
            </div>
        </Container>
    );
}