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
          <section className={`marco ${getBackgroundClass(data)} p-6`}>
            <div className="organizador m-4">
              <div className="marco_individual p-3">
                <h5>{calcDia(data.dt_txt)}</h5>
                <img src={`${getIcon(data)}`} alt="icono" />
                <h5> {Math.round(data.main.temp)} º</h5>
                <p>
                  Máx{Math.round(data.main.temp_max)} º - Min:{" "}
                  {Math.round(data.main.temp_min)} º
                </p>
              </div>
            </div>
            <div className="organizador">
              <div className="marco_individual flex flex-row flex-wrap  gap-3 aling-items-center justify-content-center p-3">
                <p className="titulo">Sensación:</p>
                <h5>{Math.round(data.main.feels_like)} º</h5>
                <p className="titulo">Humedad:</p>
                <h5>{Math.round(data.main.humidity)} %</h5>
                <p className="titulo">Viento:</p>
                <h5>{data.wind.speed}m/s</h5>
              </div>
            </div>
          </section>
        </Col>
      ))}
    </Row>
  );
};
