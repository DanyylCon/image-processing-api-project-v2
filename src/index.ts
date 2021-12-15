import express from 'express';
import transform from './transform';
import path from 'path';

const app = express();
const port = 3000;

//make variables for the directories with original images and for thumbs
const imgDir = path.join(`${__dirname}/../src/images/`);
const thumbDir = path.join(`${__dirname}/../src/images/thumbs/`);

//let the built in express middleware knowry in which directory to look for static files
app.use(
    express.static('src/images', {
        extensions: ['jpg', 'jpeg'],
        redirect: false,
        maxAge: '1d',
    })
);

app.get('/', async (req, res) => {
    //from the query which contains file name, height and width, create the file name,
    //width and height. Then create the html image tag with that file name
    const url = req.query;
    const filename = `filename=${url.filename}&height=${url.height}&width=${url.width}.jpg`;
    const height = parseInt(url.height as string);
    const width = parseInt(url.width as string);
    const html = `<body><img src="/thumbs/${filename}"/></body>`;

    //call the transform function to create the thumb image or send the error
    // in the response
    try {
        if(url.filename !== undefined){    
            await transform(
                `${imgDir}${url.filename}.jpg`,
                width,
                height,
                `${thumbDir}${filename}`
            );
        }
    } catch (err) {
        return res.send(`Sorry, there was an error --> ${err}`);
    }
    res.send(html);
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});

export default app;
