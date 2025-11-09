// src/components/Sections/TechTools/ToolCard.tsx
import { Box, Typography } from "@mui/material";

interface ToolCardProps {
  title: string;
  svg: any;
  filter?: boolean;
  className?: string;
}

const ToolCard = ({ title, svg, filter, className }: ToolCardProps) => {
  const Icon = svg; // might be a component or string

  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        m: 2,
        width: { xs: 100, sm: 120 },
        transition: "all 0.3s ease",
        filter: filter ? "grayscale(100%)" : "none",
        "&:hover": {
          transform: "scale(1.05)",
          filter: "none",
        },
      }}
    >
      {typeof Icon === "string" ? (
        <img src={Icon} alt={title} width="50" height="50" />
      ) : (
        <Icon width={50} height={50} />
      )}
      <Typography
        variant="subtitle2"
        sx={{
          mt: 1,
          textAlign: "center",
          fontWeight: 500,
          fontSize: { xs: "0.8rem", sm: "0.9rem" },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default ToolCard;
