import React from "react";
import MoodTrack from "../../images/moodTrack.png";
import { Button } from "@mui/material";

function Mood0() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white ">
      <img
        src={MoodTrack}
        alt="Mood Track"
        className="max-w-full w-[275px] h-[300px] pb-12"
      />
      
      <div className="text-center text-40px font-semibold mb-8">
        Mood Tracking
      </div>

      <div className="text-center text-neutral-800 text-16px font-cabin mb-8 mx-4">
        Chat and express yourself to your favorite characters. Track your mood,
        understand your emotions, and take control of your mental health with
        the Mood Tracker
      </div>

      {/*  <div className="bg-sky-600 rounded shadow px-4 py-2">
        <Link
          style={{
            textDecoration: "none", // Remove underline
            color: "inherit", // Inherit the color from the parent
          }}
          to={'/moodTrack/mood1'}
        >
          <div className="text-white text-sm font-medium uppercase">
            Continue
          </div>
        </Link>
      </div> */}
      <Button
        variant="contained"
        href="/moodTrack/mood1"
        style={{  backgroundColor: "#0087E8" }}
      >
Continue      </Button>
    </div>
  );
}

export default Mood0;
