// import icons
import LogoImg from "../assets/svg/logo.svg";
import { ReactComponent as DownArrowIcon } from "../assets/svg/down-arrow.svg";
import { ReactComponent as MetamaskIcon } from "../assets/svg/metamask.svg";

import config from "../config";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";

const navigationLinks = [
  {
    name: "Website",
    href: "https://exzo.network",
    target: "_blank",
  },
  {
    name: "Whitepaper",
    href: "https://docs.exzo.technology",
    target: "_blank",
  },
  {
    name: "Block Explorer",
    href: "https://exzoscan.io",
    target: "_blank",
  },
  {
    name: "Audits",
    href: "https://docs.exzo.technology/links/smart-contract-audits",
    target: "_blank",
  },
];

const Navbar = () => {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  return (
    <div className="fixed z-50 hidden w-full bg-dark/70 backdrop-blur-xl lg:block">
      <div className="container px-4 lg:px-0">
        <div className="flex items-center justify-between gap-4 py-3">
          <a href="/">
            <img
              src={LogoImg}
              alt="logo"
              className="w-12/1 h-6 lg:h-6 lg:w-auto"
            />
          </a>
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold leading-6 transition-opacity duration-200 hover:opacity-75"
                    target={link.target}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 lg:mt-2">
            <button
              onClick={() => open({ route: "SelectNetwork" })}
              className="flex items-center gap-2 rounded-lg border border-gray-200/20 bg-gray-100/10 py-2.5 px-5 text-center text-sm font-semibold text-white hover:bg-gray-200 hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-100"
            >
              <img
                src={
                  config.chainImages[
                    (chain?.id || config.chains[0].id) as ChainId
                  ]
                }
                alt={chain?.name || config.chains[0].name}
                className="h-5 w-5"
              />
              <span className="hidden max-w-[7rem] truncate lg:block">
                {chain?.name || config.chains[0].name}
              </span>
              <DownArrowIcon className="hidden h-3 w-3 lg:inline" />
            </button>
            <button
              onClick={() => open()}
              className="glowing-wrapper-button glowing-wrapper-active flex items-center gap-2 rounded-md border border-gray-200/20 bg-gray-100/10 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-200 hover:text-black"
            >
              {isConnected ? (
                <span className="flex items-center justify-center text-center">
                  <span>
                    {address?.slice(0, 6)}...
                    <span className="hidden lg:inline">
                      {address?.slice(address.length - 6, address.length)}
                    </span>
                  </span>
                </span>
              ) : (
                <span className="flex items-center justify-center gap-2 text-center">
                  <MetamaskIcon className="h-5 w-5" />
                  <span className="hidden lg:inline">Connect your wallet</span>
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="h-px bg-gradient-to-r from-white/0 to-white/20" />
    </div>
  );
};

export default Navbar;
