import ActionAreaCard from "../components/ActionAreaCard";

const features = [
  {
    id: "tm",
    imageLink: "images/tm.svg",
    featureName: "Therapy Matching",
    description: "",
    redirectLink: "/therapy_matching/welcome",
    isDisabled: false
  },
  {
    id: "dj",
    imageLink: "images/journaling.svg",
    featureName: "Daily Journal",
    description: "",
    redirectLink: "/features",
    isDisabled: true
  },
  {
    id: "mt",
    imageLink: "images/mt.svg",
    featureName: "Mood Tracking",
    description: "",
    redirectLink: "/moodTrack/mood0",
    isDisabled: false
  },
  {
    id: "pte",
    imageLink: "images/tm.svg",
    featureName: "Play to Earn",
    description: "",
    redirectLink: "/play",
    isDisabled: false
  }
];

const Features = () => {
  return (
    <div className="mx-4 my-4">
      <div className="text-center font-semibold text-[40px]">Features</div>
      <div className="mt-2 lg:text-center lg:mx-32 lg:my-16 text-[16px]">
        WellNest is an all-in-one ultimate mental wellness solution, where every
        tap is a step towards your best self. We offer a wide variety of
        features for our users. Please click on the below features to find out
        more!
      </div>
      <div className="flex justify-center my-4">
        <div className="grid grid-cols-2 gap-y-8 gap-x-32 lg:gap-4 place-items-center w-1/2">
          {features.map((each) => (
            <ActionAreaCard
              key={each.id}
              imageLink={each.imageLink}
              featureName={each.featureName}
              description={each.description}
              redirectLink={each.redirectLink}
              isDisabled={each.isDisabled}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
