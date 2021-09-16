import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Home page is working');
});

app.listen(port, () => {
    console.log(`Server is has started on port ${port}`);
});
