"use client";

import { DIARY_ENTRIES } from "@/mock-data/records";
import dayjs from "dayjs";
import { useState } from "react";
import { motion } from "framer-motion";

export default function DiaryRecord() {
  const [visibleEntries, setVisibleEntries] = useState<number>(8);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const hasMore = visibleEntries < DIARY_ENTRIES.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleEntries((prev) => prev + 8);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="w-full">
      <motion.h2 
        className="text-xl uppercase font-inter mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MY DIARY
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-4 gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {DIARY_ENTRIES.slice(0, visibleEntries).map((entry, index) => (
          <motion.div
            key={entry.id}
            className="p-4 border-2 border-[#707070] cursor-pointer hover:bg-gray-50 transition-colors h-[240px]"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
              ease: "easeOut"
            }}
          >
            <div className="font-inter">
              <p className="text-lg">
                {dayjs(entry.date * 1000).format("YYYY.MM.DD")}
              </p>
              <p className="text-lg">
                {dayjs(entry.date * 1000).format("HH:mm")}
              </p>
            </div>
            <p className="mt-2 text-sm line-clamp-5">{entry.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button with animation */}
      {hasMore && (
        <motion.div 
          className="text-center mt-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="bg-gradient-to-r from-primary-yellow to-primary-orange text-white px-6 py-2 rounded-sm hover:opacity-90 h-[56px] w-[296px] font-inter disabled:opacity-50 flex items-center justify-center"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "自分の日記をもっと見る"
            )}
          </button>
        </motion.div>
      )}
      
      {/* End Message with animation */}
      {!hasMore && (
        <motion.div 
          className="text-center mt-8 text-gray-500 font-inter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          これ以上の日記はありません
        </motion.div>
      )}
    </div>
  );
}
