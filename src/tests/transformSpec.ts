import transform from "../transform";
const testFilePath = `${process.cwd()}/src/tests/test.jpg`;
const testWidth = 200;
const testHeight = 200;
const testThumbPath = `${process.cwd()}/src/tests/testThumb.jpg`;

describe("Test the transform function to throw or not to throw error based on params",  () => {

    it('expect transform to not throw error with correct path and parameters', async () => {

        expect(async () => {
            await transform(testFilePath, testWidth, testHeight, testThumbPath);
        }).not.toThrow();

    });
    it('expect transform to throw error with incorrect parameters', async () => {

        const myPromise = new Promise(async (resolve, reject) => {
            await transform('wrongpath', testWidth, testHeight, testThumbPath);
          });
        expectAsync(myPromise).toBeRejected();     

    });
});
