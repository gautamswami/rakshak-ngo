import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import "./quill.css";

function Editor({ dataFromQuill, blockId }) {
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],

      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      [{ color: ["red", "blue"] }],
      [{ background: ["red", "blue"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "background",
    "align",
    "size",
    "font",
  ];

  const handleProcedureContentChange = (content) => {
    dataFromQuill(content, blockId);
  };

  return (
    <div className="quillContainer">
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={handleProcedureContentChange}
      />
    </div>
  );
}

export default Editor;
