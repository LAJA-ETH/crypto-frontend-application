import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import AboutImg from "../../assets/img/about.png";

const AboutSection = () => {
  return (
    <section id="about" className="overflow-hidden py-12">
      <div className="container items-center px-4 lg:gap-32 lg:px-0">
        <div className="mb-20 h-px bg-gradient-to-r from-white/20 to-white/0" />
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <FadeLeft className="order-last w-full lg:order-first lg:w-1/2">
            <img src={AboutImg} alt="about-img" className="h-auto max-w-full" />
          </FadeLeft>
          <FadeRight className="w-full lg:w-1/2">
            <h4 className="mb-6 bg-gradient-to-b from-[#F320D8] to-[#16A6EE] bg-clip-text text-3xl font-medium leading-snug text-transparent lg:text-5xl">
              INOVATIVE AI POWERED DEFI PLATEFORM
            </h4>
            <p className="mb-6">
              In the fast-paced world of decentralized finance (DeFi), speed and
              precision are everything. That's why XZOwap has developed an
              innovative, AI-powered platform that promises to revolutionize the
              way you own your trade.
            </p>
            <p>
              Our AI-powered swapping feature allows you to exchange one
              cryptocurrency for another quickly and easily, with low fees and
              high liquidity. And with our advanced trading tools, you can
              analyze market trends and make informed decisions about your
              assets with confidence.
            </p>
          </FadeRight>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
