import React from "react";
import styled from "styled-components";
import Service from "./Service";
import facialTratmentImg from "../assets/facialTreatmentImg.jpg";
import bodyTreatmentImg from "../assets/bodyTreatmentImg.jpg";
import eyelashImg from "../assets/eyelashImg.jpg";
import eyebrowsImg from "../assets/eyebrowsImg.jpg";
import massageImg from "../assets/massageImg.jpg";
import waxImg from "../assets/waxImg.jpg";

const ServicesCont = styled.div`
  background: white;
  background-size: 300%;
  min-height: 80vh;
  margin: 0;

  .main-grid {
    display: grid;
    margin: 0px 10px;
    height: 70%;
    //grid-auto-rows: 22rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
    grid-auto-flow: dense; //This compacts and reorders to fill grid empty spaces (careful with accesibility)
    grid-gap: 0.9rem;
  }
  .services-title {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Services = () => {
  return (
    <ServicesCont id="services">
      <div className="services-title">
        <h1>Servicios</h1>
      </div>

      <div className="main-grid">
        <Service
          pic={facialTratmentImg}
          title="Tratamientos Faciales"
          description="Nuestros tratamientos faciales no son invasivos e incluyen la exfoliación y extracción de impurezas y comedones. El tratamiento te brinda una máxima hidratación y tonificación.
        Los productos que utilizamos son de alta calidad y vanguardia dermatológica."
        />
        <Service
          pic={bodyTreatmentImg}
          title="Tratamientos Corporales"
          description="Nuestros tratamientos corporales no son invasivos y son recomendados para aquellas personas que no desean someterse a procedimientos quirúrgicos.
        Utilizamos aparatología de vanguardia y nuestros procedimientos son seguros y confiables."
        />
        <Service
          pic={eyelashImg}
          title="Extensiones de Pestañas"
          description="Extensiones de pestañas pegadas una a una a tus pestañas naturales dando un efecto de máscara de pestañas muy discreto."
        />
        <Service
          pic={massageImg}
          title="Masaje Relajante"
          description="Son masajes de cuerpo completo. Con aceites de bambú y bergamota que no te dejan la sensación de residuo. Acompañados de aromaterapia y música relajante."
        />
        <Service
          pic={eyebrowsImg}
          title="Cejas HD"
          description="Incluye diseño, planchado, depilación y tinte para que luzcas unas cejas arregladas todo el tiempo"
        />
        <Service
          pic={waxImg}
          title="Depilación IPL"
          description="Es un tratamiento indoloro que funciona con cualquier tipo de piel, ya que se adecúa la intensidad de la luz de acuerdo con la zona a tratar.
          Es un método efectivo, práctico y seguro."
        />
      </div>
    </ServicesCont>
  );
};

export default Services;
