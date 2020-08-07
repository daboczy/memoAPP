module.exports = {
    port: process.env.PORT || 5000,


    db:{
        user: 'admin',
        pwd: '3D1Xdo74Pjkd3Oha',
        dbName: 'memoapp',
        uri: `mongodb://admin:3D1Xdo74Pjkd3Oha@cluster0-shard-00-00.gdniq.gcp.mongodb.net:27017,cluster0-shard-00-01.gdniq.gcp.mongodb.net:27017,cluster0-shard-00-02.gdniq.gcp.mongodb.net:27017/memoapp?ssl=true&replicaSet=atlas-d236kf-shard-0&authSource=admin&retryWrites=true&w=majority`
    }
}