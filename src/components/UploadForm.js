import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import ProgBar from "./ProgBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setError("Format not supported");
      setFile(null);
    }
  };

  return (
    <>
      <div className="input-group mb-3">
        <input
          type="file"
          className="form-control"
          id="inputGroupFile02"
          onChange={changeHandler}
        />
      </div>
      <div>
        {error && <Alert variant="warning">{error}</Alert>}
        {file && <ProgBar file={file} setFile={setFile} />}
      </div>
    </>
  );
};

export default UploadForm;
