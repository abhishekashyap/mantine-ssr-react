import React, { FunctionComponent, useEffect } from "react";
import { HtmlProps } from "../types";

const Html: FunctionComponent<HtmlProps> = ({
  children,
  styles,
  scriptSrc,
}) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* We will inject extracted styles here */}
        {styles}
      </head>

      <body>
        <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
        <script src={scriptSrc}></script>
      </body>
    </html>
  );
};

export default Html;
