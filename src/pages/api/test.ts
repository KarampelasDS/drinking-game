import { MongoClient } from "mongodb";

// API route handler function
export default async function handler(req, res) {
  // Check if the request method is GET
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Only GET requests allowed" });
  }

  const uri = process.env.MONGODB_URI;
  console.log(uri);
  // Connect to the MongoDB client using the connection string from environment variables
  const client = await MongoClient.connect(uri);
  const db = client.db();

  // Access the 'sales' collection in the database
  const gameCollection = await db.collection("blame");
  // Retrieve all documents from the 'sales' collection and convert them to an array
  const game = await gameCollection.find().toArray();

  // Close the MongoDB client connection
  client.close();

  // Send the retrieved documents as a JSON response
  res.status(200).json(game);
}
