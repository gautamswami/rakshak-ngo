import React, { useState } from "react";
import Editor from "../../components/textEditor/quill";
import "./upload.css";
import ImageInput from "../../components/imageInput";
export default function BlogUpload() {
  const [pageContent, setpageContent] = useState([]);
  const handleBlockAdd = (blocktype) => {
    setpageContent([...pageContent, { image: "", text: "", query: blocktype }]);
  };
  const dataFromQuill = (data, blockId) => {
    const updatedData = [...pageContent];
    updatedData[blockId] = { ...updatedData[blockId], text: data };
    setpageContent(updatedData);
  };
  const dataFromImage = (data, blockId) => {
    const updatedData = [...pageContent];
    updatedData[blockId] = { ...updatedData[blockId], image: data };
    setpageContent(updatedData);
  };
  return (
    <div className="container">
      <input placeholder="Add a title " />
      <select>
        <option>CATEGORY</option>
        <option>Category one</option>
        <option>Category one</option>
        <option>Category one</option>
        <option>Category one</option>
      </select>
      <select>
        <option>HINDI</option>
        <option>ENGLISH</option>
      </select>
      <input placeholder="Author" />
      <input placeholder="TAG" />
      *press ENTER after every tag
      <button onClick={() => handleBlockAdd("image")}>ADD IMAGE</button>
      <button onClick={() => handleBlockAdd("text")}>ADD TEXT</button>

      {pageContent?.map((content, index) => {
        return (
          <div key={`block-${index}`} className="contentContainer">
            {content.query === "image" && (
              <>
                <img src={content.image} alt={`blogImage-${index}`} className="blogImagePreview"/>
                <ImageInput dataFromImage={dataFromImage} blockId={index} />
              </>
            )}
            {content.query === "text" && (
              <Editor dataFromQuill={dataFromQuill} blockId={index} />
            )}
          </div>
        );
      })}
    </div>
  );
}
