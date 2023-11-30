import { ethereumClient } from "./utils/wagmi";
import { Web3Modal } from "@web3modal/react";

import { ReferralModalTarget } from "./components/ReferralModal";
import HeaderSection from "./components/sections/HeaderSection";
import Navbar from "./components/Navbar";
import RoadmapSection from "./components/sections/RoadmapSection";
import TokenomicsSection from "./components/sections/TokenomicsSection";
import Footer from "./components/Footer";
import { useEffect } from "react";
// import WebglFluidAnimation from "./components/WebglFluidAnimation";
import { SelectTokenModalTarget } from "./components/SelectTokenModal";
import { useAccount, useDisconnect, useNetwork, useSwitchNetwork } from "wagmi";
import { useDispatch } from "react-redux";
import { BuyWIthCardModalTarget } from "./components/BuyWithCardModal";
import config from "./config";
import AboutSection from "./components/sections/AboutSection";
import UtilitySection from "./components/sections/UtilitySection";
import KYCSection from "./components/sections/KYCSection";
import { setCurrentChain } from "./store/presale";
import MobileNavbar from "./components/MobileNavbar";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;

function App() {
  const { isConnected } = useAccount();
  const dispatch = useDispatch();
  const network = useSwitchNetwork();
  const { chain } = useNetwork();

  // const signIn = async () => {
  //   try {
  //     const { user } = await fetchReferralCode(address as string);
  //     dispatch(setUser({ ...user }));
  //   } catch (e) {
  //     console.log(e);
  //     useDisconnect();
  //   }
  // };

  // useEffect(() => {
  //   let newEvent: any;

  //   window.addEventListener("mousemove", (event: any) => {
  //     newEvent = new event.constructor(event.type, event);
  //   });

  //   document.addEventListener("mousemove", (event: any) => {
  //     if (event.isTrusted && newEvent) {
  //       document.getElementById("webgl-fluid")?.dispatchEvent(newEvent);
  //     }
  //   });
  // }, []);
  return (
    <>
      <Navbar />
      <MobileNavbar />
      <main id="main" className="z-10 flex flex-col pt-20 pb-0">
        <KYCSection />
        <HeaderSection />
        <Footer />
      </main>
      <SelectTokenModalTarget />
      <ReferralModalTarget />
      <BuyWIthCardModalTarget />
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        defaultChain={config.chains[0]}
      />
      {/* <WebglFluidAnimation /> */}
    </>
  );
}

export default App;
