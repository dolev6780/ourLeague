import React, { useState , useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from 'react-swipeable'
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export default function Card({ slides}) {
  const [selectedTab, setSelectedTab] = useState(slides[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = async () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setSelectedTab(slides[(currentIndex + 1) % slides.length]);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setSelectedTab(slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1]);
  };
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setSelectedTab(slides[(currentIndex + 1) % slides.length]);
    },
    onSwipedRight: () => {
      setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setSelectedTab(slides[currentIndex === 0 ? slides.length - 1 : currentIndex - 1]);
    },
  });
  return (
    <div className="w-full h-64 mt-10 rounded-md border-2 overflow-hidden shadow-md flex flex-col">
      <main
        className="flex relative justify-between items-center text-2xl flex-grow select-none"
        {...handlers}
      >
        <button
          onClick={handlePrev}
          className="relative left-2 opacity-20 hover:opacity-50"
        >
          <ArrowBackIosOutlinedIcon />
        </button>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.title : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={selectedTab.click}
          >
            {currentIndex === 0 ? (
              <div>
                <div className="text-yellow-600 mb-4">{selectedTab.icon}</div>
                <h1 className="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-300 to-blue-400">
                  {selectedTab.title}
                </h1>
                <p className="text-sm font-medium px-5">
                  {selectedTab.discription}
                </p>
              </div>
            ) : (
              <div>
                <h1 className="mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-300 to-blue-400">
                  {selectedTab.title}
                </h1>
                {selectedTab.list.map((l, i) => {
                  return <div key={i}>{l}</div>;
                })}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
        <button
          onClick={handleNext}
          className="relative right-2 opacity-20 hover:opacity-50"
        >
          <ArrowForwardIosOutlinedIcon />
        </button>
      </main>
    </div>
  );
}