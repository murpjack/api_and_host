import mongoose from "mongoose";

const url = "mongodb://localhost:27017/user_test_db";
const options = { useNewUrlParser: true, useUnifiedTopology: true };

// Connect to MongoDB
mongoose.connect(url, options).catch((e: any) => console.error(e.message));

// // Clear collection first, whilst on local server

// // Add initial data to collections

export const db = mongoose.connection;

export default db;
