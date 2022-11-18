import { Blockquote, MantineProvider, Title } from "@mantine/core";
import React from "react";

const About = () => {
  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div>
        <Title size={"h1"}>This is about page</Title>
        <Blockquote cite="– Forrest Gump">
          Life is like an npm install - you never know what you are going to
          get.
        </Blockquote>
      </div>
    </MantineProvider>
  );
};

export default About;
