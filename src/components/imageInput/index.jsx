import React from "react";
import "./imageInput.css";
export default function ImageInput({ dataFromImage, blockId }) {
  const handleImageInput = async (e) => {
    let { files } = e.target;
    let base = await imageTobase(files[0]);
    dataFromImage(base, blockId);
  };
  const imageTobase = async (file) => {
    return new Promise((resolve) => {
      let fileInfo;
      let baseURL = "";
      // Make new FileReader
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        // Make a fileInfo Object
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };
  return (
    <div className="inputContainer">
      <div className="overlay">
        <button>UPLOAD IMAGE</button>
      </div>
      <input
        type="file"
        className="inputField"
        onChange={(e) => handleImageInput(e)}
      />
    </div>
  );
}
