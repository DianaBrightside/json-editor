import React from "react";

import Category from "./Category";

const Categories = () => {
  const categories = [
    {
      name: "Templates",
      dataPath: "/templates/-MspbJgNSBHuEegWBGcL",
    },
    {
      name: "List",
      dataPath: "/list/-MspLd6c71Ow9c1lV_5M",
    },
    {
      name: "Items Dairy",
      dataPath: "items/dairy/-Msp_tU-T0sCFAKUnhO8",
    },
    {
      name: "Item Category",
      dataPath: "/item-category/-MspSftLUEZEMpQK0nWE",
    },
  ];

  return categories.map(({ name, dataPath }) => (
    <Category category={name} key={name} dataPath={dataPath} />
  ));
};

export default Categories;
