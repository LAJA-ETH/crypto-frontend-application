import { ReactComponent as ArrowToRightIcon } from "../../assets/svg/arrow-to-right.svg";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import BuyForm from "../BuyForm";

const HeaderSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">

        <FadeRight className="relative flex w-full justify-center lg:w-2/2">
          {/* {!isPresaleStarted && (
            <div className="absolute inset-0 z-10 mx-auto max-w-lg gap-4 overflow-hidden rounded-3xl bg-black/10 backdrop-blur-md">
              <PresaleCountdown />
            </div>
          )} */}
          <BuyForm />
        </FadeRight>
      </div>
    </section>
  );
};

export default HeaderSection;
