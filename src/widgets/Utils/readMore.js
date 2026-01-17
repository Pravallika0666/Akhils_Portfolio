import React, { useState } from "react";
import "../../styles/CommonVariables/variables.css";
import { renderBoldText } from "./commonUtils";

const ReadMore = ({ text }) => {
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  const displayText = isReadMore ? text.slice(0, 170) : text;
  const readMoreText = renderBoldText("**....read more**");
  const showLessText = renderBoldText("**....show less**");

  return (
    <p className="readmore-quote-text">
      {renderBoldText(displayText)}

      {text.length > 170 && (
        <span onClick={toggleReadMore} style={{ cursor: "pointer" }}>
          {isReadMore ? readMoreText : showLessText}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
