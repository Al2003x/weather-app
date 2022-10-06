import React from "react";

export default function Detail() {
  return (
    <>
      <dl className="card__details details">
          <div className="details__group">
            <dt>humidity</dt>
            <dt>73%</dt>
          </div>
          <div className="details__group">
            <dt>wind</dt>
            <dt>6 m/sec</dt>
          </div><div className="details__group">
            <dt>visibility</dt>
            <dt>10/km</dt>
          </div>
      </dl>
    </>
  );
}
