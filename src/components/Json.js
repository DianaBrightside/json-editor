import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import React, { useEffect } from "react";
import { setDatebaseValues, useGetFromDatebase } from "../authentication/app";

const Json = () => {
  const [invoke, initialJson] = useGetFromDatebase();
  useEffect(() => {
    invoke("user");
  }, [invoke]);
  console.log(initialJson);
  const handleChange = (newJson) => {
    setDatebaseValues("user", newJson);
  };

  return initialJson && <Editor value={initialJson} onChange={handleChange} />;
};
export default Json;
