const fs = require('fs');

const versionFile = process.argv[2];
const versionFileText = fs.readFileSync(versionFile, 'utf8');
const versionFileJson = JSON.parse(versionFileText);

const version = versionFileJson.version;
const match = version.match(/(.*)\.(\d+)(.*)/);

const v = parseInt(match[2]);
versionFileJson.version = match[1] + '.' + (v + 1) + match[3];

fs.writeFileSync(versionFile, JSON.stringify(versionFileJson, null, 2));
