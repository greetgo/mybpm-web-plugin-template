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

  fs.writeFileSync(targetFile, JSON.stringify(Array.from(configMap.values()), null, 2));
} else {
  fs.writeFileSync(targetFile, JSON.stringify(srcConfigJson, null, 2));
}
