import Button from "@mui/material/Button";

const Root = () => {
  return (
    <div className="h-screen">
      {/* IMAGE */}
      <div className="flex justify-center mb-[58px]">
        <img
          src="images/WellNestIcon_transparent.png"
          alt="WellNest icon"
          className="max-w-full mb-8 "
        ></img>
      </div>
      {/* Text Section */}
      <div className="grid text-center lg-mx-32">
        <div className="font-extrabold text-[60px]">WellNest</div>
        <div className="font-semibold text-[40px]">Embrace Wellness</div>
        <div className="font-semibold text-[40px] mb-[58px]">
          Embrace WellNest
        </div>
        {/* Start button */}
        <div className="min-w-full">
          <Button variant="contained" href="/features">
            {" "}
            Start{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Root;
