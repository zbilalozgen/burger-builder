import React from "react";
import { Item } from "../../components";
import { access } from "fs";

function ItemList(props) {
  return (
    <div>
      {props.items.map(item => {
        const icindeVarMi = props.selectedIngredients.find(ingredient => {
          return ingredient.name === item.name;
        });

        const kacTaneVar = props.selectedIngredients.filter(malzeme => {
          return malzeme.name === item.name;
        }).length;

        const price = [];

        return (
          <Item
            key={item.id}
            {...item}
            malzemeEkle={props.malzemeEkle}
            malzemeCikar={props.malzemeCikar}
            butonGoster={icindeVarMi}
            count={kacTaneVar}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
