import React from 'react';
// IMPORTAÇÃO ESSENCIAL DO ROUTER
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importe seus componentes
import Home from './components/Home'; // Sua Home Page (agora em components)
import CardHabilidade from './components/CardHabilidade'; // Seu componente de Habilidade

// Importe os demais componentes que você precisa para rotas aqui
// Exemplo: import DetalheProjeto from './components/DetalheProjeto'; 


function App() {
  return (
    // Usa HashRouter para lidar com URLs no GitHub Pages
    <Router>
      <Routes>
        
        {/* Rota 1: Home Page (URL: /portifolio/#/) */}
        <Route path="/" element={<Home />} />
        
        {/* Rota 2: Página de Habilidades (URL: /portifolio/#/habilidades) */}
        <Route path="/habilidades" element={<CardHabilidade />} />
        
        {/* Adicione aqui TODAS as rotas que seus usuários precisam acessar */}
        {/* Exemplo de Rota de Projeto: */}
        {/* <Route path="/projeto/:id" element={<DetalheProjeto />} /> */}

        {/* Rota de fallback (Página Não Encontrada) */}
        <Route path="*" element={<h1>404 | Página Não Encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;