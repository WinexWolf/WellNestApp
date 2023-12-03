import ActionAreaCard from "../components/ActionAreaCard";

const features = [
  {
    id: "tm",
    imageLink: "images/tm.svg",
    featureName: "Therapy Matching",
    description: "",
    redirectLink: "/features"
  },
  {
    id: "dj",
    imageLink: "images/journaling.svg",
    featureName: "Daily Journal",
    description: "",
    redirectLink: "/features"
  },
  {
    id: "mt",
    imageLink: "images/mt.svg",
    featureName: "Mood Tracking",
    description: "",
    redirectLink: "/features"
  },
  {
    id: "pte",
    imageLink: "images/tm.svg",
    featureName: "Play to Earn",
    description: "",
    redirectLink: "/play"
  }
];

const Features = () => {
  return (
    <div>
      <div className="text-center font-extrabold">Features</div>
      <div className="text-center mx-32 my-16">
        WellNest is an all-in-one ultimate mental wellness solution, where every
        tap is a step towards your best self. We offer a wide variety of
        features for our users. Please click on the below features to find out
        more!
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-4 place-items-center w-1/2">
          {features.map((each) => (
            <ActionAreaCard
              key={each.id}
              imageLink={each.imageLink}
              featureName={each.featureName}
              description={each.description}
              redirectLink={each.redirectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
