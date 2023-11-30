import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import FarmsImg from "../../assets/img/farms.png";
import SwappingImg from "../../assets/img/swapping.png";
import LunchpadImg from "../../assets/img/launchpad.png";

import { ReactComponent as ArrowDownIcon } from "../../assets/svg/arrow-down.svg";
import { useState } from "react";
import FadeInBlur from "../animations/FadeInBlur";

const UtilitySection = () => {
  const swapFaq = [
    {
      title: "Decentralized Exchange",
      content:
        "XZOwap is a decentralized exchange that allows users to swap tokens on the Binance Smart Chain.",
    },
    {
      title: "Low Fees",
      content:
        "XZOwap is a decentralized exchange that allows users to swap tokens on the Binance Smart Chain.",
    },
    {
      title: "Wide Range of Tokens",
      content:
        "XZOwap is a decentralized exchange that allows users to swap tokens on the Binance Smart Chain.",
    },
    {
      title: "Community-Driven",
      content:
        "XZOwap is a decentralized exchange that allows users to swap tokens on the Binance Smart Chain.",
    },
  ];
  const [activeFaq, setActiveFaq] = useState<number | undefined>(0);
  return (
    <section id="utility" className="overflow-hidden py-12 lg:py-24">
      <div className="container items-center  px-4 lg:gap-32 lg:px-0">
        <FadeInBlur>
          <h2 className="mb-6 bg-gradient-to-b from-[#F320D8] to-[#16A6EE] bg-clip-text text-center text-3xl font-medium leading-snug text-transparent lg:mb-12 lg:text-5xl">
            Utility
          </h2>
        </FadeInBlur>
        <div className="flex flex-col items-center gap-16 py-6 lg:flex-row lg:py-12">
          <FadeLeft className="order-last mt-12 w-full lg:order-first lg:mt-24 lg:w-7/12">
            <div className="relative rounded-3xl border-2 border-white/20 bg-[#14181C]/30 px-2 pb-8 backdrop-blur-2xl transition-all duration-200 hover:border-primary lg:mx-4 lg:px-12 lg:pb-16">
              <img
                src={SwappingImg}
                alt="about-img"
                className="-mt-12 h-auto max-w-full lg:-mt-24"
              />
            </div>
          </FadeLeft>
          <FadeRight className="w-full lg:w-5/12">
            <h4 className="mb-6 bg-gradient-to-b from-[#F320D8] to-[#16A6EE] bg-clip-text text-2xl font-medium leading-snug text-transparent lg:text-4xl">
              Swapping on XZOwap
            </h4>
            <p className="mb-6">
              XZOwap is a decentralized exchange that allows users to swap
              their tokens quickly and easily. In this guide, we'll show you how
              to swap your tokens on XZOwap and the benefits of using this
              platform.
            </p>
            <div className="flex flex-col gap-4">
              {swapFaq.map((faq, index) => (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-lg border-2 border-white/20 bg-[#14181C]/30 backdrop-blur-2xl"
                >
                  <div
                    className="flex cursor-pointer items-center justify-between px-5 py-5 transition-all duration-300 hover:bg-primary"
                    onClick={() => setActiveFaq(index)}
                  >
                    <h5 className="text-lg font-medium lg:text-xl">
                      {faq.title}
                    </h5>
                    <ArrowDownIcon
                      className={`transition-all ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {activeFaq === index && (
                    <p className={`border-t-2 border-white/20 px-5 py-3`}>
                      {faq.content}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeRight>
        </div>

        <div className="flex flex-col items-center gap-16 py-6 lg:flex-row lg:py-12">
          <FadeLeft className="w-full lg:w-5/12">
            <h4 className="mb-6 bg-gradient-to-b from-[#F320D8] to-[#16A6EE] bg-clip-text text-2xl font-medium leading-snug text-transparent lg:text-4xl">
              Yield Farming
            </h4>
            <p>
              As a DeFi platform, XZOwap relies heavily on liquidity for its
              healthy ecosystem. More liquidity means more opportunities for
              users to trade their favorite tokens at low fees. To encourage
              liquidity for popular trading pairs, XZOwap has introduced Yield
              Farms that incentivize users to provide liquidity for their
              favorite projects.
            </p>
          </FadeLeft>
          <FadeRight className="mt-12 w-full lg:mt-24 lg:w-7/12">
            <div className="relative rounded-3xl border-2 border-white/20 bg-[#14181C]/30 px-2 pb-8 backdrop-blur-2xl transition-all duration-200 hover:border-primary lg:mx-4 lg:px-12 lg:pb-16">
              <img
                src={FarmsImg}
                alt="about-img"
                className="-mt-12 h-auto max-w-full lg:-mt-24"
              />
            </div>
          </FadeRight>
        </div>
        <div className="flex flex-col items-center gap-16 py-6 lg:flex-row lg:py-12">
          <FadeLeft className="order-last mt-12 w-full lg:order-first lg:mt-24 lg:w-7/12">
            <div className="relative rounded-3xl border-2 border-white/20 bg-[#14181C]/30 px-2 pb-8 backdrop-blur-2xl transition-all duration-200 hover:border-primary lg:mx-4 lg:px-12 lg:pb-16">
              <img
                src={LunchpadImg}
                alt="about-img"
                className="-mt-12 h-auto max-w-full lg:-mt-24"
              />
            </div>
          </FadeLeft>
          <FadeRight className="w-full lg:w-5/12">
            <h4 className="mb-6 bg-gradient-to-b from-[#F320D8] to-[#16A6EE] bg-clip-text text-2xl font-medium leading-snug text-transparent lg:text-4xl">
              Pools on XZOwap
            </h4>
            <p className="mb-4 font-medium text-primary lg:text-lg">
              Unlock the power of passive income with XZOwap Pools!
            </p>
            <p>
              By staking just one token, you can effortlessly earn $XZO or
              other tokens while you sleep, freeing up your time for the things
              that matter most to you. No more complex farming strategies,
              XZOwap Pools make it simple and accessible for anyone to start
              earning.
            </p>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default UtilitySection;
