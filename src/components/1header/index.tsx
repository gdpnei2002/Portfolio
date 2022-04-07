import { Container } from "./style";


export function Header(){
    return(
        <Container>
             <div className="App">
                <header className="App-header">
                    <div className="App">
                    <div className="topnav" id="myTopnav">
                        <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                    </div>
                    </div>
                </header>
             </div>
         </Container>
    );
}