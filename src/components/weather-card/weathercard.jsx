import React from "react";
import Header from "../weather-card/header/header";
import Detail from "../weather-card/detail/detail";

export default function WeatherCard() {
  return (
    <>
    <article className="card">
      <div className="left-col">
        <Header />
      </div>
      <div className="right-col">
        <Detail />
      </div>
    </article>
    </>
  );
}
