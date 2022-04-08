import { Container } from "./style";
import perfil from '../../assets/perfilrosto.jpeg';


export function About(){
    return(
        <Container>
            <img src={perfil} alt="" />
            <div>
            <h1>Sobre mim</h1>
            <p  className="">
                Me chamo José Neilson sou estudante no ultimo periodo do curso de <strong>Analise e desenvolvimento de sistemas </strong>,
                estou busca de oportunidade para adquirir experiência nas áreas de desenvolvimento de software e web. Tenho experiencia na area
                Rocketseat. <br /><br />
                Atuo como desenvolvedor freelance, desenvolvendo de aplicações web com objetivo de facilitar o controle de serviços/vendas de determinado estabelecimento.
            <br />Desenvolvi: sistema de vendas e criação de landing pages.
           </p>
           </div>
        </Container>
    );
}