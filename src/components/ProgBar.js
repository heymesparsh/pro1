import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import { ProgressBar } from "react-bootstrap";

const ProgBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <ProgressBar
      variant="info"
      now={Math.round(progress)}
      label={`${Math.round(progress)}%`}
    />
  );
};

export default ProgBar;
