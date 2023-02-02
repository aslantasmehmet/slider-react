import React from "react";
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
 import {FaQuoteRight}from 'react-icons/fa';

export default function Slider() {
  return (
    <div className="bg-stone-100 w-full h-screen" >
      <div className="flex flex-row translate-y-64 ">
        <button class="basis-1/4 flex justify-center"><FiChevronLeft className="border w-8 h-8 rounded-lg bg-slate-600 text-white  hover:bg-red-600"/></button>
        <div class="basis-1/2 flex justify-center">
            <div className="flex flex-col -translate-y-40">
                <div className="border-2 text-slate-400 shadow-lg w-40 h-40 rounded-full translate-x-64"></div>
                
                    <p className="font-bold text-xl text-red-600 mt-4">MEHMET ASLANTAŞ</p>
                    <p className="font-normal text-slate-400 text-base mt-2">Software Developer</p>
                    <p className="mt-10">Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.</p>
                   <div className="flex justify-center"> <FaQuoteRight className=" text-4xl text-red-600 mt-8"/></div>
             
                

            </div>
        </div>
        <button class="basis-1/4 flex justify-center"><FiChevronRight className="border w-8 h-8 rounded-lg bg-slate-600 text-white  hover:bg-red-600"/></button>
      </div>
    </div>
  );
}
