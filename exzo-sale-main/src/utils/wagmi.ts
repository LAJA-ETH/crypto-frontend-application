import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";

import { configureChains, createClient } from "wagmi";
import config from "../config";

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID;
// Wagmi client
const { provider } = configureChains(config.chains, [
  w3mProvider({ projectId }),
]);

export const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains: config.chains }),
  provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, config.chains);
