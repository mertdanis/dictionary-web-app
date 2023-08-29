function Title({ children }) {
  return (
    <div className="flex items-center gap-6 mb-6">
      <h3 className="font-bold text-mainLightBlack2 text-headingM italic ">
        {children}
      </h3>
      <div className="bg-mainGray grow h-[1px]"></div>
    </div>
  );
}

export default Title;
