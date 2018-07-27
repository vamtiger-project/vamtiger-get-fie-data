import { readFile } from 'fs';
import { promisify } from 'util';
import * as BlueBird from 'bluebird';

const getFileData = promisify && promisify(readFile) || BlueBird.promisify(readFile);

export default getFileData;