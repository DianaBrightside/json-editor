import React from "react";
import Category from "./Category";

const Categories = () => {
  const categories = ["Category1", "Category2", "Category3", "Category4"];

  return categories.map((category, index) => (
    <Category category={category} key={index} />
  ));
};

export default Categories;
