import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-verify";

import dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    "version": "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  networks: {
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
    baseSepolia: {
      url: `https://base-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGON_ETHERSCAN_API_KEY,

    customChains: [
      {
        chainId: 80001,
        network: "mumbai",
        urls: {
          apiURL: `https://api-mumbai.polygonscan.com/api`,
          browserURL: `https://mumbai.polygonscan.com`,
        },
      },
      {
        chainId: 84532,
        network: "baseSepolia",
        urls: {
          apiURL: `https://api-sepolia.basescan.org/api`,
          browserURL: `https://sepolia.basescan.org`,
        },
      },
    ],
  },
};

export default config;