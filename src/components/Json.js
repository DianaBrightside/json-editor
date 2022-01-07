import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";
import { database } from "../authentication/app";

const Json = () => {
  const handleChange = (initialJson) => {
    let userRef = database.ref("initial");
    userRef.child(initialJson).set(initialJson);
  };

  return <Editor value={initialJson} onChange={handleChange} />;
};
export default Json;
