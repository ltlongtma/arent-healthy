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
import dayjs from "dayjs";
import { motion } from "framer-motion";

export default function BodyRecordChart() {
  const [selectedPeriod, setSelectedPeriod] = useState("year");
  const [data, setData] = useState(generateMockData(selectedPeriod));

  const formatDate = () => {
    const date = dayjs();
    switch (selectedPeriod) {
      case "day":
        return date.format("YYYY.MM.DD");
      case "week":
      case "month":
        return date.format("YYYY.MM");
      case "year":
      default:
        return date.format("YYYY");
    }
  };

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period);
    setData(generateMockData(period));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-primary-dark-gray p-6 text-white h-full flex flex-col justify-between"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-4 mb-4"
      >
        <h2 className="text-xl uppercase">
          <span className="block">body</span>
          <span className="block">record</span>
        </h2>
        <span className="text-lg">{formatDate()}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="h-[200px] w-full mb-4"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-2"
      >
        {PERIOD_FILTERS.map((filter, index) => (
          <motion.button
            key={filter.id}
            onClick={() => handlePeriodChange(filter.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0.5 + index * 0.1,
            }}
            className={`w-14 h-6 rounded-full text-sm transition-colors
              ${
                selectedPeriod === filter.id
                  ? "bg-primary-yellow text-white"
                  : "bg-white text-primary-orange"
              }`}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
}
