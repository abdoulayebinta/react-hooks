import React from "react";
import ImageToggleOnScroll from "../src/ImageToggleOnScroll";

const ImageChangeOnScroll = () => {
  return (
    <div>
      {[1, 2, 3, 4].map(personaId => {
        return (
          <div key={personaId}>
            <ImageToggleOnScroll
              primaryImg={`/static/bw/persona-${personaId}.jpg`}
              secondaryImg={`/static/persona-${personaId}.jpg`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageChangeOnScroll;
