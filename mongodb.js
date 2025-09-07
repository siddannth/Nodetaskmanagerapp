const { MongoClient } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

console.log('✅ Script started');

async function main() {
  const client = new MongoClient(connectionURL);

  try {
    await client.connect();
    console.log('✅ Connected to MongoDB');

    const db = client.db(databaseName);

    const result = await db.collection('users').insertOne({
      name: 'Siddhanth',
      age: 24
    });

    console.log('✅ Inserted document with ID:', result.insertedId);

  } catch (error) {
    console.error('❌ Error:', error);
  } finally {
    await client.close();
  }
}

main();
