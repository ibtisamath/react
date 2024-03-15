import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import data from "../database/data";
import Footer from "../components/Footer";
import Tag from "../components/Tag";
import StarRating from "../components/StarRating";
import Collapse from "../components/Collapse";
import Slider from "../components/Slider";

const Logement = () => {
  //On récupère l'id de l'objet "logement" à afficher dans l'url
  const { id } = useParams();
  //On utilise l'id pour chercher l'objet "logement" correspondant dans notre base de données
  const card = data.find((item) => item.id === id);
  //On récupère la fonction "navigate" de react-router pour rediriger l'utilisateur sur la page 404 en cas d'erreur
  const navigate = useNavigate();

  //On vérifie que "card" existe, sinon, on redirige l'utilisateur sur la page 404
  useEffect(() => {
    if (!card) {
      navigate('/404')
    }
  }, [card, navigate, id]);

  // Si "card" existe, on affiche les données
  if (card) {
    //On prépare les données pour le composant "Collapse"
    const dropdownData = [
      {
        id: "1",
        title: "Description",
        content: card.description,
      },
      {
        id: "2",
        title: "Équipments",
        content: card.equipments.join(", "),
      },
    ];
    
    return (
      <>
        <div className="logement-display">
          <Slider slides={card.pictures} />

          <div className="info-habitat">
            <div className="info-top">
              <h2 className="host-title">{card.title}</h2>
              <h3 className="info-loc">{card.location}</h3>
              <div className="tag-container">
                {/* On utilise ce composant pour afficher les tags */}
                {card.tags.map((item) => (
                  <Tag dataTag={item} key={item} />
                ))}
              </div>
            </div>

            <div className="host-info">
              <div className="host">
                <p className="host-name">{card.host.name}</p>
                <img
                  className="host-pic"
                  src={card.host.picture}
                  alt="Le propriétaire"
                />
              </div>
              <div className="rating-stars">
                {/* On utilise ce composant pour afficher les étoiles de notation */}
                <StarRating stars={card.rating} />
              </div>
            </div>
          </div>

          <div className="dropdown-container">
            {/* On utilise ce composant pour afficher la description et les équipements */}
            {dropdownData.map((item) => (
              <Collapse data={item} size={"collapse-medium"} key={item.id} />
            ))}
          </div>
        </div>
        {/* On utilise ce composant pour afficher le footer */}
        <Footer />
      </>
    );
  }
};

export default Logement;
