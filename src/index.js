import * as core from '@actions/core';
import { promises as fs } from 'fs';
import * as yaml from 'js-yaml';

const run = async () => {
  try {
    const file = core.getInput('file');
    const keys = JSON.parse(core.getInput('key-path'));

    const content = await fs.readFile(file, 'utf8');

    let yamlData = yaml.load(content);

    if (yamlData == null || yamlData == undefined) {
      core.setFailed('Error in reading the yaml file');
      return;
    }

    let output = keys.reduce((dict, key) => dict[key], yamlData);
    const keysList = Object.keys(output);

    core.setOutput('data', keysList);
  } catch (error) {
    core.setFailed(error.message);
  }
};

run();
