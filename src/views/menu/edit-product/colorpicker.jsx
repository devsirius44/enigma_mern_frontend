"use strict";

import React from "react";
import reactCSS from "reactcss";
import { SketchPicker } from "react-color";
import { useState, useRef, useEffect } from "react";

function useVisible(initialIsVisible) {
  const [isVisible, setIsVisible] = useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isVisible, setIsVisible };
}

const ColorPicker = (props) => {
  const [colorHexCode, setColorHexCode] = useState("#000000");
  const { ref, isVisible, setIsVisible } = useVisible(false);

  const color = {
    width: "100%",
    height: "100%",
    borderRadius: "2px",
    background: colorHexCode,
  };

  const swatch = {
    width: "100%",
    height: "40.75px",
    padding: "5px",
    background: "#fff",
    borderRadius: "1px",
    boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
    display: "inline-block",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <div style={swatch} onClick={(e) => setIsVisible(!isVisible)}>
        <div style={color} />
      </div>
      {isVisible && (
        <div style={{ position: "absolute" }} ref={ref}>
          <SketchPicker
            color={colorHexCode}
            onChange={(e) => setColorHexCode(e.hex)}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
