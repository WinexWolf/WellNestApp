import Button from "@mui/material/Button";

const Root = () => {
  return (
    <>
      {/* IMAGE */}
      <div className="flex justify-center">
        <img
          src="images/WellNestIcon_transparent.png"
          alt="WellNest icon"
        ></img>
      </div>
      {/* Text Section */}
      <div className="grid text-center mx-32">
        <div className="font-extrabold">WellNest</div>
        <div className="font-extrabold">Embrace Wellness</div>
        <div className="font-extrabold">Embrace WellNest</div>
        {/* Start button */}
        <div className="min-w-full">
          <Button variant="contained" href="/features">
            {" "}
            Start{" "}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Root;
