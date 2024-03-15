import React, { useState } from "react";
import arrowUp from "../assets/images/arrow_up.png";
import arrowDown from "../assets/images/arrow_down.png";

// Définition d'un composant Collapse qui prend un paramètre "props"
function Collapse (props) {

  // Décomposition des propriétés "data" et "size" du paramètre "props"
  const {data,size} = props;
  
  // Utilisation de "useState" de React pour gérer l'état "isOpen" du composant
  const [isOpen, setIsOpen] = useState(false);

  // Définition d'une fonction "toggleCollapse" pour inverser la valeur de "isOpen"
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // retourne un élément div qui contient un div pour l'en-tête de la section "collapse" et un élément "div" pour le contenu de la section "collapse"
  return (
    <div className={size}>
      <div className="collapse-bar" onClick={toggleCollapse}>
        <h2>{data.title}</h2>
        <img
          // Utilisation de la propriété "isOpen" pour afficher une image différente pour l'état ouvert ou fermé
          src={isOpen ? arrowUp : arrowDown}
          className="collapse-arrow"
          alt={isOpen ? "flèche pointant le haut" : "flèche pointant le bas"}
        />
      </div>
      {isOpen ? (
        <div className="collapse-container">
          <p className="collapse-text">
            {data.content}
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}


export default Collapse;
