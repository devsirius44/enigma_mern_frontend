import React, { useState } from "react";
import AddProductHeader from "./add-product-header";
import AddProductBody from "./edit-product-body";

const fakedata = {
  itemid: 330,
  item_name: "Half Grilled Cheese",
  menucatid: 2,
  item_price: "4.75",
  taxrate: "0.0775",
  item_mods: "",
  itemOptions_json: [
    {
      id: "330/327/1",
      sku: "330/327/1",
      name: "Change",
      options: [
        {
          id: "330/327/1/1",
          sku: "330/327/1/1",
          name: "No Cheese",
          price: 0,
          description: "",
          displayOrder: 1,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/2",
          sku: "330/327/1/2",
          name: "No Spinach",
          price: 0,
          description: "",
          displayOrder: 2,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/6",
          sku: "330/327/1/6",
          name: "Gluten Free Bread",
          price: 1.5,
          description: "",
          displayOrder: 6,
          priceCurrency: "USD",
        },
        {
          id: "330/327/1/7",
          sku: "330/327/1/7",
          name: "add Chicken",
          price: 1.5,
          description: "",
          displayOrder: 7,
          priceCurrency: "USD",
        },
      ],
      required: 0,
      optionType: 1,
      displayOrder: 1,
      eligibleQuantityMax: 0,
    },
  ],
  mod_prompt: 0,
  active: "1",
  printerid: "kitchen1",
  backgroundcolor: "#00adef",
  hungritemid: "20172",
  item_class: "",
  ingredients_json: null,
};

const EditProduct = () => {
  return (
    <>
      <AddProductHeader />
      <AddProductBody />
    </>
  );
};

export default EditProduct;
