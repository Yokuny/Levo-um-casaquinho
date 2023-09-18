import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChartContainer } from "./ChartContainer.style";
import getWeekWeather from "../../../utils/get-week-weather.js";

const Chart_Graph = ({ data }) => {
  const chartData = getWeekWeather(data);
  return (
    <ChartContainer>
      <ResponsiveContainer width="102%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" angle={-12} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temperatura" stroke="#3f0d70" />
        </LineChart>
      </ResponsiveContainer>
      <p>DIA/HORÁRIO</p>
    </ChartContainer>
  );
};

export default Chart_Graph;
