import { Container } from "./style";
import perfil from "../../assets/perfilrosto.jpeg";

export function About() {
  return (
    <Container>
      <img id="sobre" src={perfil} alt="" />
      <div>
        <h1>Sobre mim</h1>
        <p className="">
          Meu nome é José Neilson, graduado no curso Análise e Desenvolvimento
          de Sistemas na faculdade, estou sempre em busca de oportunidades para
          aplicar os meus conhecimentos e adquirir experiência no desenvolvimento
          de aplicações web.
          <br />
          <br />
          Atuo como Desenvolvedor Autônomo em tempo integral,
          desenvolvendo aplicações web e mobile, com objetivo de facilitar o controle
          comercial de vendas de serviços e/ou vendas de pequenas e médias empresas.
          <br />
          <br />
          Trabalhei com desenvolvimento na{" "}
          <a href="https://thinkam.net/home" target="_blank" rel="noreferrer">
            {" "}
            Think A.M.{" "}
          </a>{" "}
          desenvolvendo aplicações web, com objetivo de facilitar o controle
          de gerenciamento (serviços/vendas) de um determinado estabelecimento. 
          <br />
          <br />
          Desenvolvi front-end de CRM's para alguns sistemas de vendas e
          criações de landing pages.
          <br />
          <br />
        </p>
        <h1 id="skills">Skills:</h1>
        <p className="titulo">Front-End:</p>
        <p className="skills">
          HTML5, CSS3, JS, REACT, REACT NATIVE, NEXT E ANGULAR
        </p>
        <p className="titulo">Estilizações:</p>
        <p className="skills">STYLED COMPONENTS, SASS, CHAKRA UI.</p>
        <p className="titulo">Back-End:</p>
        <p className="skills">NODE, DOCKER, API'S, MY SQL, LARAVEL.</p>
        <a target="_blank"  href="https://1drv.ms/w/c/9cff2ce0038543c2/EcJDhQPgLP8ggJzVRQAAAAABH4ZbUf6cJrh9HVFiECJMIQ?e=FQZ7tH" rel="noreferrer"><button className="curriculo">Currículo</button></a>
      </div>
    </Container>
  );
}
