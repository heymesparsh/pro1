import React from "react";
import ImageGrid from "./ImageGrid";
import UploadForm from "./UploadForm";
import { Link } from "react-router-dom";

const Images = () => {
  return (
    <>
      <UploadForm />
      <Link to="/" className="btn btn-primary w-20 mt-3">
        {"<"}-- Back
      </Link>
      <ImageGrid />
    </>
  );
};

export default Images;
