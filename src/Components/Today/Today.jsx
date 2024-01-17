import React from "react";
import "./Today.scss";
import { Col, Row } from "react-bootstrap";
import { Hours } from "../Hours/Hours";

export const Today = ({ weather }) => {
  // console.log("TODAY: ", weather);
  let diaActual = weather.hours[0];

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
  let storm = "/assets/icons/storm.png";
  let snow = "/assets/icons/snow.png";

  const getIcon = () => {
    switch (diaActual.weather[0].main.toLowerCase()) {
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
    <Row className={`imgWeather  ${getBackgroundClass()}`}>
      <Col md={6} xs={12} className="todayCol1">
        <section className="mainToday">
          <div className="mainBox">
            <h3>{weather.name}</h3>
            <div className="mainBoxChild1">
              <img src={`${getIcon()}`} className="mainIcon" />
              <h2> {Math.round(diaActual.main.temp)} º</h2>
            </div>
            <div className="mainBoxChild2">
              <h5>Máx: {Math.round(diaActual.main.temp_max)} º</h5>
              <h5> - </h5>
              <h5>Mín: {Math.round(diaActual.main.temp_min)}º</h5>
            </div>
          </div>
          <div className="indicadores">
            <div className="indicadoresOrden">
              <div className="regularBox">
                <h6>Sensación:</h6>
                <h4>{Math.round(diaActual.main.feels_like)} º</h4>
              </div>
              <div className="regularBox">
                <h6>Humedad:</h6>
                <h4>{Math.round(diaActual.main.humidity)} %</h4>
              </div>
            </div>
            <div className="indicadoresOrden">
              <div className="regularBox">
                <h6>Viento:</h6>
                <h4>{Math.round(diaActual.wind.speed)} m/s</h4>
              </div>
              <div className="regularBox">
                <h6>Nubes:</h6>
                <h4>{Math.round(diaActual.clouds.all)} %</h4>
              </div>
            </div>
          </div>
        </section>
      </Col>
      <Col md={6} xs={12} className="todayCol2">
        <section className="sentionNext">
          <Hours weather={weather} />
        </section>
      </Col>
    </Row>
  );
};
