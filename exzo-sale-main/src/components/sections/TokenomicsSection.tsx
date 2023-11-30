import TokenomicsImg from "../../assets/img/tokenomics.png";
import FadeInBlur from "../animations/FadeInBlur";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";

const TokenomicsSection = () => {
  const tokenomics = [
    {
      title: "Token sale",
      bgColor: "bg-[#76FF9C]",
    },
    {
      title: "Liquidity",
      bgColor: "bg-[#FFA723]",
    },
    {
      title: "Partnership",
      bgColor: "bg-[#243192]",
    },
    {
      title: "Marketing and Advertising",
      bgColor: "bg-[#A78DF5]",
    },
    {
      title: "Development",
      bgColor: "bg-[#F5DC87]",
    },
    {
      title: "Future Burn Events",
      bgColor: "bg-[#ED7789]",
    },
  ];
  return (
    <section id="tokenomics" className="overflow-hidden py-12 lg:py-24">
      <div className="container px-4 lg:px-0">
        <FadeInBlur>
          <h2 className="text-gradient mb-12 text-center text-3xl font-medium leading-normal lg:mb-24 lg:text-5xl">
            Tokenomics
          </h2>
        </FadeInBlur>
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <FadeLeft className="order-last w-full lg:order-first lg:w-1/2">
            <img
              src={TokenomicsImg}
              alt="Tokenomics"
              className="mx-auto w-full"
            />
          </FadeLeft>
          <FadeRight className="flex w-full items-center justify-center lg:w-1/2">
            <ul className="flex flex-col gap-6 lg:gap-12">
              {tokenomics.map((item, key) => (
                <li key={key} className="flex items-center gap-6">
                  <span
                    className={`h-6 w-6 rounded-full ${item.bgColor}`}
                  ></span>
                  <span className="text-lg font-medium lg:text-2xl">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
