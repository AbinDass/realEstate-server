import express from "express";
import postRoute from './routes/post.route.js'
import authRoute from './routes/auth.route.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/posts', postRoute)
app.use('/api/auth', authRoute)

app.listen(8000, () => {
    console.log(`server is running at 8000`);
});
