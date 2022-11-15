import axios from "axios";
const coinGecko_GetCurrentData_API = "https://api.coingecko.com/api/v3/coins/"


const DetailsController = (app) => {

    function getCoinData(req, res) {
        const query = req.query.coinID;

        // Temporarily set the local to en
        axios.get(`${coinGecko_GetCurrentData_API}${query}?localization=false`)
            .then((response) => {
                res.json(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    app.get("/detail/getCoinData", getCoinData);


}

export default DetailsController;