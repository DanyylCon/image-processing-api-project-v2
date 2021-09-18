import express from 'express';
import sharp from 'sharp';
import readFile from './readFile';

const app = express();
const port = 3000;

const imgDir = `${process.cwd()}/src/images/`;
const thumbDir = `${process.cwd()}/src/images/thumbs/`;

app.use(express.static('src/images', {extensions: ['jpg', 'jpeg'], redirect: false, maxAge: '1d'}));

app.get('/', async (req, res) => {
    const url = req.query;
    const filename: string = `filename=${url.filename}&height=${url.height}&width=${url.width}.jpg`
    const height = parseInt(url.height as string);
    const width = parseInt(url.width as string);
    const html: string = `<img src="/thumbs/${filename}"/>`;
    const fileCheck = await readFile(`${thumbDir}${filename}`);

    if(fileCheck){
        res.send(html);
    }else{
        try{             
            await sharp(`${imgDir}${url.filename}.jpg`)
                    .resize(width, height)
                    .toFile(`${thumbDir}${filename}`);
            res.send(html);
        }catch (err) {
            res.send(`Sorry there was an error: ${err}`);
        };
    }
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
