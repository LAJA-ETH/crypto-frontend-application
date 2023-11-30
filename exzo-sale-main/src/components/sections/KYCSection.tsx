import CoinsniperKYCImg from "../../assets/img/coinsniper-kyc.png";
import TechauditImg from "../../assets/img/techaudit.png";
import FadeInBlur from "../animations/FadeInBlur";
import FadeUp from "../animations/FadeUp";
import { XMarkIcon } from "@heroicons/react/20/solid";

const KYCSection = () => {
  return (
    <section
      id="audit-kyc"
      className="overflow-hidden pt-12 sm:flex sm:justify-center sm:px-3 lg:px-4"
    >
      <div className="relative isolate flex items-center gap-x-1 overflow-hidden px-6 py-2.5 sm:px-3 sm:before:flex-1">
        <div className="pointer-events-auto flex items-center justify-between gap-x-3 bg-gray-900 px-6 py-2 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-4">
          <p className="text-sm leading-6 text-white">
            <a href="https://t.me/Exzo_Network/1">
              <strong className="font-semibold">Exzo Network</strong>
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-1.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              Join us on Telegram to see what’s coming next&nbsp;
              <span aria-hidden="true">&rarr;</span>
            </a>
          </p>
          <button type="button" className="-m-1.5 flex-none p-1.5">
            <span className="sr-only">Dismiss</span>
            <XMarkIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default KYCSection;
