import { cpSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const exportDir = 'out';

if (!existsSync(exportDir)) {
  console.error('Expected Next.js static export folder "out" was not found.');
  process.exit(1);
}

for (const entry of readdirSync(exportDir)) {
  const source = join(exportDir, entry);
  const destination = join('.', entry);

  cpSync(source, destination, {
    recursive: statSync(source).isDirectory(),
    force: true
  });
}

console.log('Copied static export from ./out into the project root.');
