import sharp from 'sharp';

//using the sharp library we transform the image with the 
//parameters that the user entered in the query string
const transform = async (orgPath: string, width: number, 
                        height: number, thumbPath:string): Promise<void> => {
                            
        await sharp(orgPath).resize(width, height).toFile(thumbPath);
};

export default transform;