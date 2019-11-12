import React from "react";

function Item(props) {
  return (
    <div className="BuildControl">
      <div className="Label">{props.name}</div>
      {props.butonGoster ? (
        <button
          className="Less"
          onClick={() => {
            props.malzemeCikar(props);
          }}
        >
          Cıkar
        </button>
      ) : (
        <button className="Less disabled">Cıkar</button>
      )}
      <button
        className="more"
        onClick={() => {
          props.malzemeEkle(props);
        }}
      >
        Ekle
      </button>
      <p style={{ marginRight: "15px" }}>Adet: {props.count}</p>
    </div>
  );
}

export default Item;
