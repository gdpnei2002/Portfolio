import React from "react";
import { Container } from "./style";
// import img from "../../assets/Ativo18.png";
import Rentalx from "../..";


export function Projetos(){
    return(
        <Container>
             {/* <img src={img} alt="" /> */}
            <a href="https://github.com/gdpnei2002/RENTALX-ROCKETSEAT"><img src={Rentalx} alt="" /></a>
           <p>Rentalx</p>
           <a href="https://github.com/gdpnei2002/pokedex-React"><img src={Rentalx} alt="" /></a>
           <p>Pokedex</p>
            <a href="https://github.com/gdpnei2002/landing-page-ACCAMARGO"><img src={Rentalx} alt="" /></a>
           <p>landing page ACCAMARGO</p>  
           <a href="https://github.com/gdpnei2002/ignews"><img src={Rentalx} alt="" /></a>
           <p>Ig news</p>
           <a href="https://github.com/gdpnei2002/dtmoney"><img src={Rentalx} alt="" /></a>
           <p>DtMoney</p>
        </Container>
    );
}