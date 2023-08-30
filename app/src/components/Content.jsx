import React from "react";

import { useData } from "../store/Context";
import ContentMain from "./ContentMainList";
import ContentTop from "./Word";

function Content() {
  return (
    <div>
      <ContentTop />
      <ContentMain />
    </div>
  );
}

export default Content;
