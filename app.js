import express from "express";

const app = express();
console.log(`testing`);

app.post(`/`, (req, res) => {
    console.log(req.body);
    // let a = req.body;
    let sum = a + b;
    console.log(sum);
    res.send(`sum`);
});

app.listen(8000, () => {
    console.log(`server is running at 8000`);
});
