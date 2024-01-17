import React, { useState } from "react";
import "./Home.scss";
import { Button, Col, Row } from "react-bootstrap";
import { Today } from "../../Components/Today/Today";
import axios from "axios";
import { Proximo } from "../../Components/Proximo/Proximo";

export const Home = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState();

  // Preparo los datos para su uso por horas y por días
  const prepareData = (data) => {
    let temp = {};
    let res = data.list.filter((e) => calcHora(e.dt_txt) === "15:00:00");

    temp = {
      ...temp,
      city: data.city,
      hours: data.list,
      name: data.city.name,
      lista: res,
    };

    return temp;
  };

  const calcHora = (string) => {
    return string.split(" ")[1];
  };

  const onSubmit = () => {
    // hacemos petición API y
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&units=metric&appid=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setWeather(prepareData(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // console.log("WEATHERRRRRRRRRRRRRRRRRRRRRRRRRRRR", weather);
  return (
    <>
      <Col className="HomeCol">
        <div className="header">
          <img src="/assets/images/logo_tiempo.jpg" alt="" className="logo" />
          <div className="buscador">
            <input
              type="text"
              id="city"
              value={city}
              className="input_weather"
              onChange={(e) => setCity(e.target.value)}
            />
            <img src="/assets/images/lupa.png" alt="lupa" onClick={onSubmit} />
          </div>
        </div>

        {weather && (
          <>
            <Today weather={weather} city={city} />
            <h2 className="proximo">Próximos días</h2>
            <Proximo weather={weather} />
          </>
        )}
        {!weather && (
          <>
            <h2 className="titulo">
              Conoce el tiempo en cualquier punto del mundo
            </h2>
            <div className="container_logo">
              <img
                src="/assets/images/logo_tiempo.jpg"
                alt=""
                className="main_logo"
              />
            </div>
          </>
        )}
      </Col>
    </>
  );
};
