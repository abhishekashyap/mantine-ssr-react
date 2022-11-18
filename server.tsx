import path from "path";
import fs from "fs";

import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import express from "express";
import { createStylesServer, ServerStyles } from "@mantine/ssr";

import App from "./src/App";
import Html from "./src/Html";

const PORT = process.env.PORT || 3000;
const app = express();

const stylesServer = createStylesServer();

app.get("/", (_, res) => {
  fs.readFile(path.resolve("./public/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }

    const content = renderToString(<App />);
    const styles = renderToString(
      <ServerStyles html={content} server={stylesServer} />
    );

    const updatedDataWithStyles = data.replace(
      "<styles>stylesGoHere</styles>",
      styles
    );

    const updatedDataWithContent = updatedDataWithStyles.replace(
      '<div id="root"></div>',
      `<div id="root">${content}</div>`
    );

    return res.send(updatedDataWithContent);
  });
});

// Serve client side JS
app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
