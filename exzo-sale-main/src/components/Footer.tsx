import { ReactComponent as ArrowTrunDown } from "../assets/svg/arrow-turn-down.svg";
// import logo
import LogoImg from "../assets/svg/logo.svg";
import { ReactComponent as TwitterIcon } from "../assets/svg/twitter2.svg";
import { ReactComponent as TelegramIcon } from "../assets/svg/telegram2.svg";
import { ReactComponent as GithubIcon } from "../assets/svg/github2.svg";
import { ReactComponent as MediumIcon } from "../assets/svg/medium2.svg";
import { ReactComponent as CoinmarketcapIcon } from "../assets/svg/coinmarketcap2.svg";

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/exzo_network",
    icon: <TwitterIcon className="h-12 w-12 lg:h-32 lg:w-12" />,
  },
  {
    name: "Telegram",
    href: "https://t.me/Exzo_Network",
    icon: <TelegramIcon className="h-12 w-12 lg:h-32 lg:w-12" />,
  },
  {
    name: "CoinMarketCap",
    href: "https://coinmarketcap.com/currencies/exzo-network/",
    icon: <CoinmarketcapIcon className="h-12 w-12 lg:h-32 lg:w-12" />,
  },
  {
    name: "Medium",
    href: "https://exzonetwork.medium.com/",
    icon: <MediumIcon className="h-12 w-12 lg:h-32 lg:w-12" />,
  },
  {
    name: "GitHub",
    href: "https://exzonetwork.medium.com/",
    icon: <GithubIcon className="h-12 w-12 lg:h-32 lg:w-12" />,
  },
];

const Footer = () => {
  return (
    <footer className="dark:backdrop-blur/10 dark:bg-stone-900/30">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-16">
        <div className="md:flex md:justify-between">
          <div className="mb-12">
            <a href="/">
              <img src={LogoImg} alt="logo" className="h-6 w-auto" />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Resources
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://exzo.network" className="hover:underline">
                    Website
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://docs.exzo.technology"
                    className="hover:underline"
                  >
                    Whitepaper
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://exzoscan.io/?cluster=testnet"
                    className="hover:underline"
                  >
                    Native Explorer
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://evm-testnet.exzoscan.io/"
                    className="hover:underline"
                  >
                    EVM Explorer
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Follow us
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://twitter.com/exzo_network"
                    className="hover:underline "
                  >
                    Twitter
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://t.me/Exzo_Network"
                    className="hover:underline "
                  >
                    Telegram
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://github.com/ExzoNetwork"
                    className="hover:underline "
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/43XSFu5mH7"
                    className="hover:underline"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                Legal
              </h2>
              <ul className="font-medium text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.exzo.network/privacy-policy"
                    className="hover:underline"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.exzo.technology/policies-and-disclaimers/disclaimer"
                    className="hover:underline"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
            © 2023{" "}
            <a href="https://Exzo.network" className="hover:underline">
              Exzo Network™
            </a>
            . All Rights Reserved.
          </span>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a
              href="https://exzonetwork.medium.com/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Medium page</span>
            </a>
            <a
              href="https://twitter.com/Exzo_Network"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://github.com/ExzoNetwork/"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
