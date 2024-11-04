const SubHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center text-white flex flex-col items-center gap-3">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p className="mb-2">{subTitle}</p>
    </div>
  );
};

export default SubHeading;
