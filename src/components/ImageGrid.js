import React from "react";
import useFirestore from "../contexts/useFirestore";
import { Card } from "react-bootstrap";
import Comments from "./Comments";

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  console.log(docs);

  return (
    <div>
      {docs &&
        docs.map((doc) => {
          return (
            <Card className="my-4" style={{ width: "40rem" }} key={doc.id}>
              <Card.Img variant="top" src={doc.url} alt="uploaded pic" />
              <hr />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Comments />
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default ImageGrid;
