import {promises as fs} from 'fs'; 

const readFile = async(path: string) => {
    try{
        const myFile = await fs.readFile(path);
        return myFile;
    }catch(err){
        return null;
    }
}

export default readFile;