import FadeInBlur from "../animations/FadeInBlur";
import FadeUp from "../animations/FadeUp";

const roadmap = [
  {
    steps: [
      "Presale Start",
      "Community Growth",
      "v1 dApp Launch",
      "Lorem Ipsum",
    ],
    date: "2022 Q4 - 2023 Q1",
    done: true,
  },
  {
    steps: [
      "Presale Start",
      "Community Growth",
      "v1 dApp Launch",
      "Lorem Ipsum",
    ],
    date: "2023 Q2 - Q3",
    done: false,
  },
  {
    steps: [
      "Presale Start",
      "Community Growth",
      "v1 dApp Launch",
      "Lorem Ipsum",
    ],
    date: "2023 Q4 - 2024 Q1",
    done: false,
  },
  {
    steps: [
      "Presale Start",
      "Community Growth",
      "v1 dApp Launch",
      "Lorem Ipsum",
    ],
    date: "2024 Q2 - 2024 Q3",
    done: false,
  },
];
const RoadmapSection = () => {
  return (
    <section id="roadmap" className="lg:py-8">
      <div className="mx-4 rounded-3xl border-2 border-white/20 bg-[#14181C]/30 py-8 backdrop-blur-2xl transition-all duration-200 hover:border-primary lg:py-16">
        <div className="container px-4 lg:px-0">
          <div className="mb-6">
            <h2 className="text-gradient sticky mb-4 text-center text-3xl font-medium leading-normal lg:text-left lg:text-5xl">
              Roadmap
            </h2>
          </div>
          <div className="overflow-x-auto px-2 pt-20">
            <div className="flex">
              {roadmap.map((item, index) => (
                <div
                  key={`roadmap-item-${index}`}
                  className={`relative whitespace-nowrap pr-4 before:absolute before:-top-[58px] before:h-2.5 before:w-full last:pr-0 lg:w-1/4 lg:whitespace-normal ${
                    (item.done && "before:bg-primary") || "before:bg-white/50"
                  }`}
                >
                  <div
                    className={`absolute -top-16 -left-2 z-20 h-6 w-6 rounded-full bg-primary ${
                      (!item.done && "ring-8 ring-primary/30") || ""
                    }`}
                  ></div>
                  <div className="flex flex-col gap-4">
                    {item.steps.map((step, stepIndex) => (
                      <p
                        key={`step-${index}-${stepIndex}`}
                        className="font-medium"
                      >
                        {stepIndex + 1}. {step}
                      </p>
                    ))}
                    <p className="text-lg text-white/50">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
