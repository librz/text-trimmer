import React, { useRef, useState, useEffect } from "react";
import { useMeasure } from "react-use";
import "./TextTrimmer.css";

//Responsively trim long text, append ellipsis to it, dispaly a details button at the end
//Just throw in some text to see the effect
//Use onDetailsClick to garb all the text when you click the details button, and do whatever you want with it (e.g. Open a modal to display all the text)

const TextContainer = ({
  text,
  onDetailsClick,
  detailButton = <span style={{ color: "orange" }}>Details</span>,
  containerStyle = {},
  textStyle = {},
}) => {
  const [containerRef, { width }] = useMeasure();
  const textRef = useRef(null);

  const [showEllipsis, setShowEllipsis] = useState(false);

  useEffect(() => {
    console.log({ width });
    if (textRef?.current) {
      const { offsetWidth, scrollWidth } = textRef.current;
      setShowEllipsis(offsetWidth < scrollWidth);
    }
  }, [width]);

  return (
    <div className="text-container" ref={containerRef} style={containerStyle}>
      <span className="text-to-show" ref={textRef} style={textStyle}>
        {text}
      </span>
      {showEllipsis && (
        <span className="expand-button" onClick={() => onDetailsClick(text)}>
          {detailButton}
        </span>
      )}
    </div>
  );
};

export default TextContainer;
