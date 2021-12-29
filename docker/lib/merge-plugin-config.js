const fs = require('fs')

const srcFile = process.argv[2];
const targetFile = process.argv[3];

const srcConfigJsonText = fs.readFileSync(srcFile, "utf-8");
const srcConfigJson = JSON.parse(srcConfigJsonText);
const configMap = new Map();

for (const x of srcConfigJson) {
  x.path = "http://localhost:4201/plugin.js"
  configMap.set(x.pluginProjectName, x);
}

if (fs.existsSync(targetFile)) {
  const targetConfigJsonText = fs.readFileSync(targetFile, "utf-8");
  const targetConfigJson = JSON.parse(targetConfigJsonText);

  for (const x of targetConfigJson) {
    if (configMap.get(x.pluginProjectName)) continue;
    configMap.set(x.pluginProjectName, x);
  }

  writeFileSyncRecursive(targetFile, JSON.stringify(Array.from(configMap.values()), null, 2));
} else {
  writeFileSyncRecursive(targetFile, JSON.stringify(srcConfigJson, null, 2));
}

function writeFileSyncRecursive(filename, content, charset) {
  let filepath = filename.replace(/\\/g, '/');
  let root = '';

  if (filepath[0] === '/') {
    root = '/';
    filepath = filepath.slice(1);
  } else if (filepath[1] === ':') {
    root = filepath.slice(0, 3);
    filepath = filepath.slice(3);
  }

  const folders = filepath.split('/').slice(0, -1);

  folders.reduce(
    (acc, folder) => {
      const folderPath = acc + folder + '/';
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }
      return folderPath
    },
    root
  );

  fs.writeFileSync(root + filepath, content, charset);
}
