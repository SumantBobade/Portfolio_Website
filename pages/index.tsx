import { Box } from "@mui/material";
import type { NextPage } from "next";
import Experience from "../src/components/Sections/TechTools/TechTools";
import Hero from "../src/components/Sections/Hero/Hero";
import Perks from "../src/components/Sections/Perks/Perks";
import Projects from "../src/components/Sections/Projects/Projects";
import CTA from "../src/components/Sections/CallToAction/CTA";
import { useEffect, useRef } from "react";
import CursorAnimation from "../src/gsap/CursorAnimation";
import About from "../src/components/Sections/About/About";
import Layout from "../Layout/Layout";


const Home: NextPage = ({ projectsArray, iconsArray }: any) => {
  const ball = useRef<any>(null);

  useEffect(() => {
    if (ball && ball.current) {
      CursorAnimation(ball.current);
    }
  }, []);

  return (
    <Layout
      desc={`Sumant Bobade — a passionate software developer from India specializing in AI, full-stack development, and game design. I build intelligent, creative, and high-performance digital experiences, from web and mobile apps to AI-powered tools and games.`}
      title="Sumant Bobade | AI & Full-Stack Developer | Portfolio Website"
    >
      <Box
        sx={{
          margin: "0 auto",
          color: "white",
        }}
      >
        <Hero />
        <Perks />
        <Experience iconsArray={iconsArray} />
        <Projects projectsArray={projectsArray} />
        <About />
        <CTA />

        <Box
          ref={ball}
          sx={{
            display: { xs: "none", md: "block" },
          }}
          className="ball"
        ></Box>
      </Box>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  function removeEmpty(obj: any) {
    return Object.fromEntries(
      Object.entries(obj).filter(([_, v]) => v != null && v != false)
    );
  }

  try {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    const res = await fetch(
      `https://graphql.contentful.com/content/v1/spaces/${space}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          query: `
            {
              projectCollection {
                items {
                  title
                  repoUrl
                  siteUrl
                  description
                  img
                }
              }
              iconsCollection {
                items {
                  filter
                  svg
                  title
                  isBackend
                }
              }
            }
          `,
        }),
      }
    );

    const { data } = await res.json();

    if (!data || data?.length < 1) {
      throw "Error fetching data";
    }

    let iconsArray = data?.iconsCollection?.items.map((icon: any) => {
      const cleared = removeEmpty(icon);

      // Add custom category mapping
        let category = "dev";
        
      const title = String(cleared.title || "").toLowerCase();

        if (title.includes("ai")) category = "ai";
        else if (title.includes("unity") || title.includes("game")) category = "game";
        else if (cleared.isBackend) category = "support";


      return {
        ...cleared,
        category,
      };
    });

    return {
      props: {
        projectsArray: data?.projectCollection.items,
        iconsArray,
      },
    };
  } catch (err) {
    console.log("err: ", err);
    return {
      props: {
        data: null,
      },
    };
  }
}
