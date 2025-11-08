import React, { useState } from "react";
import { Typography, Button } from "@mui/material";

interface ReadMoreProps {
  children: string;
  maxChars?: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ children, maxChars = 280 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text =
    typeof children === "string" ? children : String(children);

  const displayText = isExpanded ? text : text.slice(0, maxChars) + (text.length > maxChars ? "..." : "");

  return (
    <>
      <Typography
        variant="h2"
        sx={{
          maxWidth: "570px",
          fontSize: {
            xs: ".8em",
            sm: "1em",
          },
          lineHeight: 1.7,
        }}
      >
        <span dangerouslySetInnerHTML={{ __html: displayText }} />
      </Typography>

      {text.length > maxChars && (
        <Button
          variant="text"
          size="small"
          onClick={toggleReadMore}
          sx={{
            mt: 1,
            fontWeight: "600",
            textTransform: "none",
            color: "#0092ff",
            "&:hover": {
              color: "#0073cc",
              background: "transparent",
            },
          }}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      )}
    </>
  );
};

export default ReadMore;
