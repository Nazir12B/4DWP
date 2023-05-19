import React from "react";
import { useParams } from "react-router-dom";
import useGetImages from "./hooks/useGetImages";

const BlansonInfo = () => {
  const { name } = useParams();
  const [status, blasons] = useGetImages(name);
  return status === "loaded" ? (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <img
          src={blasons[0].flags.svg}
          alt={blasons[0].currency_long}
          style={{
            height: "15rem",
          }}
        />
      </div>
      <div
        style={{
          paddingLeft: "1rem",
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          marginTop: "3rem",
        }}
      >
        <p>
          Code: <b>{blasons[0].cca3}</b>
        </p>
        <p>
          Pays: <b>{blasons[0].name.common}</b>
        </p>

        <p>
          Nom officiel: <b>{blasons[0].name.official}</b>
        </p>
        <p>
          Nombre de la population: <b>{blasons[0].population}</b>
        </p>
    
      </div>
    </div>
  ) : (
    <div>Chargement...</div>
  );
};

export default BlansonInfo;
