import mongoose from "mongoose";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const log = (msg) => {
    fs.appendFileSync("db_test_output.txt", msg + "\n");
    console.log(msg);
};

const testConnection = async () => {
    log("Starting DB Connection Test...");
    const uri = process.env.MONGO_URI;

    if (!uri) {
        log("ERROR: MONGO_URI is missing in .env");
        process.exit(1);
    }

    // Masked URI for logging
    log(`URI found: ${uri.substring(0, 20)}...`);

    try {
        await mongoose.connect(uri);
        log("SUCCESS: Connected to MongoDB Atlas!");
        await mongoose.connection.close();
        log("Connection closed.");
    } catch (error) {
        log(`ERROR: Connection failed.`);
        log(`Error Name: ${error.name}`);
        log(`Error Message: ${error.message}`);
        if (error.codeName) log(`CodeName: ${error.codeName}`);
    }
};

testConnection();
