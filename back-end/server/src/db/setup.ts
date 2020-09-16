import fs from "fs";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";

// Data for seeding
import { data } from "../seeds/user.seed";

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
  collection.insertMany(data, (rej: any) => rej);

  const collections = mongoose.connection.collections;
  fs.readdirSync("./server/src/seeds/")
    .map(fileName => {
      const collectionName = fileName.split(".")[0];
      const e = fs.readFileSync(`./server/src/${fileName}`, {encoding:'utf8'})
      // .then((e: any) => {
        // console.log(2,e);
      // })
      
      // collections[collectionName].insertMany(data, (rej: any) => rej && console.error(rej.toString()));  
    })

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
