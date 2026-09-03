import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(scriptDir, '..');
const outputRoot = path.join(projectRoot, '_site');

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

for (const filename of ['index.html', 'styles.css', 'slides-data.js', 'app.js', '.nojekyll']) {
  fs.copyFileSync(path.join(projectRoot, filename), path.join(outputRoot, filename));
}

const naverWorksSource = path.join(projectRoot, 'naver-works-training');
if (fs.existsSync(naverWorksSource)) {
  fs.cpSync(naverWorksSource, path.join(outputRoot, 'naver-works-training'), { recursive: true });
}

const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(projectRoot, 'slides-data.js'), 'utf8'), context);
const slideMarkup = context.window.SLIDES.map((slide) => slide.body || '').join('\n');
const assets = new Set(
  [...slideMarkup.matchAll(/src="(\.\/outputs\/[^"]+)"/g)].map((match) => match[1].replace(/^\.\//, '')),
);

for (const asset of assets) {
  const source = path.join(projectRoot, asset);
  const destination = path.join(outputRoot, asset);
  if (!fs.existsSync(source)) throw new Error(`Referenced asset is missing: ${asset}`);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

const buildInfo = {
  slides: context.window.SLIDES.length,
  assets: assets.size,
  naverWorksTraining: fs.existsSync(naverWorksSource),
  generatedAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(outputRoot, 'build-info.json'), `${JSON.stringify(buildInfo, null, 2)}\n`);
process.stdout.write(`GitHub Pages build: ${buildInfo.slides} slides, ${buildInfo.assets} assets\n`);
