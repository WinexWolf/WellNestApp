import ActionAreaCard from "../components/ActionAreaCard";

const features = [
  { id: "tm", imageLink: "", featureName: "Therapy Matching", description: "" },
  { id: "dj", imageLink: "", featureName: "Daily Journal", description: "" },
  { id: "mt", imageLink: "", featureName: "Mood Tracking", description: "" },
  { id: "pte", imageLink: "", featureName: "Play to Earn", description: "" }
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
      <div className="grid grid-cols-2 gap-4 m-16 ">
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
  );
};

export default Features;
