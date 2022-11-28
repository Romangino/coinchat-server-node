import express from 'express'; // load express
import cors from 'cors';
import SearchController from "./controllers/search-page-controllers/search-controller.js";
import DetailsController from "./controllers/detail-page-controllers/coin-details-controller.js";
import MarketChartController from "./controllers/detail-page-controllers/coin-market-controller.js";


const app = express();

app.use(cors());
app.use(express.json());

app.get('/hello',(req, res) =>  // respond HTTP GET
    res.send('hello world'));      // "hello world"

SearchController(app);
DetailsController(app);
MarketChartController(app);

app.listen(process.env.PORT || 4000);