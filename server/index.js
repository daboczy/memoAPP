const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const config = require('./config/config')
const posts = require("./routes/api/posts")

const app = express()

//middleware
app.use(bodyParser.json())
app.use(cors())
app.use('/api/posts', posts)


//Handle production
if (process.env.NODE_ENV === 'production'){
    //static built folder
    app.use(express.static(__dirname + '/public'))

    //handle spa
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}





// //
// app.use( (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header(
//         'Access-Control-Allow-Headers',
//         'Origin, X-Requested-With, Content-Type, Accept, Authorization'
//     )
    
//     if ( req.method === 'OPTIONS' ){
//         res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
//         return res.status(200).json({})      
//     }

//     next()
// } )



//listener
app.listen(config.port, () => console.log(`Server started on port ${config.port}`))



