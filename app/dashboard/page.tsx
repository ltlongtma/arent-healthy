"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { FILTERS_BUTTON, MEALS } from "@/mock-data/dashboard";
import dayjs from "dayjs";
import BodyRecordChart from "@/app/components/BodyRecordChart";

export default function DashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [visibleItems, setVisibleItems] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const filteredMeals =
    selectedFilter === "all"
      ? MEALS
      : MEALS.filter((meal) => meal.type === selectedFilter);

  const hasMore = visibleItems < filteredMeals.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleItems((prev) => prev + 8);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Achievement Rate */}
      <div className="h-[400px] w-full grid grid-cols-10 gap-5 sm:gap-0">
        {/* Hero Section */}
        <div className="sm:col-span-4 col-span-10 h-full relative">
          <Image
            src="/images/dashboard_meal.png"
            alt="Achievement Rate"
            fill
            objectFit="cover"
          />
          {/* Achievement Circle Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[181px] h-[181px] flex items-center justify-center">
              {/* Add white border circle with gap */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="90.5"
                  cy="90.5"
                  r="88.5"
                  stroke="white"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="556"
                  strokeDashoffset="139" // Adjust this value to control the gap (25% of 556)
                />
              </svg>
              {/* Achievement text */}
              <div className="text-white text-center z-10">
                <span className="text-lg font-inter">05/21</span>
                <span className="text-[25px] ml-1 font-inter">75%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="sm:col-span-6 col-span-10 h-full relative">
          <BodyRecordChart />
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center gap-4 md:gap-16 lg:gap-28 mb-8 px-10">
          {FILTERS_BUTTON.map((button) => (
            <button
              key={button.id}
              onClick={() => setSelectedFilter(button.id)}
              className={`w-[136px] h-[150px] clip-path-hexagon bg-gradient-to-r from-primary-yellow to-primary-orange flex flex-col items-center justify-center transition-transform hover:scale-105 font-inter ${
                selectedFilter === button.id ? "ring-2 ring-primary-orange" : ""
              }`}
            >
              <Image
                src={button.icon}
                alt={button.label}
                width={56}
                height={56}
                className="mb-2"
              />
              <span className="text-white text-xl capitalize font-inter">
                {button.label}
              </span>
            </button>
          ))}
        </div>

        {/* Meal Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 sm:px-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {filteredMeals.slice(0, visibleItems).map((meal, index) => (
            <motion.div
              key={meal.id}
              className="relative h-[242px] cursor-pointer hover:opacity-90 transition-opacity"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1, // Stagger effect
              }}
            >
              <Image
                src={meal.image}
                alt={`${meal.date} ${meal.type}`}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-primary-yellow text-white px-2 py-1 font-inter">
                {dayjs(meal.date).format("MM.DD")}.
                {meal.type[0].toUpperCase() + meal.type.slice(1)}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <div className="text-center mt-8 flex justify-center">
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="bg-gradient-to-r from-primary-yellow to-primary-orange text-white px-6 py-2 rounded-sm hover:opacity-90 h-[56px] w-[296px] font-inter disabled:opacity-50 flex items-center justify-center"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "記録をもっと見る"
              )}
            </button>
          ) : filteredMeals.length > 0 ? (
            <p className="text-gray-500 font-inter">全ての記録を表示しました</p>
          ) : (
            <p className="text-gray-500 font-inter">記録がありません</p>
          )}
        </div>
      </div>
    </div>
  );
}
