import React from "react";
import { Container } from "./style";
import Rentalx from '../../assets/rentalx.png';
import pokedex from '../../assets/pokedex.png';
import ignews from '../../assets/ignews.png';
import dtmoney from '../../assets/dtmoney.png';
import julia from '../../assets/julia.png';
import acclanding from '../../assets/acclanding.png';
import gira from '../../assets/gira.png';
import ssaude from '../../assets/ssaude.jpeg';


export function Projetos(){
    return(
        <Container>
          <hr />
                <h1 id="pro">Projetos: </h1>
                <p className="p1">link para github</p> 
            
            <div>
                <a target="_blank" href="https://github.com/gdpnei2002/RENTALX-ROCKETSEAT" rel="noreferrer"><img src={Rentalx} alt="" />
                <p>Rentalx <br /><br />
                Minha primeira aplicação em Node.js, consiste em um CRUD de carros.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/pokedex-React" rel="noreferrer"><img src={pokedex} alt="" />
                <p>Pokedex<br /><br />
                Desafio proposto por Vinicius Pasquatonio do canal pasquadev. Consiste em uma integração da PokeApi.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/ignews" rel="noreferrer"><img src={ignews} alt="" />
                <p>Ig news<br /><br />
                Newslatter feita em Next.js, estilização SASS e com API´s como STRIPE para pagamentos, FAUNA para banco de dados, PRISMIC para notícias e login com conta do Google e GitHub.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/dtmoney" rel="noreferrer"><img src={dtmoney} alt="" />
                <p>DtMoney <br /><br />
                Minha primeira aplicação em React com styled components. Feita para seu controle financeiro.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/dtmoney" rel="noreferrer"><img src={ssaude} alt="" />
                <p>System Saúde<br /><br />
                Minha primeira aplicação em React com styled components. Feita para seu controle financeiro.</p></a>
                <a target="_blank" href="https://gira.com.br/#/" rel="noreferrer"><img src={gira} alt="" />
                <p>Gira <br /><br />
                Primeiro freelancer, solicitado pelo projeto Gira do banco Satander, fiz em parceria com um amigo,</p></a>
                <a target="_blank" href="https://academiadorosto.com" rel="noreferrer"><img src={julia} alt="" />
                <p>Academia do rosto <br /><br />
                Freelancer para um workshop de desenvolvimento pessoal, hoje em dia a página está em manutenção mas ainda é possível acessa-la.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/dtmoney" rel="noreferrer"><img src={acclanding} alt="" />
                <p>ACCamargo <br /><br />
                Freelance solicitado pelo hospital A.C.Camargo feita em React.JS, mas infelizmente não foi aprovado.</p></a>
           </div>
           <hr />
        </Container>
    );
}