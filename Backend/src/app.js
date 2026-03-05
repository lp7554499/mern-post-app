const express = require('express')
const app = express()
const multer  = require('multer')
const uploadFile = require('./services/storage.service')
const postModel = require('./models/post.model')
const cors = require('cors')


app.use(cors())
app.use(express.json())
const upload = multer({ storage: multer.memoryStorage() })

app.post('/create-post', upload.single('image'), async(req,res)=>{
    const result = await uploadFile(req.file.buffer)
    
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    return res.status(201).json({
        message: "Post Created succesfully",
        post
    })
})

app.get('/posts',async(req,res)=>{
    const posts = await postModel.find()

    return res.status(200).json({
        message:"posts fetches succefully",
        posts
    })
})

module.exports = app
