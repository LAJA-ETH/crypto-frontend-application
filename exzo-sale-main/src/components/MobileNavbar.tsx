import LogoImg from "../assets/img/logo-only.svg";
import { ReactComponent as WalletIcon } from "../assets/svg/wallet.svg";
import { ReactComponent as MenuIcon } from "../assets/svg/menu.svg";
import { ReactComponent as CloseIcon } from "../assets/svg/close.svg";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import config, { navigationLinks } from "../config";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount, useNetwork } from "wagmi";
import { ReactComponent as DownArrowIcon } from "../assets/svg/down-arrow.svg";

const MobileNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  return (
    <div className="fixed z-50 block w-full bg-dark/70 backdrop-blur-xl lg:hidden">
      <div
        className={`container flex flex-col border-b border-[#7b60fd]/20 transition-all duration-500 ${
          isMenuOpen ? "h-screen" : "h-16"
        }`}
      >
        <div className={`flex items-center justify-between px-5 py-3`}>
          <div
            className="text-solid-bright-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          <a href="/" className="absolute left-1/2 -translate-x-1/2">
            <img src={LogoImg} alt="logo" className="h-10 max-w-full lg:h-16" />
          </a>
          <button
            onClick={() => open()}
            className="glowing-wrapper-button glowing-wrapper-active flex items-center gap-2 rounded-md border border-gray-200/20 bg-gray-100/10 py-2 px-4 text-sm font-semibold text-white transition-opacity duration-200 hover:bg-gray-200 hover:text-black hover:opacity-75 lg:py-4 lg:text-base"
          >
            {isConnected ? (
              <span className="flex items-center justify-center gap-2">
                <span>
                  {address?.slice(0, 6)}...
                  <span className="hidden lg:inline">
                    {address?.slice(address.length - 6, address.length)}
                  </span>
                </span>
              </span>
            ) : (
              <>
                <WalletIcon className="h-6 w-6" />
              </>
            )}
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, flexGrow: 0 }}
              animate={{ opacity: 1, flexGrow: 1 }}
              exit={{ opacity: 0, flexGrow: 0, transition: { delay: 0 } }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col items-center justify-between gap-4 py-6 px-5"
            >
              <nav>
                <ul className="flex flex-col items-center justify-center gap-4">
                  {navigationLinks.map((link, index) => (
                    <li key={`main-${index}`}>
                      <a
                        href={link.href}
                        className="flex items-center gap-2 text-lg transition-all duration-300 hover:text-white"
                        target={link.target}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                  <li>
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
                      <span className="max-w-[7rem] truncate">
                        {chain?.name || config.chains[0].name}
                      </span>
                      <DownArrowIcon className="h-3 w-3" />
                    </button>
                  </li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default MobileNavbar;
