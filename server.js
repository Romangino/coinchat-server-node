import express from 'express'; // load express
import cors from 'cors';
import SearchController from "./Controller/SearchPageControllers/SearchController.js";
import DetailsController from "./Controller/DetailPageControllers/CoinDetailsController.js";
import MarketChartController from "./Controller/DetailPageControllers/CoinMarketController.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello',(req, res) =>  // respond HTTP GET
    res.send('hello world'));      // "hello world"

SearchController(app);
DetailsController(app);
MarketChartController(app);

app.listen(process.env.PORT || 4000);