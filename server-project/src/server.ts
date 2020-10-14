import express from 'express';

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    return res.json({msg: 'hello'});
})

app.listen(3333);

