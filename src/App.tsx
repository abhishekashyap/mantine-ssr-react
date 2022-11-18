import { Button, MantineProvider, Anchor } from "@mantine/core";
import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <MantineProvider
      theme={{ colorScheme: "light" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <div>Count: {counter}</div>
      <Button onClick={() => setCounter((count) => count + 1)}>Add one</Button>
      <br />
      <Anchor href="/about">Navigate to about</Anchor>
    </MantineProvider>
  );
}
