import React, { useEffect, useRef, useState } from "react";
import Editor from "../../components/textEditor/quill";
import "./upload.css";
import ImageInput from "../../components/imageInput";
export default function BlogUpload() {
  const [pageContent, setpageContent] = useState([]);
  const bottomRef = useRef(null);
  const [isAuthorised, setIsAuthorised] = useState(true);
  const [details, setDetails] = useState({ tags: [] });
  const [tagString, setTagString] = useState("");
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
    // UPLOAD TO CLOUDINARY AND ADD LINK HERE
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
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleVerify = (e) => {
    setIsAuthorised(true);
  };

  const handleChangeTags = (e) => {
    setTagString(e.target.value);
    console.log(tagString);
  };
  const handleEnterPress = (event) => {
    console.log("User pressed: ", event.key);

    if (event.key === "Enter") {
      // 👇️ your logic here
      console.log("Enter key pressed ✅");
      setDetails({ ...details, tags: [...details.tags, tagString] });
      setTagString("");
    }
  };
  const handleRemoveTag = (index) => {
    const updatedItems = details?.tags.filter((_, i) => i !== index);
    setDetails({ ...details, tags: updatedItems });
  };
  const handleSubmit = () => {
    // SLUG GET FROM TITLE
    console.log(JSON.stringify(details), JSON.stringify(pageContent));
  };
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [pageContent]);
  return (
    <div className="container">
      {isAuthorised ? (
        <>
          <input
            placeholder="Add a title "
            onChange={handleChange}
            name="title"
          />
          <div className="flex_gap_div">
            <select onChange={handleChange} name="category">
              <option>CATEGORY</option>
              <option>Category one</option>
              <option>Category one</option>
              <option>Category one</option>
              <option>Category one</option>
            </select>
            <select onChange={handleChange} name="language">
              <option>HINDI</option>
              <option>ENGLISH</option>
            </select>
          </div>
          <div className="flex_gap_div">
            <input placeholder="Author" onChange={handleChange} name="author" />

            <input
              placeholder="TAG"
              onChange={handleChangeTags}
              name="tags"
              onKeyDown={handleEnterPress}
              value={tagString}
            />
          </div>
          {details?.tags?.map((tag, id) => {
            return (
              <h1 key={id} onClick={() => handleRemoveTag(id)}>
                {tag}
              </h1>
            );
          })}
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
                    onChange={(e) => handleVideoLink(e, index)}
                  />
                )}
              </div>
            );
          })}
          <button onClick={() => handleSubmit()}>SUBMIT</button>
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
