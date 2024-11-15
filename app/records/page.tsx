"use client";

import Image from "next/image";
import { RECORDS_TYPE } from "@/mock-data/records";
import { motion } from "framer-motion";
import BodyRecordChart from "@/app/components/BodyRecordChart";
import ExerciseRecord from "@/app/components/ExerciseRecord";
import DiaryRecord from "@/app/components/DiaryRecord";

export default function RecordsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-14">
        {/* Records type */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {RECORDS_TYPE.map((record, index) => (
            <motion.div
              key={record.type}
              className="relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.03,
                transition: {
                  duration: 0.3,
                  ease: "easeInOut"
                }
              }}
            >
              {/* Background Image Container */}
              <motion.div 
                className="relative border-primary-yellow border-[30px] border-solid"
                whileHover={{
                  boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
                  transition: {
                    duration: 0.3
                  }
                }}
              >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Background Image */}
                <div className="relative aspect-square w-full">
                  <Image
                    src={record.image}
                    alt={record.type}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
                  <h2 className="lg:text-[25px] text-lg font-inter uppercase mb-2 tracking-wider text-primary-yellow text-center">
                    {record.type}
                  </h2>
                  <button className="bg-primary-orange px-4 py-2 lg:text-sm text-xs w-auto lg:w-[160px]">
                    {record.label_button}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Chart tracking */}
        <div className="mt-16">
          <BodyRecordChart />
        </div>

        {/* Execise tracking records */}
        <div className="mt-16">
          <ExerciseRecord />
        </div>

        {/* Diary */}
        <div className="mt-16">
          <DiaryRecord />
        </div>
      </div>
    </div>
  );
}
