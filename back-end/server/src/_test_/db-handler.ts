import fs from "fs";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// import userModel from "../models";

const mongod = new MongoMemoryServer();

/**
 * Connect to the in-memory database.
 */
export const connect = async () => {
  const uri = await mongod.getConnectionString();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database, close the connection and stop mongod.
 */
export const closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
export const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({}, (rej: any) => rej && console.error(rej.toString()));
  }
};

/**
 * Seed user data for user db collection.
 */
export const seedDatabase = async () => {
  const collection = mongoose.connection.collections["users"];
  // TODO: Use fs and REGEX to find a relative '.seed' file for each collection.
  // collection.insertMany(data, (rej: any) => rej);

    const collections = mongoose.connection.collections;
    console.log(2, collections);
    fs.readdirSync("./server/src/seeds/")
      .map(fileName => {
        const collectionName = fileName.split(".")[0];
        // console.log(1,collectionName);

        // Data for seeding
        const data = fs.readFileSync(`./server/src/seeds/${fileName}`, {encoding:'utf8'})

        if (data && typeof data === "string") {
          const d = JSON.parse(data);
          collections[collectionName].insertMany(d.data, (rej: any) => rej && console.error(rej.toString()));  
        }
        
      });


};

export async function dropAllCollections() {
  const collections = Object.keys(mongoose.connection.collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    try {
      await collection.drop();
    } catch (error) {
      // Sometimes this error happens, but you can safely ignore it
      if (error.message === "ns not found") return;
      // This error occurs when you use it.todo. You can
      // safely ignore this error too
      if (error.message.includes("a background operation is currently running"))
        return;
    }
  }
}

export default {
  closeDatabase,
  seedDatabase,
  clearDatabase,
  dropAllCollections,
};
