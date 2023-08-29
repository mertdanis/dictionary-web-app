function NotFound() {
  return (
    <div className=" p-3 gap-6 text-white flex flex-col justify-center items-center">
      <p className="text-[64px]">😔</p>
      <p className="text-text__color text-headingS font-bold">
        No Definitions Found
      </p>
      <p className="text-mainDarkGray font-medium text-bodyM">
        Sorry pal, we couldnt find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
}

export default NotFound;
