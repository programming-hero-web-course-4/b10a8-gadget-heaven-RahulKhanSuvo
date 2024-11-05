import { useLoaderData } from "react-router-dom";
import SubHeading from "../components/SubHeading";
import Chart from "../components/Chart";

const Statistics = () => {
  const data = useLoaderData();
  return (
    <div className="bg-[#F7F7F7]">
      <div className="bg-[#9538E2] py-8">
        <SubHeading
          subTitle={
            "Explore the latest gadgets that will  take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
          }
          title={"Statistics"}
        ></SubHeading>
      </div>
      <div className="container mx-auto bg-white mt-16">
        <Chart data={data}></Chart>
      </div>
    </div>
  );
};

export default Statistics;
