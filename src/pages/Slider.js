import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import people from "../api/data";

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [data, setData] = useState([]);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    setData(people);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < data.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 4000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [currentIndex, data.length]);

  const handlePrevious = () => {
    clearInterval(intervalId);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const handleNext = () => {
    clearInterval(intervalId);
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };
  return (
    <div className="bg-stone-100 w-full h-screen">
      <div className="flex flex-row translate-y-64 ">
        <button
          class="basis-1/4 flex justify-center"
          onClick={handlePrevious}
          disabled={currentIndex === 0}
        >
          <FiChevronLeft className="border w-10 h-10 rounded-lg bg-slate-600 text-white drop-shadow-2xl hover:bg-red-600" />
        </button>
        <div class="basis-1/2 flex justify-center">
          {data.length &&
            data.map((dataPeople, index) => {
              if (index === currentIndex) {
                return (
                  <div
                    key={dataPeople.id}
                    className="flex flex-col -translate-y-56 justify-center"
                  >
                    <img
                      className="border-4 border-slate-400 text-slate-400 shadow-xl  w-32 h-32 rounded-full translate-x-64 ml-4 scale-125"
                      src={dataPeople.image}
                    />

                    <p className="font-bold text-xl text-red-600 mt-4">
                      {dataPeople.name}
                    </p>
                    <p className="font-normal text-slate-400 text-base mt-2">
                      {dataPeople.title}
                    </p>
                    <p className="mt-10 text-slate-400">
                      {dataPeople.description}
                    </p>
                    <div className="flex justify-center">
                      <FaQuoteRight className=" text-4xl text-red-600 mt-8" />
                    </div>
                  </div>
                );
              }
              return null;
            })}
        </div>
        <button
          class="basis-1/4 flex justify-center"
          onClick={handleNext}
          disabled={currentIndex === data.length - 1}
        >
          <FiChevronRight className="border w-10 h-10 rounded-lg bg-slate-600 text-white  hover:bg-red-600" />
        </button>
      </div>
    </div>
  );
}
