import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="/static/mona-lisa-bw.jpg"
        secondaryImg="/static/the-mona-lisa.jpg"
        alt=""
      />
      <ImageToggleOnMouseOver
        primaryImg="/static/stevejobs.jpg"
        secondaryImg="/static/steve-jobs.jpeg"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
