import { JsonEditor as Editor } from "jsoneditor-react";
import "jsoneditor-react/es/editor.min.css";

const Json = () => {
  const initialJson = {};
  return <Editor value={initialJson} onChange={console.log} />;
};
export default Json;
