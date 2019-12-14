const { spawnSync } = require('child_process');
spawnSync('pwsh', ['-command', '". \'./index.ps1\'"'], { stdio: 'inherit' });
