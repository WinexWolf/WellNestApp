import React, { useState } from "react";
import TitleBar from "./titlebar";
import {
  Button,
  IconButton,
  Typography,
  CircularProgress,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useSpring, animated } from "react-spring";

function Mood4() {
  const [popIndex, setPopIndex] = useState(null);

  const data = [
    { category: "Happy", value: 73 },
    { category: "Neutral", value: 15 },
    { category: "Sad", value: 12 },
  ];

  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  const handleMouseEnter = (index) => {
    setPopIndex(index);
  };

  const handleMouseLeave = () => {
    setPopIndex(null);
  };

  const getBarStyles = (index) => {
    const isPopped = popIndex === index;
    const thickness = isPopped ? 20 : 9;

    return {
      thickness,
      color: index === 0 ? "#0077B6" : index === 1 ? "#00B4D8" : "#03045E",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        cursor: "pointer",
      },
    };
  };

  const popAnimation = useSpring({
    from: { thickness: 8 },
    to: { thickness: 12 },
    reset: true,
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <TitleBar showBackButton link={"/mood2"} />
      <div className="w-[328px] h-[492px] bg-sky-300 top-[7px] mt-12 bg-opacity-20 rounded-[20px] flex flex-col items-center ">
        <div className="text-center font-cabin text-neutral-800 mt-4 text-3xl font-normal">
          Historical Mood Graph
        </div>
        <div className="text-center font-cabin px-2 text-neutral-800 mt-4 text-base font-normal">
          In the past month, you were “Really Happy” 73% of the time
        </div>
        <div className="flex justify-end items-end w-full mr-6 mt-10">
          <Button
            variant="contained"
            href="/mood4"
            style={{ fontSize: "10px", backgroundColor: "#0087E8" }}
            endIcon={
              <IconButton color="inherit">
                <ShareIcon />
              </IconButton>
            }
          >
            Share
          </Button>
        </div>
        {/* Custom Donut Chart */}
        <div
          style={{
            position: "relative",
            width: 223,
            height: 223,
            marginTop: 20,
          }}
        >
          {/* White center */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "white",
            }}
          ></div>
          {data.map((item, index) => (
            <animated.div
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              style={{
                ...getBarStyles(index),
                ...popAnimation,
              }}
            >
              <CircularProgress
                variant="determinate"
                value={(item.value / totalValue) * 100}
                size={223}
                thickness={getBarStyles(index).thickness}
                style={{ color: getBarStyles(index).color }}
                sx={{ position: "absolute", top: 0, left: 0 }}
              />
            </animated.div>
          ))}
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 25, // Change the font size as needed
            }}
          >
            {totalValue}%
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Mood4;
