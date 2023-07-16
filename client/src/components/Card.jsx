import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';

export default function Card({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const selectedTab = slides[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className="w-full h-64 mt-10 overflow-hidden shadow-md shadow-black flex flex-col cursor-pointer rounded-md border-2 
      xl:w-[600px] xl:h-[600px] sm:w-[500px] sm:h-[300px]
    ">
      <main className="flex relative justify-between mt-5 flex-grow select-none
      
      " {...handlers}>
        <button onClick={handlePrev} className="relative left-2 opacity-20 hover:opacity-50">
          <ArrowBackIosOutlinedIcon />
        </button>
        <AnimatePresence mode='wait'>
          <motion.div
          className='m-auto'
            key={selectedTab.title}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={selectedTab.click}
          >
            <div className=''>
              <h1 className="mb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-neutral-300 to-blue-400
                xl:text-4xl
              ">
                {selectedTab.title}
              </h1>
              {currentIndex === 0 ? (
                <>
                  <div className="text-yellow-600 mb-4 xl:mt-10">{selectedTab.icon}</div>
                  <p className="text-sm font-medium px-5 xl:text-2xl xl:mt-10">{selectedTab.description}</p>
                </>
              ) : (
                <div className="relative">
                  <div className="flex justify-between">
                    <h1 className="text-sm xl:text-xl">Name: {selectedTab.details.title}</h1>
                    <h1 className="text-sm xl:text-xl">Type: {selectedTab.details.type}</h1>
                  </div>
                  <div className="bg-white bg-opacity-40 rounded text-sm mt-4 max-h-[80px] xl:max-h-[140px] overflow-y-scroll no-scrollbar">
                    <h1 className="font-semibold">Members</h1>
                    {selectedTab.members.map((member, i) => (
                      <div key={i}>{member}</div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={handleNext} className="relative right-2 opacity-20 hover:opacity-50">
          <ArrowForwardIosOutlinedIcon />
        </button>
      </main>
    </div>
  );
}
