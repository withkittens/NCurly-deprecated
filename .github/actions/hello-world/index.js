const { spawnSync } = require('child_process');
const path = require('path');

const file = path.resolve(__dirname, 'index.ps1');
const { status, error } = spawnSync('pwsh', ['-File', file], { stdio: 'inherit' });

if (error) {
  throw error;
}

process.exit(status);
