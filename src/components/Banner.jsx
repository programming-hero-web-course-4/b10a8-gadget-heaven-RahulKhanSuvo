import bannerImage from "../assets/banner.jpg";
const Banner = () => {
  return (
    <div>
      <div className="bg-[#FFFFFF4D] p-6 rounded-[30px]">
        <img
          className="h-[600px] rounded-3xl w-[1200px]"
          src={bannerImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
