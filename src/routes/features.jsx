import ActionAreaCard from "../components/ActionAreaCard";

const features = [
  {
    id: "tm",
    imageLink: "images/tm.svg",
    featureName: "Therapy Matching",
    description: ""
  },
  {
    id: "dj",
    imageLink: "images/journaling.svg",
    featureName: "Daily Journal",
    description: ""
  },
  {
    id: "mt",
    imageLink: "images/mt.svg",
    featureName: "Mood Tracking",
    description: ""
  },
  {
    id: "pte",
    imageLink: "images/tm.svg",
    featureName: "Play to Earn",
    description: ""
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
      <div>
        <div className="grid grid-cols-2 gap-4 m-16 place-items-center">
          {features.map((each) => (
            <ActionAreaCard
              key={each.id}
              imageLink={each.imageLink}
              featureName={each.featureName}
              description={each.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
