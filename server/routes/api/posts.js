const express = require("express")
const mongodb= require("mongodb")
const {MongoClient}= require("mongodb")
const config = require('../../config/config')


const router = express.Router()


//get posts
//be careful! because of in index.js code: app.use('/api/posts', posts), de get('/') means /api/posts
router.get('/', async (req, res) => {
    const posts = await loadPostCollection()
    const postToArray = await posts.find().toArray()
    res.send(postToArray)
})



//add posts
router.post('/', async (req, res) => {
    const posts = await loadPostCollection()
    await posts.insertOne({
        text: req.body.text,
        createAt: new Date()
    })
    //console.log(req.body.text)
    res.status(201).send()
})



//delete posts
router.delete('/:id', async (req, res) => {
    const posts = await loadPostCollection()
    await posts.deleteOne({
        _id: new mongodb.ObjectID(req.params.id)
    })
    res.status(200).send()
} )





//connetct & load fnc
async function loadPostCollection(){
    const uri = config.db.uri
    const client = new MongoClient(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true            //without this params, post methods won't work
    });
    client.connect(client)
    return client.db('memoapp').collection('posts')
}


module.exports = router
