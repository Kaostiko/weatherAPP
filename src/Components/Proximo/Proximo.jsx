import React from "react";
import "./Proximo.scss";
import { Col, Row } from "react-bootstrap";

export const Proximo = ({ weather }) => {
  let pronostico = weather.lista.slice(0, 4);

  console.log("PRONOSTICO", pronostico);
  // Conocer el día de consulta del array
  const calcDia = (string) => {
    return string.split(" ")[0];
  };

  const getBackgroundClass = (data) => {
    switch (data.weather[0].main.toLowerCase()) {
      case "clouds":
        return "nubes";
      case "clear":
        return "sol";
      case "rain":
        return "lluvia";
      case "thunderstorm":
        return "rayos";
      case "snow":
        return "snowing";
    }
  };

  let sunny = "/assets/icons/sunny.png";
  let rainy = "/assets/icons/rainy.png";
  let clouds = "/assets/icons/clouds.png";
  let storm = "/assets/icons/storm.png";
  let snow = "/assets/icons/snow.png";

  const getIcon = (data) => {
    switch (data.weather[0].main.toLowerCase()) {
      case "clouds":
        return clouds;
      case "clear":
        return sunny;
      case "rain":
        return rainy;
      case "thunderstorm":
        return storm;
      case "snow":
        return snow;
    }
  };

  return (
    <Row>
      {pronostico.map((data, index) => (
        <Col lg={3} md={6} sm={12} key={index}>
          <section className={`marco ${getBackgroundClass(data)}`}>
            <div className="organizador">
              <div className="marco_individual">
                <h5>{calcDia(data.dt_txt)}</h5>
              </div>
              <div className="marco_individual">
                <img src={`${getIcon(data)}`} alt="icono" />
              </div>
            </div>
            <div className="organizador">
              <div className="marco_individual">
                <h5 className="titulo">Temperatura:</h5>{" "}
                <h5> {Math.round(data.main.temp)} º</h5>
              </div>
              <div className="marco_individual">
                <h5 className="titulo">Sensación:</h5>
                <h5>{Math.round(data.main.feels_like)} º</h5>
              </div>
            </div>
            <div className="organizador">
              <div className="marco_individual">
                <h5 className="titulo">Máxima:</h5>
                <h5>{Math.round(data.main.temp_max)} º</h5>
              </div>
              <div className="marco_individual">
                <h5 className="titulo">Mínima:</h5>
                <h5>{Math.round(data.main.temp_min)} º</h5>
              </div>
            </div>
            <div className="organizador">
              <div className="marco_individual">
                <h5 className="titulo">Humedad:</h5>
                <h5>{Math.round(data.main.humidity)} %</h5>
              </div>
              <div className="marco_individual">
                <h5 className="titulo">Viento:</h5>
                <h5>{data.wind.speed}m/s</h5>
              </div>
            </div>
          </section>
        </Col>
      ))}
    </Row>
  );
};
