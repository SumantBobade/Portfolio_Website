import { Container, Typography, Grid, Divider } from "@mui/material";
import { useContext, useEffect } from "react";
import { ColorModeContext } from "../../../../pages/_app";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import { centeredStyles } from "../Perks/Perks";
import ToolCard from "./ToolCard";
import gsap from "gsap";

const TechTools = ({ iconsArray }: any) => {
  const colorMode = useContext(ColorModeContext);

  // Helper: disable filter when in dark mode
  const isfilterMode = (item: any) =>
    colorMode?.mode === "light" ? false : item?.filter;

  // Animate titles on scroll
  useEffect(() => {
    MainTitleAnimation(".title1", ".title2");
    gsap.to(".secondTitle", {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ".secondTitle",
        start: "top 70%",
      },
    });
  }, []);

  // Filter tools by category
  const aiTools = iconsArray?.filter((tool: any) => tool.category === "ai");
  const devTools = iconsArray?.filter((tool: any) => tool.category === "dev");
  const gameTools = iconsArray?.filter((tool: any) => tool.category === "game");
  const supportTools = iconsArray?.filter(
    (tool: any) => tool.category === "support"
  );

  // Helper to render a section
  const renderToolSection = (title: string, tools: any[], className: string) => {
    if (!tools || tools.length === 0) return null;
    return (
      <>
        <Grid item sx={centeredStyles}>
          <Typography
            variant="h2"
            className={`secondary secondTitle t25o0 ${className}`}
            sx={{
              pt: "3.5em",
              opacity: 0,
              fontSize: { xs: ".9em", sm: "1.1em" },
              fontWeight: 500,
            }}
          >
            {title}
          </Typography>
        </Grid>

        <Grid
          sx={{
            ...centeredStyles,
            flexDirection: "row",
            justifyContent: { xs: "center" },
            mt: "3em",
            flexWrap: "wrap",
          }}
          xs={12}
          item
        >
          {tools.map((tool: any) => (
            <ToolCard
              className={className}
              filter={isfilterMode(tool)}
              svg={tool.svg}
              title={tool.title}
              key={tool.title}
            />
          ))}
        </Grid>
      </>
    );
  };

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: { xs: "6em" },
        }}
      >
        <Grid container>
          {/* --- Title Section --- */}
          <Grid item sx={centeredStyles}>
            <Typography
              className="title1 t25o0"
              variant="h1"
              sx={{
                fontSize: { xs: "2.2em", sm: "2.5em", md: "3em" },
              }}
              fontWeight="600"
            >
              Tools Of The Present And Future
            </Typography>

            <Typography
              variant="h2"
              className="secondary title2 t25o0"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: { xs: ".8em", sm: "1em" },
              }}
            >
              Technologies that shape my development journey
            </Typography>
          </Grid>

          {/* --- Tool Sections --- */}
          {renderToolSection("🧠 AI & Machine Learning", aiTools, "toolCard1")}
          {renderToolSection("💻 Development", devTools, "toolCard2")}
          {renderToolSection("🎮 Game Development", gameTools, "toolCard3")}
          {renderToolSection("🔄 Continuous Support", supportTools, "toolCard4")}

          {/* --- Fallback --- */}
          {!iconsArray ||
            (iconsArray.length === 0 && (
              <Typography
                sx={{
                  margin: "0 auto",
                  fontSize: "1em",
                  fontWeight: "500",
                  color: "red",
                }}
                variant="h1"
              >
                There was an error loading the items.
              </Typography>
            ))}
        </Grid>
      </Container>
      <Divider />
    </>
  );
};

export default TechTools;
