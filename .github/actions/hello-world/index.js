const { spawnSync } = require('child_process');

const { status, error } = spawnSync('pwsh', ['-File', './index.ps1'], { stdio: 'inherit' });

if (error) {
  throw error;
}

process.exit(status);
