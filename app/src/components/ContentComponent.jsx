import React from "react";

function ContentComponent({ data, index }) {
  const { definition } = data;

  return (
    <ul className="marker:text-mainPurple flex items-center">
      <li
        key={definition.definition}
        className=" list-disc
        font-medium  text-bodyM py-3"
      >
        {definition}
      </li>
    </ul>
  );
}

export default ContentComponent;
