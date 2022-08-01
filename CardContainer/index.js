import React from "react";
import Card from "../Card";
import "./index.css";

export default function CardContainer({ data = [] }) {
  return (
    <div className="card-container">
      {data.map((item) => {
        return <Card {...item} key={item.id} />;
      })}
    </div>
  );
}
