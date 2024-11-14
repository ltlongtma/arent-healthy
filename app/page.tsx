"use client";
import { BLOG_POSTS, BLOG_TITLE } from "@/mock-data/blog";
import Image from "next/image";
import dayjs from "dayjs";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [visiblePosts, setVisiblePosts] = useState<number>(8);

  const handleShowMore = () => {
    setVisiblePosts((prev) => prev + 8);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  const item = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 120,
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: [0.43, 0.13, 0.23, 0.96]
      }
    }
  };

  return (
    <div className="min-h-screen">
      <main className="container mx-auto py-8 w-full mt-10">
        {/* Category Headers */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mb-20">
          {BLOG_TITLE.map((section) => (
            <button
              key={section.title}
              className="bg-[#2E2E2E] py-5 px-10 uppercase items-center text-center w-auto h-[150px] font-normal 
              transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
            >
              <h2 className="text-primary-yellow text-[22px]">
                {section.title}
              </h2>
              <div className="w-[56px] h-[1px] bg-white mx-auto my-2"></div>
              <p className="text-white text-[18px]">{section.sub_title}</p>
            </button>
          ))}
        </div>

        {/* Blogs section */}
        <motion.div 
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {BLOG_POSTS.slice(0, visiblePosts).map((post) => (
            <motion.div 
              variants={item}
              key={post.id} 
              className="relative cursor-pointer"
              whileHover="hover"
            >
              <div className="relative w-auto h-[144px] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  objectFit="cover"
                />
                <div className="absolute bottom-0 left-0 bg-primary-yellow text-white px-2 py-1">
                  {dayjs(post.timestamp * 1000).format("YYYY.MM.DD")}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  {dayjs(post.timestamp * 1000).format("HH:mm")}
                </div>
              </div>
              <div className="py-3">
                <h3 className="text-[15px] line-clamp-2">{post.title}</h3>
                <h3 className="text-[15px] line-clamp-2">{post.subtitle}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-primary-orange text-[12px]">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-8">
          {visiblePosts < BLOG_POSTS.length ? (
            <button
              onClick={handleShowMore}
              className="bg-gradient-to-r from-primary-yellow to-primary-orange text-white px-6 py-2 rounded-sm 
              hover:opacity-90 h-[56px] w-[296px] transition-all duration-300 hover:scale-105 
              hover:shadow-lg transform active:scale-95"
            >
              コラムをもっと見る
            </button>
          ) : (
            <p className="text-gray-500">すべての記事を表示しました</p>
          )}
        </div>
      </main>
    </div>
  );
}
