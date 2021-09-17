import {Request, Response, NextFunction } from 'express';
import readFile from './readFile';

const thumbDir = `${process.cwd()}/src/images/thumbs/`;

const checkFile = async (req: Request, res: Response, next: NextFunction) => {
    
    const params = req.query;
    const filename= (params.filename as string);
    const height = parseInt((params.height as string));
    const width = parseInt((params.width as string));
    const thumbFile = `${filename}h${height}w${width}.jpg`

    const myFile = await readFile(`${thumbDir}${thumbFile}`);

    if(myFile){
        console.log('sending from file');
        res.sendFile(`${thumbDir}${thumbFile}`);
    }else{
        res.locals.imgObj = {filename: filename, height: height, 
            width: width, thumbFile: thumbFile};
        next();
    }
}

export default checkFile;

