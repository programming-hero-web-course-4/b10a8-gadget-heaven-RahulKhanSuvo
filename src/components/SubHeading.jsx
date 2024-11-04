const SubHeading = ({ title, subTitle }) => {
  return (
    <div className="text-center text-white">
      <h1 className="font-bold text-3xl">{title}</h1>
      <p>{subTitle}</p>
    </div>
  );
};

export default SubHeading;
