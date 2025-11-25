const { Client } = require('pg');
require('dotenv').config();

async function testConnection() {
  console.log("Testing connection to database...");
  
  // Parse the DATABASE_URL to get the config
  // We want to force using the PUBLIC IP if possible to simulate Vercel
  // But for now let's just use what's in the .env file
  const connectionString = process.env.DATABASE_URL;

  if (!connectionString) {
    console.error("❌ Error: DATABASE_URL is missing in .env file");
    return;
  }

  console.log(`Target: ${connectionString.split('@')[1]}`); // Log host only for privacy

  const client = new Client({
    connectionString: connectionString,
    ssl: connectionString.includes('sslmode=no-verify') ? { rejectUnauthorized: false } : false
  });

  try {
    await client.connect();
    console.log("✅ SUCCESS: Connected to database successfully!");
    const res = await client.query('SELECT NOW()');
    console.log("Server Time:", res.rows[0].now);
    await client.end();
  } catch (err) {
    console.error("❌ CONNECTION FAILED:", err.message);
    if (err.code === 'ECONNREFUSED') {
      console.log("\nPossible causes:");
      console.log("1. Port 5432 is not forwarded on the router.");
      console.log("2. Firewall is blocking port 5432.");
      console.log("3. Postgres is not listening on 0.0.0.0.");
    }
  }
}

testConnection();
