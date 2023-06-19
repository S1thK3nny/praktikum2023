import { connect } from "mongoose";

const url = process.env.MONGO_URI;
console.log(process.env.MONGO_URI)
export const connectToMongo = async () => 
    connect(url || "")
    .then(result => console.log("Database connected!: connectToMongo.ts"))
    .catch(err => console.log("Database NOT connected!: connectToMongo.ts" + err));