import express from 'express';
import sharp from 'sharp';
import checkFile from './checkFile';

const app = express();
const port = 3000;
const imgDir = `${process.cwd()}/src/images/`;
const thumbDir = `${process.cwd()}/src/images/thumbs/`;


app.get('/images', checkFile, async (req, res) => {
   try{             
        const imgObj = res.locals.imgObj;   
        await sharp(`${imgDir}${imgObj.filename}.jpg`)
                .resize({height: imgObj.height, width: imgObj.width})
                .toFile(`${thumbDir}${imgObj.thumbFile}`);

        res.sendFile(`${thumbDir}${imgObj.thumbFile}`);  
    }catch (err) {
        res.send(`Sorry there was an error: ${err}`);
    };
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});
