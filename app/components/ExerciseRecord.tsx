"use client";

import { EXERCISE_RECORDS } from "@/mock-data/records";
import dayjs from "dayjs";

export default function ExerciseRecord() {
  return (
    <div className="w-full bg-primary-dark-gray p-6 text-white">
      <div className="flex items-center gap-4 mb-4">
        <h2 className="text-xl uppercase">
          <span className="block">my</span>
          <span className="block">exercise</span>
        </h2>
        <span className="lg:text-2xl text-xl">
          {dayjs().format("YYYY.MM.DD")}
        </span>
      </div>

      <div className="h-[264px] overflow-y-auto pr-4 scrollbar">
        <div className="grid md:grid-cols-2 gap-x-[40px] gap-y-2">
          {EXERCISE_RECORDS.map((record) => (
            <div
              key={record.id}
              className="flex items-center justify-between py-2 border-b border-gray-600"
            >
              <div className="flex gap-3">
                <span className="text-[8px] mt-[5px]">●</span>
                <div>
                  <p className="text-[15px]">{record.name}</p>
                  <p className="text-primary-yellow text-md font-inter">
                    {record.kcal}kcal
                  </p>
                </div>
              </div>
              <p className="text-primary-yellow text-lg font-inter">
                {record.minutes} min
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
