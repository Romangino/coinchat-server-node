let coins =[
    {
        "_id": "123",
        "name":"Bitcoin",
        "thumb":"https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png",
        "large": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png"
    },

    {
        "_id": "124",
        "name":"Ethereum",
        "thumb":"https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
        "large": "https://assets.coingecko.com/coins/images/279/large/ethereum.png"
    }



]



const HomeController = (app) => {
    const getTrendingCoins = (req, res) => {
        res.send(coins)
    }
    app.get("/api/home/coins", getTrendingCoins)

}
export default HomeController