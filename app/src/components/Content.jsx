import React from "react";

import { useData } from "../store/Context";
import ContentMain from "./ContentMain";
import ContentTop from "./ContentTop";

function Content() {
  return (
    <div>
      <ContentTop />
      <ContentMain />
    </div>
  );
}

export default Content;
