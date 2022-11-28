import axios from "axios";
const coinGecko_coinMarket_API = "https://api.coingecko.com/api/v3/coins/"


const MarketChartController =  (app) => {
    async function getCoinMC(req, res) {
        const coinID = req.query.coinID;

        // Temporarily set the local to en
        await axios.get(`${coinGecko_coinMarket_API}${coinID}/market_chart?vs_currency=usd&days=1`)
            .then((response) => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    app.get("/detail/getCoinMarketChart", getCoinMC);
}

export default MarketChartController;