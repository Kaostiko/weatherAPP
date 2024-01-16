import React from "react";
import { Container, Row } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import "./AppRoutes.scss";
import { NavbarApp } from "../Components/NavbarApp/NavbarApp";

export const AppRoutes = () => {
  return (
    <Container fluid className="Contenedor">
      {/* <header>
        <Row>
          <NavbarApp />
        </Row>
      </header> */}
      <main>
        <Row>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Row>
      </main>
      <footer>
        <Row></Row>
      </footer>
    </Container>
  );
};
