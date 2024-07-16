import React, { useState } from "react";
import Rentalx from "../../assets/projects/rentalx.png";
import pokedex from "../../assets/projects/pokedex.png";
import ignews from "../../assets/projects/ignews.png";
import dtmoney from "../../assets/projects/dtmoney.png";
import julia from "../../assets/projects/julia.png";
import acclanding from "../../assets/projects/acclanding.png";
import gira from "../../assets/projects/gira.png";
import ssaude from "../../assets/projects/ssaude.jpeg";
import dashgo from "../../assets/projects/dashgo.png";
import emkt from "../../assets/projects/emkt.png";
import mycardinho from "../../assets/projects/mycardinho.png";
import embreve from "../../assets/projects/embreve.png";
import disc from "../../assets/projects/testdisc.png";
import vocepolicia from "../../assets/projects/vocenapolicia.png";
import devpp from "../../assets/projects/devpp.png";
import cerbrum from "../../assets/projects/cerbrum.png";
import firstWeekThinker from "../../assets/projects/firstWeekThinker.png";
import spm from "../../assets/projects/spm.png";
import steps from "../../assets/projects/steps.png";
import jadlog from "../../assets/projects/jadlog.png";
import naven from "../../assets/projects/naven.jpeg";
import tokAlho from "../../assets/projects/tokAlho.jpeg";
import upDelivery from "../../assets/projects/upDelivery.jpeg";

import { CustomSelect, Projetcs } from "./style";
import Card from "./cards";

export function Projetos() {
  const cards = [
    {
      image: Rentalx,
      title: "Rentalx",
      text: "Minha primeira aplicação em Node.js, consiste em um CRUD de carros com ambiente Docker.",
      link: "https://github.com/gdpnei2002/RENTALX-ROCKETSEAT",
      tags: ["Estudo", "API", "Node.JS"],
    },
    {
      image: pokedex,
      title: "Pokedex",
      text: "Desafio proposto por Vinicius Pasquatonio do canal Pasquadev. Consiste em uma integração da PokeApi e as estilizações foram por conta própria.",
      link: "https://pokedexreact-dun.vercel.app/",
      tags: ["Estudo", "API", "React"],
    },
    {
      image: ignews,
      title: "Ig News",
      text: "Newslatter feita em Next.js, estilização SASS e com API´s como STRIPE para pagamentos, FAUNA para banco de dados, PRISMIC para notícias e login com conta do GitHub.",
      link: "https://github.com/gdpnei2002/ignews",
      tags: ["Estudo", "React"],
    },
    {
      image: dtmoney,
      title: "DtMoney",
      text: "Minha primeira aplicação em React com styled components. Feita para seu controle financeiro.",
      link: "https://dtmoney-five-zeta.vercel.app/",
      tags: ["Estudo", "React"],
    },
    {
      image: dashgo,
      title: "Dashgo",
      text: "Mais um projeto das aulas da Rocketseat. O dasgo é um sistema de cadastro de usuários, com páginas de autenticação com Next-aut, dashboard e cadastro de usuários. Sistema desenvolvido em Next.JS e estilizado com Chakra UI.",
      link: "https://github.com/gdpnei2002/dashgo",
      tags: ["Estudo", "Sistema", "React"],
    },
    {
      image: mycardinho,
      title: "My Cardinho",
      text: "My cardinho é um trabalho da faculdade, com o objetivo de encerrar nossas atividades. Atualmente é apenas um CRUD. Front-end feito em Next.js, consumindo uma API Node.js.",
      link: "https://github.com/gdpnei2002/crud-next-node",
      tags: ["Estudo", "React", "Node"],
    },
    {
      image: gira,
      title: "Gira",
      text: "Primeiro freelance, solicitado pelo projeto Gira do banco Santander, para promove-lo e detalha-lo. Feito em HTML e CSS com display GRID. Fiz em parceria com um amigo utilizando GIT para versionamento de código.",
      link: "https://gira.com.br/",
      tags: ["Trabalho", "Landing Page", "Angular"],
    },
/*     {
      image: julia,
      title: "Academia do rosto",
      text: "Freelance para um workshop de estética natural, infelizmente o evento acabou, sendo assim não é mais possível acessa-lo.",
      link: "",
      tags: ["Trabalho", "Landing Page", "React"],
    }, */
    {
      image: emkt,
      title: "E-mail Marketing",
      text: "Primeiro freelance solicitado pelo hospital A.C.Camargo consiste na realização de e-mails marketing para que os clientes do hospital sejam informados das últimas notícias, como por exemplo: cursos realizados pelo hospital, avisos e requerimentos.",
      link: "",
      tags: ["Trabalho", "HTML, CSS"],
    },
    {
      image: acclanding,
      title: "A.C.Camargo",
      text: "Freelance de landing page solicitado pelo hospital A.C.Camargo feita em React.JS com intenção de promover detalhes sobre o tratamento de câncer.",
      link: "https://www.especializadoemvida.org.br/",
      tags: ["Trabalho", "Landing Page", "Angular"],
    },
    {
      image: vocepolicia,
      title: "Você na polícia",
      text: "Trata-se de uma landing page com o propósito de promover um curso direcionado a concursos públicos para a Polícia Militar, disponível na plataforma Hotmart. Este projeto foi desenvolvido utilizando React.",
      link: "https://www.vocenapolicia.com.br/",
      tags: ["Trabalho", "Landing Page", "React"],
    },
    {
      image: firstWeekThinker,
      title: "Primeira semana do Thinker",
      text: "Landing page como desafio feito na semana do thinker, um evento produzido pela Think A.M. com objetivo de estimular o aprendizado de programação para iniciantes e vender a mentoria DEV 360º.",
      link: "https://primeirasemanadothinker.web.app/",
      tags: ["Trabalho", "Landing Page", "Angular"],
    },
    {
      image: devpp,
      title: "DEV PP",
      text: "Durante meu desenvolvimento acabei entrando para uma comunidade de programadores, onde fui desafiado a construir uma landing page em Angula.JS usando como base um template no figma.",
      link: "https://devpp-reload.web.app/",
      tags: ["Trabalho", "Landing Page", "Angular"],
    },
    {
      image: disc,
      title: "Teste de perfil DISC",
      text: "O link conduzirá à página da Psicodanii, na qual o teste estará incorporado, permitindo a consulta direta dos resultados com o à própria psicóloga. O formulário foi desenvolvido em React.js, utilizando duas bibliotecas.",
      link: "https://psicodaniiconsultoriaonline.com/",
      tags: ["Trabalho", "React"],
    },
    {
      image: spm,
      title: "SPM",
      text: "É um projeto desenvolvido com objetivo de melhorar o gerenciamento da Secretaria de Políticas Públicas para Mulheres. Conta com uma equipe completa como designers, product owner e programadores do front e back end.",
      link: "https://www.facebook.com/PrefeituradeCaruaru/photos/a.549930408368020/5895878380439836/?type=3&locale=pt_BR",
      tags: ["Trabalho", "Sistema", "React", "Node.JS"],
    },
    {
      image: jadlog,
      title: "Jadlog",
      text: "Projeto desenvolvido com a equipe da DarwinSoft. Onde atuei como desenvolvedor front end no projeto. Tem como objetivo calcular o frete de uma encomenda e gerar o comprovante de destino.",
      link: "https://www.jadlog.com.br/jadlog/home",
      tags: ["Trabalho", "Sistema", "React"],
    },
    {
      image: upDelivery,
      title: "UpDelivery",
      text: "Sistema criado para a transportadora de mesmo nome, onde teve a ideia de gerenciamento de cada pedido, motorista e cliente.",
      link: "https://www.instagram.com/updelivery_/",
      tags: ["Trabalho", "Sistema", "Angular", ".Net"],
    },
    {
      image: cerbrum,
      title: "Cerbrum",
      text: "Na maior empresa no seguimento de educação na região da minha cidade tem apenas um projeto de mesmo nome, ele consiste em gerenciar toda uma instituição de ensino, seja escola ou faculdade. No Cerbrum trabalhei em um sistema usando principalmente o .Net e JavaScript.",
      link: "http://cerbrum.com/",
      tags: ["Trabalho", "Sistema", ".Net"],
    },
    {
      image: steps,
      title: "Steps",
      text: "Projeto desenvolvido com a equipe Squad Pilots da Think AM. Onde atuei como full stack no projeto do início ao fim.  Tem como objetivo melhorar tratamentos na área da fisioterapia.",
      link: "http://www.stepslab.com.br/",
      tags: ["Trabalho", "Sistema", "Angular", ".Net"],
    },
    {
      image: tokAlho,
      title: "Tok Alho",
      text: "Desde a gestão da fabrica ao ERP da loja, esse sistema une dois sistemas em um só, assim promovendo agilidade no processo de fabricação e venda de produtos",
      link: "http://www.stepslab.com.br/",
      tags: ["Trabalho", "Sistema", "React", "Node"],
    },
    {
      image: naven,
      title: "Naven",
      text: "CRM para imoboliária onde o gestor tem como objetivo controlar clientes e imóveis de maneira dinamica, gerando contratos automaticamente.",
      link: "",
      tags: ["Trabalho", "Sistema", "React", "Node"],
    },
    {
      image: ssaude,
      title: "System Saúde",
      text: "Ajudei a desenvolver apenas o front-end do CRM (sistema de vendas) de uma empresa de assistência médica referência em minha cidade (Caruaru-PE). Neste projeto aprendi muito sobre JavaScript, Bootstrap, API, MVC, GIT, Laravel, Factory, Testes, Trello e SCRUM.",
      link: "https://systemsaude.com.br/",
      tags: ["Trabalho", "Sistema", "Laravel"],
    },
    {
      image: embreve,
      title: "Em breve",
      text: "Sempre trabalhando em novos projetos ... Aprendendo atualmente: Next, Node e Angular",
      link: "",
      tags: ["Em Breve"],
    },
  ];

  const [busca, setBusca] = useState("");
  const filteredCards =
    busca === "" ? cards : cards.filter((card) => card.tags.includes(busca));

  return (
    <div>
      <hr />
      <h1 id="pro">Projetos: </h1>

      <CustomSelect onChange={(ev) => setBusca(ev.target.value)}>
        <option value="">Todos</option>
        <option value="React">React</option>
        <option value="Node">Node</option>
        <option value="Angular">Angular</option>
        <option value="Estudo">Estudo</option>
        <option value="Trabalho">Trabalho</option>
        <option value="Landing Page">Landing Page</option>
        <option value="Sistema">Sistema</option>
      </CustomSelect>
      <Projetcs>
        {filteredCards.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            text={card.text ?? ""}
            tags={card.tags}
            link={card.link ?? ""}
          />
        ))}
      </Projetcs>
    </div>
  );
}

export default Projetos;
