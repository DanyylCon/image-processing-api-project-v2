import transform from '../transform';

const testFilePath = `${__dirname}/test.jpg`;
const testWidth = 200;
const testHeight = 200;
const testThumbPath = `${__dirname}/testThumb.jpg`;

describe('Test the transform function to throw or not to throw error based on params',  () => {

    it('expect transform to not throw error with correct path and parameters', async () => {


        expect(async () => {
            await transform(testFilePath, testWidth, testHeight, testThumbPath);
        }).not.toThrow();

    });
    it('expect transform to throw error with incorrect parameters', async () => {

        const myPromise = transform('wrongpath', testWidth, testHeight, testThumbPath);
        await expectAsync(myPromise).toBeRejected();    

    });

});

