// Import React from 'react' to enable JSX syntax and use React features.
import React from "react";

// Define a TypeScript interface for the component props.
interface DescriptionComponentProps {
  text: string;
}

// Define the DescriptionComponent functional component with typed props.
const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  text,
}) => {
  // Constants for calculation.
  const maxLines = 4;
  const approxCharsPerLine = 48; // This value will need to be adjusted and experimented with to find the best string length for all use cases.
  const maxChars = approxCharsPerLine * maxLines;

  // Define a TypeScript interface for the return type of the truncateText function.
  interface TruncateResult {
    truncatedText: string;
    showReadMore: boolean;
  }

  // This function truncates the text and determines if the words "...read more" should be displayed.
  const truncateText = (text: string, maxChars: number): TruncateResult => {
    // If the text length exceeds our estimated max chars, truncate and show "...read more".
    if (text.length > maxChars) {
      // Truncates the text to a maximum number of characters.
      let truncatedText = text.substr(0, maxChars);
      // Do further truncation to the last few words before the limit.
      truncatedText = truncatedText.substr(
        0,
        Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))
      );
      // Return the truncated text and a flag indicating that "...read more" should be shown.
      return {
        truncatedText: truncatedText + "", // Appending an empty string to ensure it's a string type.
        showReadMore: true, // Flag to indicate that the text was truncated and "read more" is needed.
      };
    }
    // If not, display text as is without "read more".
    return { truncatedText: text, showReadMore: false };
  };

  // Destructure the returned object from truncateText to get the text to display and a flag indicating whether "...read more" should be appended.
  const { truncatedText, showReadMore } = truncateText(text, maxChars);

  // Because the entire div is is onClick to display a modal I added styling to reflect a pointer.
  return (
    <div
      style={{
        cursor: "pointer",
        padding: "10px",
        border: "1px solid black",
        lineHeight: "1.4em",
        width: "800px",
        position: "relative",
      }}
    >
      <span>{truncatedText}</span>
      {showReadMore && <span style={{ color: "blue" }}> ...read more</span>}
    </div>
  );
};

export default DescriptionComponent;
