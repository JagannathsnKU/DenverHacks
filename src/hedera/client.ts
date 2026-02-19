import { Client, PrivateKey, AccountId } from "@hashgraph/sdk";
import { config } from "@/config";
import pino from "pino";

const logger = pino();

let hederaClient: Client | null = null;

export function initializeHederaClient(): Client {
  if (hederaClient) return hederaClient;

  try {
    // Hedera Client.forNetwork() expects a network name string like "mainnet" or "testnet"
    const networkName = config.HEDERA_NETWORK === "mainnet" ? "mainnet" : "testnet";
    hederaClient = Client.forNetwork({ [networkName]: networkName }) as any;

    if (!hederaClient) {
      throw new Error("Failed to create Hedera client");
    }

    const operatorId = AccountId.fromString(config.HEDERA_ACCOUNT_ID);
    let operatorKey: PrivateKey;

    // Try to parse as DER first, fall back to hex string
    try {
      operatorKey = PrivateKey.fromStringDer(config.HEDERA_PRIVATE_KEY);
    } catch {
      // If DER parsing fails, try hex string (without 0x prefix)
      const hexKey = config.HEDERA_PRIVATE_KEY.replace(/^0x/, "");
      operatorKey = PrivateKey.fromString(hexKey);
    }

    hederaClient.setOperator(operatorId, operatorKey);

    logger.info(
      {
        operatorId: config.HEDERA_ACCOUNT_ID,
        network: networkName,
      },
      "Hedera client initialized"
    );

    return hederaClient!;
  } catch (error) {
    logger.error({ error }, "Failed to initialize Hedera client");
    // Return a dummy client that won't crash the server
    const networkName = config.HEDERA_NETWORK === "mainnet" ? "mainnet" : "testnet";
    hederaClient = Client.forNetwork({ [networkName]: networkName }) as any;
    return hederaClient!;
  }
}

export function getHederaClient(): Client {
  if (!hederaClient) {
    return initializeHederaClient();
  }
  return hederaClient;
}

export async function closeHederaClient(): Promise<void> {
  if (hederaClient) {
    await hederaClient.close();
    hederaClient = null;
    logger.info("Hedera client closed");
  }
}

export function getOperatorAccountId(): string {
  return config.HEDERA_ACCOUNT_ID;
}

export function getOperatorPrivateKey(): string {
  return config.HEDERA_PRIVATE_KEY;
}

export function getAgentTokenId(): string {
  return config.HEDERA_AGENT_TOKEN_ID;
}

export function getUCPRegistryTopic(): string | undefined {
  return config.HEDERA_UCP_REGISTRY_TOPIC;
}
