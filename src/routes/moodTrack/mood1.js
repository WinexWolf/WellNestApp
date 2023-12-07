import React from "react";
import TitleBar from "./titlebar";
import DarthVader from "../../images/DarthVader.png";
import Face from "../../images/Face4.png";
import { Button } from "@mui/material";

function Mood1() {
  return (
    <>
      <TitleBar />
      <div className="bg-white">
        <div className="w-full flex justify-center relative items-center">
          <div className="h-[22px] left-[20px] top-[100px] absolute justify-center items-center inline-flex">
            <div className="w-[200px] h-[22px] text-center text-neutral-800 text-xl font-semibold mb-6">
              Chat with celebrities
            </div>
          </div>
          <div className="h-[77px]  left-[7px] top-[130px] absolute justify-center items-center inline-flex">
            <div className="w-[231px] h-[77px] text-center text-neutral-800 font-normal">
              Express yourself and have a conversation with one of your favorite
              celebrities or characters with the help of WellNest’s advanced AI
              solution.
            </div>
          </div>

          <img
            className=" h-[76px] left-[268px] top-[130px] absolute border"
            src={DarthVader}
          />
          <div className="left-[99px] top-[250px] absolute justify-start items-start inline-flex">
            <Button
              variant="contained"
              className="justify-center w-36"
              href="/moodTrack/mood2"
              style={{ backgroundColor: "#0087E8" }}
            >
              ENTER
            </Button>
          </div>
        </div>

        <div className="w-full flex justify-center relative items-center">
          <div className="w-[348px] h-[197px]  top-[425px] absolute justify-center items-center inline-flex">
            <div className="w-[348px] h-[197px] relative">
              <div className="w-[230px] h-[25px] left-[120px] top-[-50px] absolute justify-center items-center inline-flex">
                <div className="w-[230px] h-[25px] text-center text-neutral-800 text-xl font-semibold">
                  Enter/Track Your Moods
                </div>
              </div>
              <div className="w-[216px] h-[77px] left-[132px] top-[-5px] absolute justify-center items-center inline-flex">
                <div className="w-[216px] h-[77px] text-center text-neutral-800 font-normal">
                  Enter your daily mood and keep record of it. Keep on it and we
                  can help you see your improvement!
                </div>
              </div>

              <div className="w-[142px] h-[142px] left-0 top-[-20px] absolute justify-center items-center inline-flex">
                <div className="w-[142px] h-[142px] pl-[9.51px] pr-[9.53px] pt-[6.75px] pb-[6.74px] justify-center items-center inline-flex">
                  <div className="w-[122.96px] h-[128.51px] relative">
                    <div className="w-[122.96px] h-[128.51px]  absolute">
                      <img className="w-[80px] h-[76px]  border" src={Face} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[157px] h-9 left-[101px] top-[100px] absolute justify-start items-start inline-flex">
                <Button
                  variant="contained"
                  className="justify-center w-36"
                  href="/moodTrack/mood3"
                  style={{ backgroundColor: "#0087E8" }}
                >
                  ENTER
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mood1;
