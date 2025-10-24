import React from "react";

    function CardHabilidade ({ nome, tipo }) {
        return (
            <div className="card-habilidade">
                <h3>{nome}</h3>
                <p>{tipo}</p>
            </div>
        )



    }

    export default CardHabilidade;