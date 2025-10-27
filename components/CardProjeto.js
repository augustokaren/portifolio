function CardProjeto({ nome, descricao, link }) {
  return (
    <div className="card-projeto">
      <h3>
        <a href={link} target="_blank" rel="noopener noreferrer">
          {nome}
        </a>
      </h3>
      <p>{descricao}</p>
    </div>
  );
}

export default CardProjeto;
