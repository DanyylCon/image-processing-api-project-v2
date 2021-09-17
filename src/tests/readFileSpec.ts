import readFile from "../readFile";

const testPath = `${process.cwd()}/src/tests/test.jpg`;

it('expect read file from test path to be truthy', async () => {
    const myFile = await readFile(testPath);
    expect(myFile).toBeTruthy();
});