import React from "react";
import Stack from "react-bootstrap/Stack";
import "./Hours.scss";
import ListGroup from "react-bootstrap/ListGroup";

export const Hours = ({ weather }) => {
  const { hours } = weather;

  // Conocer el día de consulta del array
  const calcDia = (string) => {
    return string.split(" ")[0];
  };
  //Saber la hora de la toma recibida Ç(tramo por horas)
  const calcHora = (string) => {
    const horaCompleta = string.split(" ")[1];
    const hora = horaCompleta.split(":")[0];
    return hora;
  };

  //Obtener el día de hoy con el mismo formato que la API
  const today = () => {
    // Obtener la fecha actual en milisegundos
    let hoy = Date.now();

    // Crear un objeto Date con la fecha actual
    let fecha = new Date(hoy);

    // Obtener el año, mes y día
    let year = fecha.getFullYear();
    let month = (fecha.getMonth() + 1).toString().padStart(2, "0"); // El mes es devuelto de 0 a 11, así que sumamos 1
    let day = fecha.getDate().toString().padStart(2, "0");

    // Formatear la fecha en el formato deseado
    let fechaFormateada = `${year}-${month}-${day}`;

    return fechaFormateada;
  };

  const preparacionData = (data) => {
    let temp = {};
    // let res = data.filter((e) => calcDia(e.dt_txt) === today());
    let res = data.slice(0, 6);

    temp = {
      ...temp,
      horas: res,
    };

    return temp;
  };

  const dataPreparada = preparacionData(hours);

  let sunny = "/assets/icons/sunny.png";
  let rainy = "/assets/icons/rainy.png";
  let clouds = "/assets/icons/clouds.png";
  let storm = "/assets/icons/storm.png";
  let snow = "/assets/icons/snow.png";

  const getIcon = (weatherType) => {
    switch (weatherType.toLowerCase()) {
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

  // console.log("DATA PREPARADA", dataPreparada);
  console.log("HOURSSSSS", hours);
  return (
    <Stack className="stack">
      <br />
      <h5>Previsión cada 3 horas</h5>
      <hr className="linea" />
      {dataPreparada.horas.map((data, index) => (
        <>
          <div key={index} className="horas">
            <h3> {calcHora(data.dt_txt)}</h3>
            <img src={getIcon(data.weather[0].main)} className="mainIcon" />
            <h2> {Math.round(data.main.temp)} º</h2>
            <div className="extremos">
              <h5>Máx: {Math.round(data.main.temp_max)} º</h5>
              <h5> - </h5>
              <h5> Mín: {Math.round(data.main.temp_min)} º</h5>
            </div>
          </div>
          <hr className="linea" />
        </>
      ))}
    </Stack>
  );
};
{
  /*
  <ListGroup className="stack">
      <h5>Previsión cada 3 horas</h5>
      {dataPreparada.horas.map((data, index) => (
        <ListGroup.Item key={index} className="horas p-2 ">
          <h3> {calcHora(data.dt_txt)}</h3>
          <img src={getIcon(data.weather[0].main)} className="mainIcon" />
          <h2> {Math.round(data.main.temp)} º</h2>
          <div className="extremos">
            <h5>
              Máx: {Math.round(data.main.temp_max)} º - Mín:{" "}
              {Math.round(data.main.temp_min)} º
            </h5>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>  
  
   */
}
