import React, { useState, useEffect } from "react";
import Collapse from "../components/Collapse";
import aboutData from "../database/about_data";

const About = () => {
  // utilisation d'un useState pour stocker la data provenant du fichier about_data.js
  const [dataCollapse, setDataCollapse] = useState([]);

  //stockage de la data dans la variable à chaque affichage de la page
  useEffect(() => {
    setDataCollapse(aboutData)
  }, [])

  return (
    <div className="display-container">
      <div className="banner about-banner">
      </div>
      {dataCollapse.map(item => (
        <Collapse data={item} size={"collapse-large"} key={item.id}/>
      ))}
    </div>
  );
};

export default About;
