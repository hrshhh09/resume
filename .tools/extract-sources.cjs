const fs = require('fs');
const path = require('path');

const bundlePath = path.join(process.cwd(), 'Harsh Aathavale — Senior Software Engineer_files', 'page.js');
const outputRoot = path.join(process.cwd(), '.recovered-source');
const bundle = fs.readFileSync(bundlePath, 'utf8');
const sourceMapPattern = /sourceMappingURL=data:application\/json;charset=utf-8;base64,([A-Za-z0-9+/=]+)/g;

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

let recovered = 0;
for (const match of bundle.matchAll(sourceMapPattern)) {
  let sourceMap;
  try {
    sourceMap = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
  } catch {
    continue;
  }

  for (const [index, source] of (sourceMap.sources || []).entries()) {
    const sourceContent = sourceMap.sourcesContent?.[index];
    const normalizedSource = source
      .replace(/^webpack:\/\/[^/]+\/\.\//, '')
      .replace(/^webpack:\/\/[^/]+\//, '')
      .replace(/^\//, '');

    if (!sourceContent || !normalizedSource.startsWith('app/') || normalizedSource.includes('node_modules/')) {
      continue;
    }

    const relativePath = normalizedSource.replace(/^app\//, '');
    const targetPath = path.join(outputRoot, relativePath);
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, sourceContent);
    recovered += 1;
  }
}

console.log(`Recovered ${recovered} source files to ${path.relative(process.cwd(), outputRoot)}`);
for (const entry of fs.readdirSync(outputRoot, { recursive: true })) {
  console.log(entry);
}
