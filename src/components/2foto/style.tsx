import styled from "styled-components";

export const Container = styled.main`

img{
    width:100%;
    transform: scaleX(-1);
}

.texto {
    position: absolute;
    color:#207ae1;
    background-color: black;
    text-align: left;
    top: 40%;
    margin-left: 20%;   
    height: 80px;
    width: 280px;

    border-right: 2px solid #ffffff;
    max-width: 0;
    white-space: nowrap;
    overflow: hidden;
    animation:  escrever normal 5s steps(55);
}

@keyframes pisca {
    100%{
        border-right-color: transparent;
    }
}

@keyframes escrever {
    100%{
        max-width: 100%;
    }
    
}



`;