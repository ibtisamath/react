import React from "react";
import grayStar from "../assets/images/gray_star.png"; 
import redStar from "../assets/images/red_star.png";

const StarRating = (props) => {
  /* props.stars est le nombre de étoiles affichées en rouge sur la composante,
  le reste sera affiché en gris */
  const { stars } = props; 
  const starList = [];
  /* Boucle pour créer les étoiles, 5 étoiles au total */
  for (let i = 0; i < 5; i++) {
    /* Si i est inférieur au nombre d'étoiles affichées en rouge,
    alors on affiche une étoile rouge */
    if (i < stars) {
      starList.push(<img src={redStar} key={i} alt="Star" className="stars" />);
    } else {
      /* Sinon, on affiche une étoile grise */
      starList.push(<img src={grayStar} key={i} alt="Star" className="stars" />);
    }
  }
  /* On retourne toutes les étoiles dans une div */
  return <div>{starList}</div>;
};

export default StarRating;
