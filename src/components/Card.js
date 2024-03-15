import { Link } from "react-router-dom";
import React from "react";

// Définition d'un composant Card qui prend un paramètre "dataCard"
const Card = ({ dataCard }) => {
  
  // Définition d'une variable "item" qui est égale au paramètre "dataCard"
  const item = dataCard;

  return (
    
      // Utilisation de la fonction Link de react-router-dom pour créer un lien cliquable vers une URL spécifique
      // en utilisant la propriété "id" de l'objet "item" pour construire l'URL.
      <Link to={`/logement/${item.id}`}>
        
        
        <div className="card" key={item.id}>
          <img className="card-img" src={item.cover} alt={item.title} />
          <h3 className="card-title">{item.title}</h3>
        </div>
      </Link>
    
  );
};

export default Card;
