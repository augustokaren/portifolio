import React from "react";
import  KarenAugusto from '../img/KarenAugusto.png';
import CardHabilidade from "./CardHabilidade";
import CardProjeto from "./CardProjeto";
import './SobreMim.css';
function SobreMim () {




    const habilidades = [
    { nome: 'JavaScript', tipo: 'Linguagem de Programação' },
    { nome: 'React', tipo: 'Biblioteca JavaScript' },
    { nome: 'CSS', tipo: 'Estilização' },
    { nome: 'HTML', tipo: 'Linguagem de Marcação' },
    {nome: 'SQL', tipo: 'Banco de Dados'},
    {nome: 'Comunicação', tipo: 'Habilidade Interpessoal'},
    {nome: 'Trabalho em Equipe', tipo: 'Habilidade Interpessoal'},
    {nome: 'Resolução de Problemas', tipo: 'Habilidade Cognitiva'}
  ];
  
    const projetos = [
    {nome: 'Cronômetro', descricao: 'Criei cronômetro simples para aplicar os meus conhecimentos de HTML, CSS e JavasCript e para aprimorar a minha lógica de programação.',
    link: 'https://augustokaren.github.io/cronometro/'
    },

    {nome: 'Lista de Tarefas', descricao: 'Esta aplicação  permite realizar a criação de tarefas e de visualizalas, desenvolvi essa aplicação usando HTML, CSS e JavaScript puro.',
    link: 'https://augustokaren.github.io/ListadeTarefas/'
    },

    {nome:'Calculadora', descricao: 'Desenvolvi uma calculadora funcional utilizando HTML, CSS e JavaScript, com o objetivo de aprimorar minhas habilidades em manipulação do DOM e lógica de programação.',
        link:'https://augustokaren.github.io/Calculadora/'
    }


  ]
  
  
  

       return (
    <div>
      <h1> Sobre Mim </h1>
      <img src={KarenAugusto}
       alt="Foto de Karen Augusto" 
       style={{ width: '200px', borderRadius: '100px' }} 
       />
        <p>Olá! Meu nome é Karen, <br/> sou tecnóloga e desenvolvedora front-end. Sou apaixonada por tecnologia e adoro transformar 
            ideias em soluções criativas que fazem a diferença.</p>
        <h2>Habilidades</h2>
        <div className="habilidades">
            {habilidades.map((habilidade, index) => (
                <CardHabilidade
                key={index}
                nome={habilidade.nome}
                tipo={habilidade.tipo}
                />
            ))}
        </div>


        <h2>Projetos</h2>
        <div className="projetos">
            {projetos.map((projeto, index) => (
                <CardProjeto
                key={index}
                nome={projeto.nome}
                descricao={projeto.descricao}
                link={projeto.link}
                />
            ))}
        </div>
           




    </div>
  );
}
  
  
 


export default SobreMim;
