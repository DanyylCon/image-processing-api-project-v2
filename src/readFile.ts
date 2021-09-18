import {promises as fs} from 'fs'; 


const readFile = async (path: string): Promise<Buffer>  => {

    try{
        const myFile = await fs.readFile(path);
        return myFile;
    }catch(err){
        return (null as unknown as Promise<Buffer>);
    };
};


export default readFile;