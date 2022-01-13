import React, { useEffect } from "react";

import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import { useLocation, useParams } from "react-router-dom";

import { setDatebaseValues, useGetFromDatebase } from "../authorization/app";
import JsonInputs from "./JsonInputs";

const Json = () => {
  let { category } = useParams();
  const location = useLocation();
  const dataPath = location.search.slice(1, location.length);
  const [invoke, initialJson] = useGetFromDatebase();
  useEffect(() => {
    invoke(dataPath);
  }, []);
  console.log(initialJson);
  const handleChange = (newJson) => {
    setDatebaseValues(dataPath, newJson);
  };

  return (
    initialJson && (
      <>
        <JsonInputs />
        <Editor value={initialJson} onChange={handleChange} />
      </>
    )
  );
};
export default Json;
