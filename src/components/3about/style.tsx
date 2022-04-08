import styled from "styled-components";

export const Container = styled.main`

display: grid;
grid-template-columns: auto auto;
padding: 50px;

p{
    color: #b3bdc1;
    width: 80%;
    margin-left: 10%;
}

h1{ 
    margin-top: 10%;
    margin-left: 10%;
    padding: 0;
}

img{
    margin-top: 10%;
    height:600px;
    border-radius: 10%;
   
}

@media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;
}

`;