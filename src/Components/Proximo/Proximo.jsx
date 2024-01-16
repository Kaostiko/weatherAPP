import React from "react";
import "./Proximo.scss";
import { Col, Row } from "react-bootstrap";

import moment from "moment-timezone";

export const Proximo = ({ weather }) => {
  let pronostico = weather.lista.slice(1, weather.lista.length);
  // console.log("pronostico", pronostico);

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

  const getIcon = (data) => {
    switch (data.weather[0].main.toLowerCase()) {
      case "clouds":
        return clouds;
      case "clear":
        return sunny;
      case "rain":
        return rainy;
      case "thunderstorm":
        return "thunderstorm";
      case "snow":
        return "snow";
    }
  };
  return (
    <Row>
      {pronostico.map((data, index) => (
        <Col lg={3} md={6} sm={12} key={index}>
          <section className={`marco ${getBackgroundClass(data)}`}>
            <div className="marco_individual">
              <h5>{moment.unix(data.dt).tz("Europe/Madrid").format("LL")}</h5>
            </div>
            <div className="marco_individual">
              <img src={`${getIcon(data)}`} alt="" />
            </div>
            <div className="marco_individual">
              <h5>Temperatura:</h5> <h5> {data.main.temp}º</h5>
            </div>
            <div className="marco_individual">
              <h5>Sensación termica:</h5>
              <h5>{data.main.feels_like}º</h5>
            </div>
            <div className="marco_individual">
              <h5>Humedad:</h5>
              <h5>{data.main.feels_like}%</h5>
            </div>
            <div className="marco_individual">
              <h5>Máxima:</h5>
              <h5>{data.main.temp_max}º</h5>
            </div>
            <div className="marco_individual">
              <h5>Mínima:</h5>
              <h5>{data.main.temp_min}º</h5>
            </div>
            <div className="marco_individual">
              <h5>Velocidad del viento:</h5>
              <h5>{data.wind.speed}m/s</h5>
            </div>
          </section>
        </Col>
      ))}
    </Row>
  );
};
