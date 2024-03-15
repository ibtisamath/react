import React, { useState } from "react";
import leftArrow from "../assets/images/leftArrow.png";
import rightArrow from "../assets/images/rightArrow.png";

const Slider = ({ slides }) => {
  // utilisation de useState pour stocker l'index courant de la slide
  const [currentIndex, setCurrentIndex] = useState(0);

  // styles pour le conteneur, le slider, les flèches et le compteur de slide
  const containerStyle = {
    width: "100%",
    height: "33.33vh",
    minHeight: "300px",
    maxHeight: "415px",
    margin: "0 auto",
  };

  const sliderStyle = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${slides[currentIndex]})`,
  };

  const leftArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "5%",
    zIndex: 1,
    cursor: "pointer",
  };

  const rightArrowStyle = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "5%",
    zIndex: 1,
    cursor: "pointer",
  };

  const slideIndexStyle = {
    position: "absolute",
    left: "50%",
    transform: "translate(0, -50%)",
    bottom: "5%",

    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "142.6%",
    color: "#FFFFFF",
  };

  /* La fonction "goToPrevious" permet de passer à la diapositive précédente lorsque 
  l'utilisateur clique sur la flèche de gauche. 
  Elle vérifie si l'on est déjà sur la première diapositive, 
  et si c'est le cas, elle revient à la dernière diapositive. 
  Sinon, elle passe à la diapositive précédente. */
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  /* La fonction "goToNext" permet de passer à la diapositive suivante lorsque
   l'utilisateur clique sur la flèche de droite. 
   Elle vérifie si l'on est déjà sur la dernière diapositive, 
   et si c'est le cas, elle revient à la première diapositive. 
   Sinon, elle passe à la diapositive suivante. */
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div style={containerStyle}>
      <div style={sliderStyle}>
        {slides.length === 1 ? (
          ""
        ) : (
          <>
            <img
              style={leftArrowStyle}
              src={leftArrow}
              onClick={goToPrevious}
              alt="flèche de gauche"
            ></img>
            <img
              style={rightArrowStyle}
              src={rightArrow}
              onClick={goToNext}
              alt="flèche de droite"
            ></img>
          </>
        )}
        <div className="slide-index" style={slideIndexStyle}>
          {currentIndex + 1}/{slides.length}
        </div>
        <div style={slideStyles}></div>
      </div>
    </div>
  );
};

export default Slider;
