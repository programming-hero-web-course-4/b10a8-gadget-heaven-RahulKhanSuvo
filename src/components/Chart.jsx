import {
  ComposedChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  Area,
  Scatter,
} from "recharts";

const Chart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <XAxis dataKey="product_title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area dataKey="price" fill="#EFE1FB" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#9538E2" />
        <Scatter dataKey="rating" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default Chart;
