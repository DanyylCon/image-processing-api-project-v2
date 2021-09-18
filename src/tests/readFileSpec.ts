import readFile from '../readFile';

const testPath = `${process.cwd()}/src/tests/test.jpg`;

describe('Test file reads to be truthy or falsy depending on path', () => {
    it('expect read file from test path to be truthy', async () => {
        const myFile = await readFile(testPath);
        expect(myFile).toBeTruthy();
    });
    it('expect read file from empty path to be falsy', async () => {
        const myFile = await readFile('');
        expect(myFile).toBeFalsy();
    });
});
