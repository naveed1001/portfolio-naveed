import fs from "node:fs";
import path from "node:path";

interface MemoryServer {
  getUri: (dbName?: string) => string;
  stop: () => Promise<boolean>;
}

let memoryServer: MemoryServer | null = null;

/**
 * Returns the MongoDB connection string to use.
 *
 * In production MONGO_URI is set (Atlas, a managed cluster, a local mongod).
 * For local development we fall back to an on-demand MongoDB instance provided
 * by `mongodb-memory-server`, so the API runs without Docker or a system-wide
 * MongoDB install. Data is written to `server/.mongo-data` so it survives
 * restarts.
 */
const resolveMongoUri = async (): Promise<string> => {
  const configured = process.env.MONGO_URI?.trim();

  if (configured) {
    return configured;
  }

  const dbPath = path.resolve(__dirname, "../../.mongo-data");

  fs.mkdirSync(dbPath, { recursive: true });

  // Non-literal specifier keeps this dev-only dependency out of the
  // production type-check and build.
  const specifier = "mongodb-memory-server";

  let MongoMemoryServer;

  try {
    ({ MongoMemoryServer } = await import(specifier));
  } catch {
    throw new Error(
      "MONGO_URI is not set and the dev fallback is unavailable. " +
        "Either set MONGO_URI in server/.env or run: npm install --save-dev mongodb-memory-server"
    );
  }

  const server: MemoryServer = await MongoMemoryServer.create({
    instance: {
      dbName: "portfolio",
      dbPath,
      storageEngine: "wiredTiger",
    },
  });

  memoryServer = server;

  console.log(
    "MONGO_URI not set - started a local development MongoDB (data kept in server/.mongo-data)"
  );

  return server.getUri("portfolio");
};

const stopMemoryServer = async (): Promise<void> => {
  if (memoryServer) {
    await memoryServer.stop();

    memoryServer = null;
  }
};

export { resolveMongoUri, stopMemoryServer };
