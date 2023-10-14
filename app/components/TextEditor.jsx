"use client";
import dynamic from "next/dynamic";
import { useRef } from "react";
import "suneditor/dist/css/suneditor.min.css"; // Import Sun Editor's CSS File to the _app.js
const SunEditor = dynamic(() => import("suneditor-react"), {
  //besure to import dynamically
  ssr: false,
});

const TextEditor = ({ setTerms }) => {
  const editor = useRef();

  // The sunEditor parameter will be set to the core suneditor instance when this function is called
  const getSunEditorInstance = (sunEditor) => {
    editor.current = sunEditor;
  };

  function handleChange(content) {
    setTerms(content);
  }

  return (
    <div className="row">
      <div className="col-md-2 ">
        <p className="">Terms & Condition</p>
      </div>
      <div className="col-md-10 mb-4">
        <SunEditor
          getSunEditorInstance={getSunEditorInstance}
          height="100px"
          setOptions={{
            font: [
              "Arial",
              "Comic Sans MS",
              "Courier New",
              "Impact",
              "Georgia",
              "Tahoma",
              "Trebuchet MS",
              "Verdana",
              "Logical",
              "Salesforce Sans",
              "Garamond",
              "Sans-Serif",
              "Serif",
              "Times New Roman",
              "Helvetica",
            ],
            fontSize: [
              8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 36, 42, 55, 60,
            ],
            popupDisplay: "local",

            buttonList: [
              ["undo", "redo"],
              ["font", "fontSize", "formatBlock"],
              ["textStyle", "fontColor", "hiliteColor", "horizontalRule"],
              ["bold", "underline", "italic", "strike"],
              ["subscript", "superscript", "removeFormat", "blockquote"],
              ["list", "align", "table", "image", "preview"],
            ],
          }}
          placeholder="Write something awesome..."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default TextEditor;
