import React, { useEffect, useRef, useState } from "react";
import Editor from "../../components/textEditor/quill";
import "./upload.css";
import ImageInput from "../../components/imageInput";
export default function BlogUpload() {
  const [pageContent, setpageContent] = useState([]);
  const bottomRef = useRef(null);
  const [isAuthorised, setIsAuthorised] = useState(false);
  const handleBlockAdd = (blocktype) => {
    setpageContent([
      ...pageContent,
      { image: "", text: "", videolink: "", query: blocktype },
    ]);
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
  const handleVideoLink = (e, blockId) => {
    const updatedData = [...pageContent];
    updatedData[blockId] = {
      ...updatedData[blockId],
      videolink: e.target.value,
    };
    setpageContent(updatedData);
  };
  const handleInputChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleVerify = (e) => {
    setIsAuthorised(true);
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pageContent]);
  return (
    <div className="container">
      {isAuthorised ? (
        <>
          <input placeholder="Add a title " />
          <div className="flex_gap_div">
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
          </div>
          <div className="flex_gap_div">
            <input placeholder="Author" onChange={handleInputChange} />
            <input placeholder="TAG" />
          </div>
          {/* *press ENTER after every tag */}
          <div className="addBlockDiv">
            <button onClick={() => handleBlockAdd("image")}>+ ADD IMAGE</button>
            <button onClick={() => handleBlockAdd("text")}> + ADD TEXT</button>
            <button onClick={() => handleBlockAdd("videolink")}>
              {" "}
              + ADD VIDEO
            </button>
          </div>

          {pageContent?.map((content, index) => {
            return (
              <div key={`block-${index}`} className="contentContainer">
                {content.query === "image" && (
                  <>
                    {content?.image && (
                      <img
                        src={content?.image}
                        alt={`blogImage-${index}`}
                        className="blogImagePreview"
                      />
                    )}
                    <ImageInput dataFromImage={dataFromImage} blockId={index} />
                  </>
                )}
                {content.query === "text" && (
                  <Editor dataFromQuill={dataFromQuill} blockId={index} />
                )}
                {content.query === "videolink" && (
                  <input
                    placeholder="Enter video url"
                    onChange={(e) => handleVideoLink(e, blockId)}
                  />
                )}
              </div>
            );
          })}
          <span ref={bottomRef}></span>
        </>
      ) : (
        <>
          ENTER CREDENTIALS
          <input />
          <input />
          <button onClick={handleVerify}>VERIFY</button>
        </>
      )}
    </div>
  );
}
