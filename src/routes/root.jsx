import React from "react";
import { useSpring, animated, config } from "react-spring";
import Button from "@mui/material/Button";

const Root = () => {
  const imageAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1200,
    config: config.gentle, // Use a gentle easing function
  });

  const textAnimation = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -50 },
    delay: 2000,
    config: config.gentle, // Use a gentle easing function
  });

  return (
    <div className="h-screen">
      {/* IMAGE */}
      <animated.div className="flex justify-center w-25 h-25 mt-5 mb-[0px]" style={imageAnimation}>
        <img
          src="images/WellNestLogo.png"
          alt="WellNest icon"
          className="max-w-full mb-1"
        ></img>
      </animated.div>
      {/* Text Section */}
      <animated.div className="grid text-center lg-mx-32" style={textAnimation}>
        <div className="font-extrabold text-[60px] mb-5">WellNest</div>
        <div className="font-semibold text-[25px]">Embrace Wellness</div>
        <div className="font-semibold text-[25px] mb-[58px]">
          Embrace WellNest
        </div>
        {/* Start button */}
        <div className="min-w-full">
          <Button
            variant="contained"
            href="/features"
            style={{ backgroundColor: "#0087E8" }}
          >
            Start
          </Button>
        </div>
      </animated.div>
    </div>
  );
};

export default Root;
