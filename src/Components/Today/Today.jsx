import React from "react";
import "./Today.scss";
import { Col, Container, Row } from "react-bootstrap";
import moment from "moment-timezone";
// import "moment/locale/es";

export const Today = ({ weather }) => {
  let diaActual = weather.lista[0];

  console.log("dia Actual", diaActual);
  console.log("#############################", weather);

  const getBackgroundClass = () => {
    switch (diaActual.weather[0].main.toLowerCase()) {
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

  const getIcon = () => {
    switch (diaActual.weather[0].main.toLowerCase()) {
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
    <Row className={`imgWeather  ${getBackgroundClass()}`}>
      <div className="marcos">
        <h2>{weather.name}</h2>
      </div>
      <div className="marcos">
        <h2>{moment.unix(diaActual.dt).tz("Europe/Madrid").format("LL")}</h2>
      </div>
      <div className="marcos">
        <img src={`${getIcon()}`} alt="" />
      </div>
      <div className="marcos">
        <h3>Temperatura:</h3> <h3> {diaActual.main.temp}º</h3>
      </div>

      <div className="marcos">
        <h3>Sensación termica:</h3>
        <h3>{diaActual.main.feels_like}º</h3>
      </div>
      <div className="marcos">
        <h3>Humedad:</h3>
        <h3>{diaActual.main.feels_like}%</h3>
      </div>
      <div className="marcos">
        <h3>Máxima:</h3>
        <h3>{diaActual.main.temp_max}º</h3>
      </div>
      <div className="marcos">
        <h3>Mínima:</h3>
        <h3>{diaActual.main.temp_min}º</h3>
      </div>
      <div className="marcos">
        <h3>Velocidad del viento:</h3>
        <h3>{diaActual.wind.speed}m/s</h3>
      </div>
    </Row>
  );
};
