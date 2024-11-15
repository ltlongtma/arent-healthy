"use client";
import { generateMockData, PERIOD_FILTERS } from "@/mock-data/chart";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import dayjs from 'dayjs';

export default function BodyRecordChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("year");
  const [data, setData] = useState(generateMockData(selectedPeriod));

  const formatDate = () => {
    const date = dayjs();
    switch (selectedPeriod) {
      case 'day':
        return date.format('YYYY.MM.DD');
      case 'week':
      case 'month':
        return date.format('YYYY.MM');
      case 'year':
      default:
        return date.format('YYYY');
    }
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setData(generateMockData(period));
  };

  return (
    <div className="w-full bg-[#2E2E2E] p-4 text-white h-full flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl uppercase">
          <span className="block">body</span>
          <span className="block">record</span>
        </h2>
        <span className="text-lg">{formatDate()}</span>
      </div>

      <div className="h-[200px] w-full mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#777"
              horizontal={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#fff" }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="bodyWeight"
              stroke="#FFCC21"
              strokeWidth={2}
              dot={{ fill: "#FFCC21", r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="bodyFat"
              stroke="#8FE9D0"
              strokeWidth={2}
              dot={{ fill: "#8FE9D0", r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-2">
        {PERIOD_FILTERS.map((filter) => (
          <button
            key={filter.id}
            onClick={() => handlePeriodChange(filter.id)}
            className={`w-14 h-8 rounded-full text-sm transition-colors
              ${
                selectedPeriod === filter.id
                  ? "bg-primary-orange text-white"
                  : "bg-white text-primary-orange"
              }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
