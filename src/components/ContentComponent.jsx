import React from "react";

function ContentComponent({ data, index }) {
  const { definition, example } = data;

  return (
    <ul
      className="marker:text-mainPurple flex flex-col  sm:px-[1.5rem]  "
      key={index}
    >
      <li
        key={definition.definition}
        className=" list-disc
        font-medium  text-bodyM py-2  leading-6 sm:px-0 px-3 list-inside  "
      >
        {definition}
      </li>
      {example !== undefined ? (
        <p className="text-bodyM text-mainDarkGray leading-6 last:py-3">{`“${example}”`}</p>
      ) : (
        ""
      )}
    </ul>
  );
}

export default ContentComponent;
