import React from "react";

export default function Header() {
  return (
    <>
      <h2 className="card__title">Saint Peterburg</h2>
      <time className="card__date" dateTime="2022-09-15">
        15 Sep 2022
      </time>
      <div className="card__icon">
        <img src="img/10d.png" alt="Clouds" />
      </div>
      <div className="card__degree">13*C</div>
      <div className="card__weather">Clouds</div>
    </>
  );
}
