import transform from '../transform';
import path from 'path';

//const testFilePath = path.join(`${__dirname}`,'..', '..', 'src', 'tests', 'test.jpg');
const testFilePath = path.join(`${__dirname}`, '../../src/images/testImg/test.jpg');
const testWidth = 200;
const testHeight = 200;
const testThumbPath = path.join(`${__dirname}`, '../../src/images/testImg/testThumb.jpg');

describe('Test the transform function', () => {
    it('expect transform function promise to not be rejected with correct params', async () => {
        await expectAsync(   
                transform(testFilePath, testWidth, testHeight, testThumbPath)
        ).not.toBeRejected();
    });
});
