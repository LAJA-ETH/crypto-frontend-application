import { bsc, bscTestnet, goerli, mainnet } from "wagmi/chains";

export const SUPPORTED_CHAINS = [mainnet.id, bsc.id];

export type SupportedChainIds = typeof SUPPORTED_CHAINS;
export type SupportedChainId = (typeof SUPPORTED_CHAINS)[number];

const config = {
  chains: [mainnet, bsc],
  chainImages: {
    [mainnet.id]: "/img/chains/eth.png",
    [bsc.id]: "/img/chains/bsc.svg",
  },
  defaultChainId: bsc.id as 56,
  price: 0.06,
  phases: [{ price: 0.06, tokensForSale: 30_000_000, endTime: 1699151127 }],

  presaleContract: {
    [mainnet.id]: "0xa7BfCd517028f8aE675Be71600d79f19FAaa689e",
    [bsc.id]: "0x076224cC4b17C1A17bDEa8eE484e109E8C2AfF9D",
  }, // presale contract address

  saleToken: {
    [mainnet.id]: {
      address: "0xF1442f48C684c03FdB3936e2b168228293f970AA", // token address
      symbol: "XZO", // token symbol
      name: "XZO", // token name
      image: "/img/tokens/yap.png", // token image
      decimals: 18, // token decimals
    },
    [bsc.id]: {
      address: "0x3C28d62F85a3E1404308CF049b286F691F6bD4a8", // token address
      symbol: "XZO", // token symbol
      name: "XZO", // token name
      image: "/img/tokens/yap.png", // token image
      decimals: 18, // token decimals
    },
  },

  displayPrice: {
    [bscTestnet.id]: "USDT",
    [bsc.id]: "USDT",
    [mainnet.id]: "USDT",
    [goerli.id]: "USDT",
  },

  ChainId: {
    [bsc.id]: "56",
    [mainnet.id]: "1",
  },

  extraSoldAmount: 0,

  whitelistedTokens: {
    [mainnet.id]: [
      {
        address: null,
        symbol: "ETH",
        name: "ETH",
        image: "/img/tokens/eth.svg",
        decimals: 18,
      },
      {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        symbol: "USDT",
        name: "Tether USD",
        image: "/img/tokens/usdt.svg",
        decimals: 18,
      },
      {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        symbol: "USDC",
        name: "USD Coin",
        image: "/img/tokens/usdc.svg",
        decimals: 18,
      },
    ] as Token[],
    [bsc.id]: [
      {
        address: null,
        symbol: "BNB",
        name: "Binance Token",
        image: "/img/tokens/bnb.svg",
        decimals: 18,
      },
      // {
      //   address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      //   symbol: "ETH",
      //   name: "Ethereum Token",
      //   image: "/img/tokens/eth.svg",
      //   decimals: 18,
      // },
      {
        address: "0x55d398326f99059fF775485246999027B3197955",
        symbol: "USDT",
        name: "Binance-Peg USD",
        image: "/img/tokens/usdt.svg",
        decimals: 18,
      },
      {
        address: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
        symbol: "BUSD",
        name: "Binance-Peg BUSD Token",
        image: "/img/tokens/busd.webp",
        decimals: 18,
      },
      {
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        symbol: "USDC",
        name: "Binance-Peg USD Coin",
        image: "/img/tokens/usdc.webp",
        decimals: 18,
      },
    ] as Token[],
  },
};

export default config;

export const navigationLinks = [
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
