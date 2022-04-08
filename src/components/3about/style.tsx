import styled from "styled-components";

export const Container = styled.main`

display: grid;
grid-template-columns: auto auto;

p{
    color: #b3bdc1;
    width: 50%;
}


@media (max-width: 800px) {
    display: grid;
    grid-template-columns: auto;
}

`;