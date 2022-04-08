/* eslint-disable jsx-a11y/anchor-has-content */
import { Container } from "./style";
import img from "../../../assets/perfil.jpg";


export function Projetos(){
    return(
        <Container>
          <img src={img} alt="" /> 
            <a href="https://github.com/gdpnei2002/RENTALX-ROCKETSEAT"></a>
           <p>Rentalx</p>
           <a href="https://github.com/gdpnei2002/pokedex-React"></a>
           <p>Pokedex</p>
            <a href="https://github.com/gdpnei2002/landing-page-ACCAMARGO"></a>
           <p>landing page ACCAMARGO</p>  
           <a href="https://github.com/gdpnei2002/ignews"></a>
           <p>Ig news</p>
           <a href="https://github.com/gdpnei2002/dtmoney">DtMone</a>
           <p>DtMoney</p>
        </Container>
    );
}