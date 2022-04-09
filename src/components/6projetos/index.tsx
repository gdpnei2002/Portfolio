import React from "react";
import { Container } from "./style";
import Rentalx from '../../assets/rentalx.png';
import pokedex from '../../assets/pokedex.png';
import ignews from '../../assets/ignews.png';
import dtmoney from '../../assets/dtmoney.png';


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
                {/* <a href="https://github.com/gdpnei2002/landing-page-ACCAMARGO"><img src={Rentalx} alt="" />
                <p>Landing page A.C.CAMARGO<br />
                freelance solicitado pelo hospital A.C.Camargo feita em React.JS</p></a> */}
                <a target="_blank" href="https://github.com/gdpnei2002/ignews" rel="noreferrer"><img src={ignews} alt="" />
                <p>Ig news<br /><br />
                Newslatter feita em Next.js, estilização SASS e com API´s como STRIPE para pagamentos, FAUNA para banco de dados, PRISMIC para notícias e login com conta do Google e GitHub.</p></a>
                <a target="_blank" href="https://github.com/gdpnei2002/dtmoney" rel="noreferrer"><img src={dtmoney} alt="" />
                <p>DtMoney <br /><br />
                Minha primeira aplicação em React com styled components. Feita para seu controle financeiro.</p></a>
           </div>
           <hr />
        </Container>
    );
}