import fs from "fs";
import mongoose from "mongoose";

const url = "mongodb://localhost:27017/culture_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect(url, options)
	.catch((e: any) => console.error(e.message))
	.then(() => clearDatabase())
	.then(() =>	seedDatabase());

// // Clear collection first, whilst on local server

// // Add initial data to collections

export const db = mongoose.connection;

export default db;

const clearDatabase = async () => {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({}, (rej: any) => rej && console.error(rej.toString()));
  }
};

/**
 * Seed user data for user db collection.
 */
const seedDatabase = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  // console.log(2, collections);
  const path = "./server/src/seeds/";
  fs.readdirSync(path)
    .map(fileName => {
      // TODO: Use REGEX to find a relative '.seed' file for each collection.
      const fileNameNoExtension = fileName.split(".")[0];
      collections.map(collectionName => {
        if(fileNameNoExtension === collectionName) {
          // Data for seeding
          const data = fs.readFileSync(`${path}/${fileName}`, {encoding:'utf8'})
          if (typeof data === "string") {
            const d = JSON.parse(data).data;           
            mongoose.connection.collections[fileNameNoExtension].insertMany(d, 
              (rej: any) => rej && console.error(rej.toString()));  
          }
        }
      })
    })
};