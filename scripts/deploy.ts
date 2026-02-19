import { deployContract } from "@nomicfoundation/hardhat-viem/dist/src/types";
import hre from "hardhat";
import { writeFileSync, mkdirSync } from "fs";
import { resolve } from "path";

interface DeploymentConfig {
  [key: string]: {
    contracts: string[];
    relayerRequired: boolean;
  };
}

const deploymentConfig: DeploymentConfig = {
  baseSepolia: {
    contracts: ["ToolRegistry", "Escrow", "UsageLog"],
    relayerRequired: true,
  },
  kiteTestnet: {
    contracts: ["ToolRegistry", "Escrow"],
    relayerRequired: true,
  },
  zgTestnet: {
    contracts: ["AgentNFT"],
    relayerRequired: true,
  },
};

async function main() {
  const networkName = hre.network.name;
  const config = deploymentConfig[networkName];

  if (!config) {
    throw new Error(`Unsupported network: ${networkName}`);
  }

  console.log(`\n📦 Deploying to ${networkName}...`);

  const deployments: { [key: string]: string } = {
    network: networkName,
    deployedAt: new Date().toISOString(),
  };

  // Get relayer address from signer
  const [signer] = await hre.viem.getWalletClients();
  const relayerAddress = signer.account?.address;

  if (!relayerAddress) {
    throw new Error("Cannot determine relayer address from signer");
  }

  console.log(`🔐 Relayer address: ${relayerAddress}`);

  // Deploy ToolRegistry
  if (config.contracts.includes("ToolRegistry")) {
    console.log("\n📝 Deploying ToolRegistry...");
    const toolRegistry = await hre.viem.deployContract("ToolRegistry");
    console.log(`✅ ToolRegistry deployed at: ${toolRegistry.address}`);
    deployments.toolRegistry = toolRegistry.address;
  }

  // Deploy Escrow
  if (config.contracts.includes("Escrow")) {
    console.log("\n💰 Deploying Escrow...");
    const escrow = await hre.viem.deployContract("Escrow", [relayerAddress]);
    console.log(`✅ Escrow deployed at: ${escrow.address}`);
    deployments.escrow = escrow.address;

    // Update relayer if needed
    console.log(`📌 Escrow relayer set to: ${relayerAddress}`);
  }

  // Deploy UsageLog
  if (config.contracts.includes("UsageLog")) {
    console.log("\n📊 Deploying UsageLog...");
    const usageLog = await hre.viem.deployContract("UsageLog", [
      relayerAddress,
    ]);
    console.log(`✅ UsageLog deployed at: ${usageLog.address}`);
    deployments.usageLog = usageLog.address;
  }

  // Deploy AgentNFT
  if (config.contracts.includes("AgentNFT")) {
    console.log("\n🎭 Deploying AgentNFT...");
    const agentNFT = await hre.viem.deployContract("AgentNFT", [
      relayerAddress,
    ]);
    console.log(`✅ AgentNFT deployed at: ${agentNFT.address}`);
    deployments.agentNFT = agentNFT.address;
  }

  // Write deployments to file
  const deploymentsDir = resolve("deployments");
  mkdirSync(deploymentsDir, { recursive: true });

  const deploymentFile = resolve(
    deploymentsDir,
    `${networkName}.json`
  );
  writeFileSync(deploymentFile, JSON.stringify(deployments, null, 2));

  console.log(`\n📁 Deployments saved to: ${deploymentFile}`);
  console.log("\n✨ Deployment complete!");
  console.log("\nDeployment Summary:");
  console.log(JSON.stringify(deployments, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
