import * as child_process from 'child_process';
import xinput = require('xinput');
import { promisify } from 'util';

const exec = promisify(child_process.exec);

export const list = promisify(xinput.list);
export const listProps = promisify(xinput.listProps);

export const mapToOutput = (inputId: number | string, output: string) => {
  return exec(`xinput map-to-output ${inputId} ${output}`);
}
