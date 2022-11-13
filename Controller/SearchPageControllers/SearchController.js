import axios from "axios";
const coinGeckoSearch_API = "https://api.coingecko.com/api/v3/search?query="



const SearchController = (app) => {

    function searchCoinGecko(req, res) {
        const query = req.query.query;
        axios.get(`${coinGeckoSearch_API}${query}`)
            .then((response) => {
                res.json(response.data.coins);
            })
            .catch(error => {
                console.log(error);
            });
    }

    app.get("/search/coinSearch", searchCoinGecko);


}

export default SearchController;