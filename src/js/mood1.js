import React from "react";
import MoodTrack from "../images/moodTrack.png";
import { Link } from "react-router-dom";
import TitleBar from "./titlebar";
import DartVader from '../images/Darth Vader.png';
import Face from "../images/Face4.png";
import ArrowIcon from "../images/Arrow.png";

function Mood1() {
  return (
    <div className="w-[360px] h-[800px] relative bg-white">
      <TitleBar />
      <div className="w-auto h-[22px] left-[40px] top-[195px] absolute justify-center items-center inline-flex">
        <div className="w-[180px] h-[22px] text-center text-neutral-800 text-xl font-semibold font-['Cabin']">
          Chat with celebrities
        </div>
      </div>
      <div className="w-[231px] h-[77px] left-[7px] top-[223px] absolute justify-center items-center inline-flex">
        <div className="w-[231px] h-[77px] text-center text-neutral-800 text-base font-normal font-['Cabin']">
          Express yourself and have a conversation with one of your favorite
          celebrities or characters with the help of WellNest’s advanced AI
          solution.{" "}
        </div>
      </div>
      <img
        className="w-[61px] h-[57px] left-[268px] top-[217px] absolute border"
        src={DartVader}
      />
      <div className="left-[99px] top-[358px] absolute justify-start items-start inline-flex">
        <div className="w-[153px] h-9 px-4 py-1.5 bg-sky-600 rounded justify-center items-center gap-2 flex">
          <div className="text-center text-white text-sm font-medium font-cabin uppercase leading-normal tracking-tight">
            Enter
          </div>
          <img className="w-4 h-4 ml-2" src={ArrowIcon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="w-6 h-6 pl-1 pr-[3.50px] pt-[4.95px] pb-[5.50px] left-[226px] top-[334px] absolute justify-center items-center inline-flex">
        <div className="origin-top-left -rotate-90 w-[13.55px] h-[16.50px] relative"></div>
      </div>
      <div className="w-[348px] h-[197px] left-0 top-[455px] absolute justify-center items-center inline-flex">
        <div className="w-[348px] h-[197px] relative">
          <div className="w-[215px] h-[25px] left-[130px] top-[2px] absolute justify-center items-center inline-flex">
            <div className="w-[215px] h-[25px] text-center text-neutral-800 text-xl font-semibold font-cabin">
              Enter/Track Your Moods
            </div>
          </div>
          <div className="w-[216px] h-[77px] left-[132px] top-[45px] absolute justify-center items-center inline-flex">
            <div className="w-[216px] h-[77px] text-center text-neutral-800 text-base font-normal font-['Cabin']">
              Enter your daily mood and keep record of it. Keep on it and we can
              help you see your improvement!
            </div>
          </div>

          <div className="w-[142px] h-[142px] left-0 top-0 absolute justify-center items-center inline-flex">
            <div className="w-[142px] h-[142px] pl-[9.51px] pr-[9.53px] pt-[6.75px] pb-[6.74px] justify-center items-center inline-flex">
              <div className="w-[122.96px] h-[128.51px] relative">
                <div className="w-[122.96px] h-[128.51px] left-0 top-0 absolute"></div>
              </div>
            </div>
          </div>
          <div className="w-[157px] h-9 left-[101px] top-[151px] absolute justify-start items-start inline-flex">
            <div className="w-[157px] h-9 px-4 py-1.5 bg-sky-600 rounded justify-center items-center gap-2 flex">
              <div className="text-center text-white text-sm font-medium font-cabin uppercase leading-normal tracking-tight">
                Enter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mood1;