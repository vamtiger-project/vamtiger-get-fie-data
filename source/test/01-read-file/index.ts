import { resolve as resolvePath } from 'path';
import { expect } from 'chai';
import getFileData from '../..';

const sourceFilePath = resolvePath(
    __dirname,
    'mock-data',
    'source.js'
);

describe('get-file-text should', function() {
    it('get text for a defined file path', async function () {
        const fileText = await getFileData(sourceFilePath, 'utf-8');

        expect(fileText).to.contain('// some source file.');
    })
})