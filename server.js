import express from 'express'; // load express
import cors from 'cors';
import mongoose from "mongoose";
import * as dotenv from 'dotenv'
import SearchController from "./controllers/search-page-controllers/search-controller.js";
import DetailsController from "./controllers/detail-page-controllers/coin-details-controller.js";
import MarketChartController from "./controllers/detail-page-controllers/coin-market-controller.js";
import WatchlistController from "./watchlists/watchlist-controller.js";

// Allows a .env file to be created to store environment variables
dotenv.config()

// Options for mongoDB
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
}
// build the connection string
const PROTOCOL = "mongodb+srv";
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const HOST = "cluster0.jinyli6.mongodb.net";
const DB_NAME = "coinchat";
const DB_QUERY = "retryWrites=true&w=majority";
const connectionString = `${PROTOCOL}://${DB_USERNAME}:${DB_PASSWORD}@${HOST}/${DB_NAME}?${DB_QUERY}`;
// connect to the database
mongoose.connect(connectionString, options);

const app = express();
app.use(cors());
app.use(express.json());

app.get('/hello',(req, res) =>  // respond HTTP GET
    res.send('hello world'));      // "hello world"

SearchController(app);
DetailsController(app);
MarketChartController(app);
WatchlistController(app)

app.listen(process.env.PORT || 4000);